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
      user: reqData.user,
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
      user: userId,
      name: userPlantName,
      sensorId: sensorId,
      plant: plantId,
    };

    // Create UserPlant:
    const UserPlant = await userPlantsService.createUserPlant(newUserPlantData);

    const pageData = {
      newUser: UserPlant,
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
}
