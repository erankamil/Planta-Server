import { AbsRequestHandler } from "./Base/AbsRequestHandler";
import * as _ from "lodash";
import { PlantsService } from "../sevices/plantsService";
// import { EAppointmentStatuses } from "../entities/enums/EAppointmetStatuses.enum";
import { S3 } from "aws-sdk";

import { promisify } from "util";
import * as config from "config";
import { ErrorMsgs } from "../entities/Errors/ErrorMsgs";

require('dotenv').config();

export class PlantsHandler extends AbsRequestHandler {

  
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
      plant =  result.res._doc;
    }
    else  {
     console.log("Planet name serch Error");
     plant = null;
    }
    

    const pageData = {
      plantInfo: plant
    };

    return { pageData };
  }
}
