import { Schema, model, Document } from 'mongoose';
import { BoundTo, Mesh, StrongSchema, createStrongSchema } from '../../utils/ts-coverage';
import { cleanObject } from "../../generics/genericFunctions";
import { DisplayItem } from '../../api/v1/entities/displayItem';

export interface IPlant {
    name:String,
    description:String,
    optimal_sun:String,
    optimal_soil:String
    planting_considerations:String,
    when_to_plant:String,
    growing_from_seed:String,
    transplanting:String,
    spacing:String,
    watering:String,
    feeding:String,
    other_care:String,
    diseases:String,
    pests:String,
    harvesting:String,
    storage_use:String,
    image_url:String,
}

class PlantMethods {}

const PlantSchema = createStrongSchema(({
    name:{type:String},
    description:{type:String},
    optimal_sun:{type:String},
    optimal_soil:{type:String},
    planting_considerations:{type:String},
    when_to_plant:{type:String},
    growing_from_seed:{type:String},
    transplanting:{type:String},
    spacing:{type:String},
    watering:{type:String},
    feeding:{type:String},
    other_care:{type:String},
    diseases:{type:String},
    pests:{type:String},
    harvesting:{type:String},
    storage_use:{type:String},
    image_url:{type:String},

} as StrongSchema<IPlant>), new PlantMethods(), { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })


PlantSchema.set('toJSON', { transform: function (doc: any, ret: any, option: any) { return cleanObject(ret); } })

export type IPlantModel = Mesh<IPlant, PlantMethods, Document>;
export const PlantModel = model<IPlantModel>('plants', PlantSchema)
