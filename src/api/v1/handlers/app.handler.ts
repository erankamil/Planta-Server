import { AbsRequestHandler } from "./Base/AbsRequestHandler";
import * as _ from "lodash";
import { PlantsService } from "../sevices/plantsService";
import { UsersService } from "../sevices/usersService";
import { UserPlantsService } from "../sevices/userPlantsService";
import debug = require("debug");

require("dotenv").config();

export class AppHandler extends AbsRequestHandler {
  /**
   * get Planet By Name
   * @param reqData
   */

  public async getPlanetByName(reqData: any) {
    const plantsService = new PlantsService();
    const name = reqData.name;

    const serviceData = {
      user: {},
      pagination: {
        skip: 0,
        limit: 1,
      },
      filters: { name: name },
      sort: {},
    };

    const result = await plantsService.findOne(serviceData);
    let plant;

    if (result?.res?._doc) {
      plant = result.res._doc;
    } else {
      console.log("Planet name serch Error");
      plant = null;
    }

    const pageData = {
      plantInfo: plant,
    };

    return { pageData };
  }

  /**
   * get All Planets
   * @param reqData
   */

  public async getAllPlanets(reqData: any) {
    const plantsService = new PlantsService();

    const serviceData = {
      user: {},
      pagination: {},
      filters: {},
      sort: {},
    };

    const result = await plantsService.filter(serviceData);
    let Allplants;

    if (result?.hits && result?.hits.length) {
      Allplants = result.hits;
    } else if (result?.hits?.length === 0) {
      console.log("No plats to show");
      Allplants = null;
    } else {
      console.log("DB Error");
      Allplants = null;
    }

    const pageData = {
      plants: Allplants,
    };

    return { pageData };
  }

  /**
   * get All UserPlanets
   * @param reqData
   */

  public async getAllUserPlanets(reqData: any) {
    const userPlantsService = new UserPlantsService();
    const serviceData = {
      user: {},
      pagination: {},
      filters: { userId: reqData.userId },
      sort: {},
    };

    const result = await userPlantsService.getAllUsersPlants(serviceData);
    let Allplants;

    if (result?.hits && result?.hits.length) {
      Allplants = result.hits;
    } else if (result?.hits?.length === 0) {
      console.log("No plats to show");
      Allplants = null;
    } else {
      console.log("DB Error");
      Allplants = null;
    }

    const pageData = {
      plants: Allplants,
    };

    return { pageData };
  }

  /**
   * get Daily Measurement Avarage
   * @param reqData
   */

  public async getDailyAverageMeasurement(reqData: any) {
    const userPlantsService = new UserPlantsService();

    const userPlantsServiceData = {
      user: {},
      pagination: {},
      filters: { _id: reqData.userPlantId },
      sort: {},
    };

    const userPlantData = await userPlantsService.findOne(
      userPlantsServiceData
    );
    const userPlant = userPlantData?.res?._doc;

    if (!userPlant.plant) {
      throw "Error: cannot find userplant";
    }
    const plant = userPlant.plant;
    const lastWeekDatesArray = userPlantsService.getLastWeekDates();
    const dailyAverageMeasurement = lastWeekDatesArray.map((date) => {
      const hoursOflightData = userPlant.hoursOflightPerDay.find(
        (val) => val.date === date
      );
      const hoursOflight = hoursOflightData._doc.value;
      let tempSumValue = 0;
      let counter = 0;
      for (var i = 0; i < userPlant.soilMoisturePerHour.length; i++) {
        if (userPlant.soilMoisturePerHour[i]._doc.date === date) {
          counter++;
          tempSumValue += userPlant.soilMoisturePerHour[i]._doc.value;
        }
      }

      const DailyAverag = tempSumValue / counter;
      return { date, hoursOflight, DailyAverag };
    });

    const pageData = {
      dailyAverageMeasurement: dailyAverageMeasurement,
      optimalSunHourtsPerDay: plant._doc.sun_hours,
      optimalSoilMoisture: plant._doc.soil_moisture,
    };

    return { pageData };
  }

  /**
   * get Last Soil Measurement
   * @param reqData
   */

   public async getLastSoilMeasurement(reqData: any) {
    const userPlantsService = new UserPlantsService();

    const userPlantsServiceData = {
      user: {},
      pagination: {},
      filters: { _id: reqData.userPlantId },
      sort: {},
    };

    const userPlantData = await userPlantsService.findOne(
      userPlantsServiceData
    );
    const userPlant = userPlantData?.res?._doc;

    if (!userPlant.plant) {
      throw "Error: cannot find userplant";
    }

    const plant = userPlant.plant;
    const lastSoilMeasurement = userPlant.soilMoisturePerHour.sort((a,b)=>
   new Date( `${b._doc.date} ${b._doc.hour}`).getTime() - new Date( `${a._doc.date} ${a._doc.hour}`).getTime())[0];
    // var maxB = a.sort((a,b)=>b.y-a.y)[0].y;
    
    const pageData = {
      lastSoilMeasurement: lastSoilMeasurement,
      optimalSoilMoisture: plant._doc.soil_moisture,
    };

    return { pageData };
  }

  /**
   * create New User
   * @param reqData
   */

  public async createNewUser(reqData: any) {
    const usersService = new UsersService();

    const userName = reqData.userName;
    const userId = reqData.userId;

    const newUserData = {
      userId: userId,
      name: userName,
    };

    // Create User:
    const newUser = await usersService.createUser(newUserData);

    const pageData = {
      newUser: newUser,
    };

    return { pageData };
  }

  /**
   * add User Plant
   * @param reqData
   */

  public async addUserPlant(reqData: any) {
    const userPlantsService = new UserPlantsService();
    const plantsService = new PlantsService();

    const userId = reqData.userId;
    const userPlantName = reqData.userPlantName;
    const sensorId = reqData.sensorId;
    const plantName = reqData.plantName;

    const plantsData = {
      pagination: { skip: 0, limit: 1 },
      filters: {},
      sort: { name: plantName },
    };

    const plantRes = await plantsService.findOne(plantsData);

    const plantId = plantRes?.res?._doc?._id;

    if (!plantId) {
      throw new Error("ERROR: Plant name is not supported ");
    }

    const newUserPlantData = {
      userId: userId,
      name: userPlantName,
      sensorId: sensorId,
      plant: plantId,
    };

    // Create UserPlant:
    const UserPlant = await userPlantsService.createUserPlant(newUserPlantData);

    const pageData = {
      newUserPlant: UserPlant,
    };

    return { pageData };
  }

  /**
   * add Measurement Value
   * @param reqData
   */

  public async addMeasurementValue(reqData: any) {
    const userPlantsService = new UserPlantsService();

    const sensorId = reqData.sensorId;

    const update = userPlantsService.getUpdateValuesFromReq(reqData);

    const filter = { sensorId: sensorId };
    const updatedUserPlant = await userPlantsService.findOneAndUpdate(
      filter,
      update
    );

    const pageData = {
      newUser: updatedUserPlant,
    };

    return { pageData };
  }

  /**
   * add Measurement Value Manually
   * @param reqData
   */

  public async addMeasurementValueManually(reqData: any) {
    const userPlantsService = new UserPlantsService();
    const sensorId = reqData.sensorId;

    const update =
      userPlantsService.getUpdateValuesFromReqForManuallyUpdate(reqData);

    const filter = { sensorId: sensorId };
    const updatedUserPlant = await userPlantsService.findOneAndUpdate(
      filter,
      update
    );

    const pageData = {
      newUser: updatedUserPlant,
    };

    return { pageData };
  }
}
