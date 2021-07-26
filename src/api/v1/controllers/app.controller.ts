import AbsController from "./Base/AbsController";
import { Request, Response, NextFunction } from "express";
import { ErrorMsgs } from "../entities/Errors/ErrorMsgs";
import { AppHandler } from "../handlers/app.handler";

export class AppController extends AbsController {
  protected initializeRoutes(): void {
    // Approved Check
    this.router.get("/", this.approvedCheck.bind(this));

    // get Planet By Name
    this.router.get("/get-plant/:name", this.getPlanetByName.bind(this));

    // create new user
    this.router.post("/sign-up", this.createNewUser.bind(this));

    // create new user-plant
    this.router.post("/add-user-plant", this.addUserPlant.bind(this));

    // add measurement val
    this.router.put(
      "/add-measurement-value",
      this.addMeasurementValue.bind(this)
    );
  }
  // ----------------------------------------- APP CONTROLLER -----------------------------------------------

  /**
   *  Approved Check
   * @param req
   * @param res
   * @param next
   */
  public async approvedCheck(req: any, res: any, next: any) {
    console.log("Plants Controller - Approved Check");
    res.send("Approved");
  }

  /**
   *  get Planet By Name
   * @param req
   * @param res
   * @param next
   */
  public async getPlanetByName(req: any, res: any, next: any) {
    console.log("App Controller - getPlanetByName");
    const handler = new AppHandler();

    // Create serve data:
    let serveData = this.CreateServeData(
      handler.getPlanetByName,
      { name: req.params.name },
      handler.buildPageDataResult,
      handler,
      "getPlanetByName"
    );
    // Serve request:
    super.ServeRequest(req, res, serveData);
  }

  /**
   *  create New User
   * @param req
   * @param res
   * @param next
   */
  public async createNewUser(req: any, res: any, next: any) {
    console.log("App Controller - createNewUser");
    const handler = new AppHandler();

    // Create serve data:
    let serveData = this.CreateServeData(
      handler.createNewUser,
      {
        userName: req.body.userName,
        userId: req.body.userId,
      },
      handler.buildPageDataResult,
      handler,
      "createNewUser"
    );
    // Serve request:
    super.ServeRequest(req, res, serveData);
  }

  /**
   *  add User Plant
   * @param req
   * @param res
   * @param next
   */
  public async addUserPlant(req: any, res: any, next: any) {
    console.log("App Controller - addUserPlant");
    const handler = new AppHandler();

    // Create serve data:
    let serveData = this.CreateServeData(
      handler.addUserPlant,
      {
        userId: req.body.userId,
        userPlantName: req.body.userPlantName,
        sensorId: req.body.sensorId,
        plantName: req.body.plantName, // plant optimal information
      },
      handler.buildPageDataResult,
      handler,
      "addUserPlant"
    );
    // Serve request:
    super.ServeRequest(req, res, serveData);
  }

  /**
   *  add Measurement Value
   * @param req
   * @param res
   * @param next
   */
  public async addMeasurementValue(req: any, res: any, next: any) {
    console.log("App Controller - addMeasurementValue");
    const handler = new AppHandler();

    // Create serve data:
    let serveData = this.CreateServeData(
      handler.addMeasurementValue,
      {
        sensorId: req.body.sensorId,
        measurementType: req.body.measurementType,
        value: req.body.value,
      },
      handler.buildPageDataResult,
      handler,
      "addMeasurementValue"
    );
    // Serve request:
    super.ServeRequest(req, res, serveData);
  }
}
