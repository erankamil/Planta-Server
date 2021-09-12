import { AbsRequestHandler } from "./Base/AbsRequestHandler";
import * as _ from "lodash";
import { PlantsService } from "../sevices/plantsService";
import { UsersService } from "../sevices/usersService";
import { UserPlantsService } from "../sevices/userPlantsService";
import debug = require("debug");
import  { Twilio } from 'twilio';

require("dotenv").config();

const client = new Twilio(process.env.TWILIO_ACOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

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
    let hoursOflight = 0;
    const dailyAverageMeasurement = lastWeekDatesArray.map((date) => {
      const hoursOflightData = userPlant.hoursOflightPerDay.find(
        (val) => val.date === date
      ) || {};
      if(hoursOflightData?._doc?.value){
        hoursOflight = hoursOflightData._doc.value;
      }
      
      let tempSumValue = 0;
      let counter = 0;
      let DailyAverag = 0;

      if(userPlant.soilMoisturePerHour.length !== 0){
        for (var i = 0; i < userPlant.soilMoisturePerHour.length; i++) {
          if (userPlant.soilMoisturePerHour[i]?._doc?.date === date &&
            userPlant.soilMoisturePerHour[i]?._doc?.value) {
            counter++;
            tempSumValue += userPlant.soilMoisturePerHour[i]._doc.value;
          }
        }
      }
      if(counter){
        DailyAverag = tempSumValue / counter;
      }
      const newDate = `${date.split('/')[0]}/${date.split('/')[1]}`;
      return { newDate, hoursOflight, DailyAverag };
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
    const GREEN = 1;
    const YELLOW = 2;
    const RED = 3;

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
    const lastSoilMeasurement = userPlant.soilMoisturePerHour.sort(
      (a, b) =>
        new Date(`${b._doc.date} ${b._doc.hour}`).getTime() -
        new Date(`${a._doc.date} ${a._doc.hour}`).getTime()
    )[0];

    let optimalSoilNumber = null;
    let status = null;
    if(plant?._doc?.soil_moisture && lastSoilMeasurement?._doc?.value){
      const soil_moisture =plant?._doc?.soil_moisture;      
      const minOptimalSoilNumber = +soil_moisture.split('-')[0]
      const maxOptimalSoilNumber = +soil_moisture.split('-')[1]
      optimalSoilNumber = (minOptimalSoilNumber + maxOptimalSoilNumber)/2
      const lastSoilMeasuremenVal = lastSoilMeasurement._doc.value;
      
      if (lastSoilMeasuremenVal  <=  maxOptimalSoilNumber && lastSoilMeasuremenVal  >=  minOptimalSoilNumber){
        status = GREEN;         // good  
      }
      else if(lastSoilMeasuremenVal  <  maxOptimalSoilNumber * 1.2 && lastSoilMeasuremenVal  >  minOptimalSoilNumber * 0.8){
        status = YELLOW;        // not so good 
      }
      else{
        status = RED;           // bad
      }
    }

    const pageData = {
      lastSoilMeasurement: lastSoilMeasurement,
      optimalSoilMoisture: plant?._doc?.soil_moisture,
      optimalSoilNumber: optimalSoilNumber,
      status:status
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
    const phoneNumber = reqData.phoneNumber;

    const newUserData = {
      userId: userId,
      name: userName,
      phoneNumber:phoneNumber
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
      filters: {name: plantName},
      sort: {},
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
    const usersService = new UsersService();

    const sensorId = reqData.sensorId;

    const update = userPlantsService.getUpdateValuesFromReq(reqData);

    const filter = { sensorId: sensorId };
    const updatedUserPlant = await userPlantsService.findOneAndUpdate(
      filter,
      update
    );

    if(!updatedUserPlant?.res){
      throw "Error: update fail."
    }
    else if(!updatedUserPlant.res._doc?.userId){
      throw "Error: userId is not correct."
    }

    const userId = updatedUserPlant.res._doc.userId
    const usersServiceData = {
      filters: { userId: userId },
    };
    const currentUser = await usersService.findOne(usersServiceData);
    const phoneNumber = currentUser?.res._doc?.phoneNumber;

    if(reqData.measurementType === 'soilMoisturePerHour' && phoneNumber ){
      const minimalAllowedSoilMoisture = userPlantsService.getMinimalAllowedSoilMoisture(updatedUserPlant);
      const currentSoilMoistureValue = reqData.value;
      const plantName = updatedUserPlant.res?._doc?.name || `one of your plant`
      
      if(minimalAllowedSoilMoisture &&  minimalAllowedSoilMoisture > currentSoilMoistureValue){
        const thirstyMessage = `hey, ${plantName} is starting to get too thirsty,it's time to water it.`
        console.log(thirstyMessage);
        {
          client.messages.create(
            {
              body:thirstyMessage,
              to: '+972'+ phoneNumber.toString(),
              from: "PLANTA"
            }
          )
          .then(
            (message) => console.log("message sent: " + message.sid + " " + message.to + " " + message.body )
          )
          .catch(
            (err) => console.log(err)
          )
        }
      }
    }
    
    const pageData = {
      updatedUserPlant: updatedUserPlant
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
