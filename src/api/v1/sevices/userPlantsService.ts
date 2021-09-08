import { UserPlantsDAL } from "../DAL/userPlants.DAL";

export class UserPlantsService {
  private userPlantsDAL: UserPlantsDAL | any = new UserPlantsDAL();
  public static readonly ISRAEL_TIME_HOUR_OFFSET = 3;

  public getLastWeekDates() {
    const oneDayInMiliseconds =
      (24 + UserPlantsService.ISRAEL_TIME_HOUR_OFFSET) * 60 * 60 * 1000;
    let currentDateTime = new Date().getTime();
    let tempDate;
    let dateArray = [];

    for (let i = 0; i < 7; i++) {
      currentDateTime = currentDateTime - oneDayInMiliseconds;
      tempDate = this.getDateAndHourStr(new Date(currentDateTime));
      dateArray[i] = tempDate.dateStr;
    }

    return dateArray;
  }

  getDateAndHourStr(date: Date) {
    let timeUTC = date.getUTCMilliseconds();
    const israelTimeMiliseconds =
      UserPlantsService.ISRAEL_TIME_HOUR_OFFSET * 60 * 60 * 1000;
    const israelTimeDate = new Date(timeUTC + israelTimeMiliseconds);
    const day = israelTimeDate.getUTCDate();
    const month = israelTimeDate.getUTCMonth() + 1;
    const yaer = israelTimeDate.getUTCFullYear();
    const hour = israelTimeDate.getUTCHours();
    const minute = israelTimeDate.getUTCMinutes();
    const dateStr = `${day}/${month}/${yaer}`;
    const hourStr = `${hour}:${minute}`;
    return { hourStr, dateStr };
  }

  getUpdateValuesFromReq(reqData: any): any {
    const measurementType = reqData.measurementType;
    const updateValues = reqData.value;
    const dateTime = new Date();
    const { hourStr, dateStr } = this.getDateAndHourStr(dateTime);

    let res = null;
    let value;
    if (updateValues) {
      switch (measurementType) {
        case "soilMoisturePerHour": {
          value = {
            date: dateStr,
            hour: hourStr,
            value: updateValues,
          };
          res = { $push: { soilMoisturePerHour: value } };
          break;
        }
        case "hoursOflightPerDay": {
          value = { date: dateStr, value: updateValues };
          res = { $push: { hoursOflightPerDay: value } };
          break;
        }
        default: {
          throw "ERROR:Update measurementType wrong";
          break;
        }
      }
    } else {
      throw "ERROR:The measurement value empty";
    }

    if (!res) {
      throw "ERROR:Update updateValues wrong";
    } else {
      return res;
    }
  }

  getUpdateValuesFromReqForManuallyUpdate(reqData: any): any {
    const measurementType = reqData.measurementType;
    const updateValues = reqData.value;
    const dateTime = new Date(reqData.dateTime);
    const { hourStr, dateStr } = this.getDateAndHourStr(dateTime);

    let res = null;
    let value;
    if (updateValues) {
      switch (measurementType) {
        case "soilMoisturePerHour": {
          value = {
            date: dateStr,
            hour: hourStr,
            value: updateValues,
          };
          res = { $push: { soilMoisturePerHour: value } };
          break;
        }
        case "hoursOflightPerDay": {
          value = { date: dateStr, value: updateValues };
          res = { $push: { hoursOflightPerDay: value } };
          break;
        }
        default: {
          throw "ERROR:Update measurementType wrong";
          break;
        }
      }
    } else {
      throw "ERROR:The measurement value empty";
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

  public async getAllUsersPlants(serviceData: any): Promise<any> {
    const userRoles = serviceData.user ? serviceData.user.roles : [];
    const filters = { ...serviceData.filters };
    const pagination = serviceData.pagination;
    const options = serviceData.sort;
    const userPlants = await this.userPlantsDAL.getAllUsersPlants(
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
