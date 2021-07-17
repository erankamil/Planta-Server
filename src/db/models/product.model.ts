import { Schema, model, Document } from 'mongoose';
import { BoundTo, Mesh, StrongSchema, createStrongSchema } from '../../utils/ts-coverage';
import { cleanObject } from "../../generics/genericFunctions";
import { DisplayItem } from '../../api/v1/entities/displayItem';

export interface IProduct {
    activeIngredientType:string;
    canabisType:string;
    canabisStrain:string;
    activePercentage:number;
    company:string;
    price:number;
    productType:string;
    isCanadien:boolean;
}

class ProductMethods {

}

const ProductSchema = createStrongSchema(({
    // name: { type: String },
    // phoneNumber: { type: Number },
    // status: { type: String },//enum
    // licensePhoto: { type: String },
    // prescriptionPhoto: { type: String },
    // appointmentNumber: { type: String },
} as StrongSchema<IProduct>), new ProductMethods(), { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })


ProductSchema.set('toJSON', { transform: function (doc: any, ret: any, option: any) { return cleanObject(ret); } })

export type IProductModel = Mesh<IProduct, ProductMethods, Document>;
export const ProductModel = model<IProductModel>('Product', ProductSchema)
