import { AbsDAL } from "./Base/absDAL";
import { ObjectId } from "mongodb";
import { ErrorMsgs } from "../entities/Errors/ErrorMsgs";
import { UserPlantModel } from "../../../db/models/userPlant.model";

export class UserPlantsDAL extends AbsDAL {
  public static readonly PLANTS_COLLECTION = "users";

  protected getCollectionName(): string {
    return UserPlantsDAL.PLANTS_COLLECTION;
  }

  protected getModel() {
    return UserPlantModel;
  }

  protected getModelInstance(rawData: any) {
    const doc = new UserPlantModel(rawData);

    return doc;
  }

  public async filter(
    filters,
    pagination: any,
    projection: any,
    options: any = {}
  ): Promise<any> {
    const { skip, limit } = pagination;
    try {
      const model = this.getModel();
      const filter = this.getQueryFilters(filters);

      const res = await Promise.all([
        model.find(filter, projection, options).skip(skip).limit(limit),
        model.countDocuments(filter),
      ]);
      const hits = res[0];
      const count = res[1];

      return { hits, count };
    } catch (error) {
      throw new ErrorMsgs("Internal server error", error.message, false);
    }
  }

  public async getAllUsersPlants(
    filters,
    pagination: any,
    projection: any,
    options: any = {}
  ): Promise<any> {
    const { skip, limit } = pagination;
    try {
      const model = this.getModel();
      const filter = this.getQueryFilters(filters);

      const res = await Promise.all([
        model.find(filter, projection, options).skip(skip).limit(limit).populate('plant'),
        model.countDocuments(filter),
      ]);
      const hits = res[0];
      const count = res[1];

      return { hits, count };
    } catch (error) {
      throw new ErrorMsgs("Internal server error", error.message, false);
    }
  }

  public async findOne(filters, options: any = {}): Promise<any> {
    try {
      const model = this.getModel();
      const filter = this.getQueryFilters(filters);

      const res = await model.findOne(filter).sort(options);
      return { res };
    } catch (error) {
      throw new ErrorMsgs("Internal server error", error.message, false);
    }
  }

  public async findOneAndUpdate(filters, update): Promise<any> {
    try {
      const model = this.getModel();
      const res = await model.findOneAndUpdate(filters, update, { new: true });
      return { res };
    } catch (error) {
      throw new ErrorMsgs("Internal server error", error.message, false);
    }
  }

  protected mapDoc(document: any): any {
    let doc: any = JSON.parse(JSON.stringify(document));
    return doc;
  }

  protected getFiltersFromRoles(userRoles: any) {
    let filters = null;
    return filters;
  }

  protected getQueryFilters(filters: any) {
    return filters;
  }
}
