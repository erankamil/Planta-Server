import { Schema, model, Document } from "mongoose";
import {
  BoundTo,
  Mesh,
  StrongSchema,
  createStrongSchema,
} from "../../utils/ts-coverage";
import { cleanObject } from "../../generics/genericFunctions";
import { DisplayItem } from "../../api/v1/entities/displayItem";
import { ObjectId } from "mongoose";

export interface IUser {
  userId: string;
  name: string;
}

class UserMethods {}

const UserSchema = createStrongSchema(
  {
    userId: { type: String },
    name: { type: String },
  } as StrongSchema<IUser>,
  new UserMethods(),
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

UserSchema.set("toJSON", {
  transform: function (doc: any, ret: any, option: any) {
    return cleanObject(ret);
  },
});

export type IUserModel = Mesh<IUser, UserMethods, Document>;
export const UserModel = model<IUserModel>("users", UserSchema);
