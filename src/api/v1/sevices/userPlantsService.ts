import { UserPlantsDAL } from "../DAL/userPlants.DAL";

export class UserPlantsService {
  private userPlantsDAL: UserPlantsDAL | any = new UserPlantsDAL();

  getUpdateValuesFromReq(reqData: any): any {
    const measurementType = reqData.measurementType;
    const updateValues = reqData.value;
    let res = null;
    let value;
    switch (measurementType) {
      case "soilMoisturePerHour": {
        if (updateValues?.date && updateValues?.hour && updateValues?.value) {
          value = {
            date: updateValues.date,
            hour: updateValues.hour,
            value: updateValues.value,
          };
          res = { $push: { soilMoisturePerHour: value } };
        }
        break;
      }
      case "hoursOflightPerDay": {
        if (updateValues?.date && updateValues?.value) {
          value = { date: updateValues.date, value: updateValues.value };
          res = { $push: { hoursOflightPerDay: value } };
        }
        break;
      }
      default: {
        throw "ERROR:Update measurementType wrong";
        break;
      }
    }

    if (!res) {
      throw "ERROR:Update updateValues wrong";
    } else {
      return res;
    }
  }

  public async createUserPlant(userData: any): Promise<any> {
    const newUserPlant = await this.userPlantsDAL.create(userData);
    return newUserPlant;
  }

  public async filter(serviceData: any): Promise<any> {
    const userRoles = serviceData.user ? serviceData.user.roles : [];
    const filters = { ...serviceData.filters };
    const pagination = serviceData.pagination;
    const options = serviceData.sort;
    const userPlants = await this.userPlantsDAL.filter(
      filters,
      pagination,
      {},
      options
    );
    return userPlants;
  }

  public async findOne(serviceData: any): Promise<any> {
    const filters = { ...serviceData.filters };
    const options = serviceData.sort?.sort;
    const userPlant = await this.userPlantsDAL.findOne(filters, options);
    return userPlant;
  }

  public async findOneAndUpdate(filter: any, update: any): Promise<any> {
    const userPlant = await this.userPlantsDAL.findOneAndUpdate(filter, update);
    return userPlant;
  }
}
