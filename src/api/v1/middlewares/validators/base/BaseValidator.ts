import { ObjectID, ObjectId } from "mongodb";

let url = require('url'); 
let validator = require('validator');

export class BaseValidator {

    // --------------------------------------- COMMON VALIDATORS -----------------------------------------

    public static paginationValidation(req: any, res: any, next: any) {
        let skip: number = req.body.skip || null;
        let limit: number = req.body.limit || null;
        let sort: any;
        let err: string = "";

        if((skip !== 0 && !skip) || (limit !==0 && !limit)){
            // Try get pagination from url params:
            let query = url.parse(req.url,true).query;
            skip = query.skip;
            limit = query.limit;
            sort = query.sort;

            if((skip !== 0 && !skip) || (limit !==0 && !limit)){
                // Validation error:
                err = "Validation Error - pagination is required";
                return res.status(400).send({success: false, error: err});
            }
            else{
                // validate values:
                if(validator.isNumeric(skip) == false){
                    err = "Validation Error - Invalid pagination received";
                    return res.status(400).send({success: false, error: err});
                }
                if(validator.isNumeric(limit) == false){
                    err = "Validation Error - Invalid pagination received";
                    return res.status(400).send({success: false, error: err});
                }
            }
        }
        
        skip = Number(skip);
        limit = Number(limit);
        // No validation errors:
        req.pagination = {skip, limit, sort}
        return next();
    }

    public static async objIdRequiredValidation(req: any, res: any, next: any) {
        let id = req.params.id || req.body.id || null;

        // Validate required fields:
        if(!id){
            return res.status(400).send({success: false, error: "Validation Error - id is required"});
        }
        if(!ObjectID.isValid(id)){
            return res.status(400).send({success: false, error: "Validation Error - Invalid id received"});
        }
        
        // No validation errors:
        req.id = new ObjectId(id);
        return next();
    }

    public static async objIdValidation(req: any, res: any, next: any) {
        let id = req.params.id || req.body.id || null;

        if(id && ObjectID.isValid(id) == false){
            return res.status(400).send({success: false, error: "Validation Error - Invalid id received"});
        }
        
        // No validation errors:
        req.id = new ObjectId(id);
        return next();
    }
    // --------------------------------------- HELPERS -----------------------------------------

    protected static numbersRangeValidation(number: number, lowRange: number, highRange: number): boolean {
        let isvalid: boolean = number >= lowRange && number <= highRange;
        return isvalid;
    }
}