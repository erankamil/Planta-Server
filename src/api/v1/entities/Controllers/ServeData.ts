import { AbsRequestHandler } from "api/v1/handlers/Base/AbsRequestHandler";

export class ServeData{
    Handle: Function;
    GetDataArgs: any;
    BuildResult: Function;
    Handler: AbsRequestHandler;
    ReqName: string;

    constructor(handle: Function, getDataArgs: any, buildResult: Function, handler: AbsRequestHandler, reqName: string) {
        this.Handle = handle;
        this.GetDataArgs = getDataArgs;
        this.BuildResult = buildResult;
        this.Handler = handler;
        this.ReqName = reqName;
    }
}