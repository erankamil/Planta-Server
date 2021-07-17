import { ErrorMsgs } from "../../../../api/v1/entities/Errors/ErrorMsgs";
import { ObjectId } from "mongodb";

export abstract class AbsDAL {
    protected abstract getCollectionName();
    protected abstract getModel();
    protected abstract getQueryFilters(filters: any);
    protected abstract getModelInstance(rawData: any);

    /**
    * filter
    * filter db collection
    * 
    * @param {any} filters Filters object
    * @param {any} pagination Pagination object
    * 
    * @returns {Promise<any>}  Mapped DB Result
    */
    public async filter(filters: any, pagination: any, projection: any, options: any = {}): Promise<any> {
        try {
            const model = this.getModel();
            const query = this.buildQuery(filters, pagination);

            const res = await Promise.all([
                model.find(query.filter, projection, options).skip(query.skip).limit(query.limit),
                model.countDocuments(query.filter)
            ])
            const hits = res[0];
            const count = res[1];

            return { hits, count };
        } catch (error) {
            throw new ErrorMsgs('Failed to filter docs', error.message, false);
        }
    }

    /**
    * create
    * create new document
    * 
    * @param {any} rawData Document raw data
    * 
    * @returns {Promise<any>} 
    */
    public async create(rawData: any): Promise<any> {
        try {
            const doc = this.getModelInstance(rawData);

            const document = await doc.save();

            return document;
        } catch (error) {
            throw new ErrorMsgs('Failed to create doc', error.message, false);      
          }
    }

    /**
    * read
    * read single document
    * @param {any} docId document id
    * 
    * @returns {Promise<any>}  
    */
    public async read(docId: ObjectId): Promise<any> {
        try {
            const model = this.getModel();
            const doc = await model.find({ _id: docId });

            return doc[0];
        } catch (error) {
            throw new ErrorMsgs('Failed to read doc', error.message, false);    
            }
    }

    /**
    * update
    * update document
    * @param {any} rawData Document raw data
    * 
    * @returns {Promise<any>} 
    */
    public async update(rawData: any): Promise<any> {
        try {
            const model = this.getModel();
            const filter = { "_id": rawData._id };
            const update = this.getUpdateObj(rawData);
            const isUpdated = true;

            const res = await model.updateMany(filter, update);

            return { isUpdated };
        } catch (error) {
            throw new ErrorMsgs('Failed to update doc', error.message, false);
        }
    }

    /**
    * delete
    * delete document
    * @param {any} rawData Document raw data
    * 
    * @returns {Promise<any>} 
    */
    public async delete(id: ObjectId): Promise<any> {
        try {
            const model = this.getModel();
            const isDeleted = true;

            const res = await model.deleteOne({ _id: id });

            return { isDeleted };
        } catch (error) {
            throw new ErrorMsgs('Failed to delete doc', error.message, false);
        }
    }

    /**
    * deleteMany
    * delete multiple documents by filter
    * @param {any} filter filter
    * 
    * @returns {Promise<any>} 
    */
   public async deleteMany(filter: any): Promise<any> {
    try {
        const model = this.getModel();
        const isDeleted = true;

        const res = await model.deleteMany(filter);

        return { isDeleted };
    } catch (error) {
        throw new ErrorMsgs('Failed to delete docs', error.message, false);
    }
}

    /**
    * get
    * get documents - no permissions - for server internal use
    * @param {any} filters Filters object
    * 
    * @returns {Promise<any>}  
    */
    public async get(filters: any): Promise<any> {
        try {
            const model = this.getModel();
            const docs = await model.find(filters);

            return docs;
        } catch (error) {
            throw new ErrorMsgs('Failed to get docs', error.message, false);
        }
    }

    protected getUpdateObj(rawData: any) {
        delete rawData._id;

        return rawData;
    }

    // ------------------------------------------- PRIVATE METHODS --------------------------------------------

    private buildQuery(filters: any, pagination: any) {
        const queryFilters = this.getQueryFilters(filters);
        let query = {
            filter: {
                ...queryFilters
            },
            ...pagination
        }

        Object.keys(query.filter).forEach((key: any) => {
            if (!query.filter[`${key}`]) {
                delete query.filter[`${key}`];
            }
        })

        return query;
    }
}