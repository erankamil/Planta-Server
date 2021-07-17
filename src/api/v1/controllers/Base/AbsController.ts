import { ErrorMsgs } from "../../entities/Errors/ErrorMsgs";
import { AbsRequestHandler } from "../../handlers/Base/AbsRequestHandler";
import { Controller } from "../../../../generics/base.controller";
import { ServeData } from "../../entities/Controllers/ServeData";

abstract class AbsController extends Controller {
  /**
   * ServeRequest
   * Base request serving flow
   *
   * @param {any} req request
   * @param {any} res response
   * @param {any} serveData Data needed to serve request
   *
   * @returns {Response}
   */
  public async ServeRequest(req: any, res: any, serveData: any) {
    let handleMethod: any = serveData.Handle;
    let getDataArgs: any = serveData.GetDataArgs;
    let buildResult: any = serveData.BuildResult;
    let handler: AbsRequestHandler = serveData.Handler;
    let reqName: string = serveData.ReqName;

    let errMsg = `Error occured on ${reqName} Request.`;
    if (!handler) {
      throw new Error(
        errMsg + " Internal Server error - Request handler is undefined"
      );
    }

    try {
      let result = await handler.HandleRequest(
        getDataArgs,
        handleMethod,
        buildResult
      );

      if (result.success == false) {
        let err = result.error;
        if (err) {
          console.log(errMsg + ": " + err.ErrorToDeveloper);
          res.Success = result.success;
          res.status(result.status_code).send(err);
        }
      } else {
        this.BuildResponse(res, result);
        res.send(result);
      }
    } catch (error) {
      console.log(errMsg + error.message);
      res.Success = false;
      res.status(500).send(new ErrorMsgs(errMsg, error.message));
    }
  }

  public CreateServeData(
    handle: Function,
    getDataArgs: any,
    buildResult: Function,
    handler: AbsRequestHandler,
    reqName: string
  ): ServeData {
    return new ServeData(handle, getDataArgs, buildResult, handler, reqName);
  }

  // ------------------------------------------------- RESPONSE BUILDERS ----------------------------------------------------

  /**
   * Build General Response from result
   * Structure: {Data, Success, Error}
   *
   * @param {any} res response
   *
   * @returns {any}  : General Response
   */
  public BuildResponse(res: any, result: any): void {
    res.Data = result.Data;
    res.Success = result.Success;
    res.Error = result.Error;
  }
}

export default AbsController;
