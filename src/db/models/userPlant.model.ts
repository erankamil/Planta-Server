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

export interface IUserPlant {
  userId: string;
  name: string;
  sensorId: string;
  plant: ObjectId; // plant optimal information
  soilMoisturePerHour: [{ date: string; hour: string; value: number }];
  hoursOflightPerDay: [{ date: string; value: number }];
}

class UserPlantMethods {}

const UserPlantSchema = createStrongSchema(
  {
    userId: { type: String },
    name: { type: String },
    sensorId: { type: String },
    plant: { type: Schema.Types.ObjectId, ref: "plants" },
    soilMoisturePerHour: [{ date: String, hour: String, value: Number }],
    hoursOflightPerDay: [{ date: String, value: Number }],
  } as StrongSchema<IUserPlant>,
  new UserPlantMethods(),
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

UserPlantSchema.set("toJSON", {
  transform: function (doc: any, ret: any, option: any) {
    return cleanObject(ret);
  },
});

export type IUserPlantModel = Mesh<IUserPlant, UserPlantMethods, Document>;
export const UserPlantModel = model<IUserPlantModel>(
  "user-plants",
  UserPlantSchema
);
