import { Result } from "../../entities/Result";
import { ErrorMsgs } from "../../entities/Errors/ErrorMsgs";

export abstract class AbsRequestHandler{

    public async HandleRequest(reqData: any, handle: Function, buildResult: Function): Promise<Result> {
        let result = new Result();
        try {
            let res = await handle(reqData);
            if (!res) {
                throw new ErrorMsgs('Internal error occured while handling Request');
            }
            result.result = buildResult(res);

            return result;
        } catch (error) {
            return this.buildErrorResult(error.message || error);
        }
    }

    //------------------------------------------- RESULT BUILDERS ----------------------------------------------------

    public buildResult(resultData: any) {
        const result = { ...resultData };
        return result;
    }

    public buildPageDataResult(resultData: any) {
        let result = { page_data: resultData.pageData };

        return result;
    }

    protected buildErrorResult(error: any): Result {
        let res = new Result();
        res.success = false;
        res.error = error,  
        res.status_code = error.StatusCode || 500;

        return res;
    }
}