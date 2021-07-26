import { UsersDAL } from "../DAL/users.DAL";

export class UsersService {
  private usersDAL: UsersDAL | any = new UsersDAL();

  public async createUser(userData: any): Promise<any> {
    const newUser = await this.usersDAL.create(userData);
    return newUser;
  }

  public async filter(serviceData: any): Promise<any> {
    const userRoles = serviceData.user ? serviceData.user.roles : [];
    const filters = { ...serviceData.filters };
    const pagination = serviceData.pagination;
    const options = serviceData.sort;
    const users = await this.usersDAL.filter(filters, pagination, {}, options);
    return users;
  }

  public async findOne(serviceData: any): Promise<any> {
    const filters = { ...serviceData.filters };
    const options = serviceData.sort?.sort;
    const user = await this.usersDAL.findOne(filters, options);
    return user;
  }

  public async findOneAndUpdate(
    filter: any,
    update: any,
    options: any = {}
  ): Promise<any> {
    const user = await this.usersDAL.findOneAndUpdate(filter, update, options);
    return user;
  }
}
