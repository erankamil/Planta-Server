import { PlantsDAL } from "../DAL/plants.DAL";

export class PlantsService {
  private plantsDAL: PlantsDAL | any = new PlantsDAL();

  public async filter(serviceData: any): Promise<any> {
    const userRoles = serviceData.user ? serviceData.user.roles : [];
    const filters = { ...serviceData.filters };
    const pagination = serviceData.pagination;
    const options = serviceData.sort;
    const plants = await this.plantsDAL.filter(
      filters,
      pagination,
      {},
      options
    );
    return plants;
  }

  public async findOne(serviceData: any): Promise<any> {
    const filters = { ...serviceData.filters };
    const options = serviceData.sort?.sort;
    const plant = await this.plantsDAL.findOne(filters, options);
    return plant;
  }

  public async findOneAndUpdate(
    filter: any,
    update: any,
    options: any = {}
  ): Promise<any> {
    const plant = await this.plantsDAL.findOneAndUpdate(
      filter,
      update,
      options
    );
    return plant;
  }
}
