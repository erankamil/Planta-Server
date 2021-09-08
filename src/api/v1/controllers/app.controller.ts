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

    // get All Planets
    this.router.get("/get-all-plants", this.getAllPlanets.bind(this));

    // get All User Planets
    this.router.get("/get-all-userplants/:userId", this.getAllUserPlanets.bind(this));

    // get Daily Measurement Avarage
    this.router.get( "/get-daily-measurement-avarage/:userPlantId", this.getDailyAverageMeasurement.bind(this));
     
    // create new user
    this.router.post("/sign-up", this.createNewUser.bind(this));

    // create new user-plant
    this.router.post("/add-user-plant", this.addUserPlant.bind(this));

    // add measurement val
    this.router.put("/add-measurement-value",this.addMeasurementValue.bind(this)
    );

    // add measurement val manually
    this.router.put("/add-measurement-value-manually",this.addMeasurementValueManually.bind(this)
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
   *  get All Planets
   * @param req
   * @param res
   * @param next
   */
  public async getAllPlanets(req: any, res: any, next: any) {
    console.log("App Controller - getAllPlanets");
    const handler = new AppHandler();

    // Create serve data:
    let serveData = this.CreateServeData(
      handler.getAllPlanets,
      {},
      handler.buildPageDataResult,
      handler,
      "getAllPlanets"
    );
    // Serve request:
    super.ServeRequest(req, res, serveData);
  }

  /**
   *  get All User Planets
   * @param req
   * @param res
   * @param next
   */
   public async getAllUserPlanets(req: any, res: any, next: any) {
    console.log("App Controller - getAllUserPlanets");
    const handler = new AppHandler();

    // Create serve data:
    let serveData = this.CreateServeData(
      handler.getAllUserPlanets,
      { userId: req.params.userId },
      handler.buildPageDataResult,
      handler,
      "getAllUserPlanets"
    );
    // Serve request:
    super.ServeRequest(req, res, serveData);
  }

  /**
   *  get Daily Measurement Avarage
   * @param req
   * @param res
   * @param next
   */
  public async getDailyAverageMeasurement(req: any, res: any, next: any) {
    console.log("App Controller - getDailyAverageMeasurement");
    const handler = new AppHandler();

    // Create serve data:
    let serveData = this.CreateServeData(
      handler.getDailyAverageMeasurement,
      { userPlantId: req.params.userPlantId },
      handler.buildPageDataResult,
      handler,
      "getDailyAverageMeasurement"
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

  
  /**
   *  add Measurement Value
   * @param req
   * @param res
   * @param next
   */
   public async addMeasurementValueManually(req: any, res: any, next: any) {
    console.log("App Controller - addMeasurementValueManually");
    const handler = new AppHandler();

    // Create serve data:
    let serveData = this.CreateServeData(
      handler.addMeasurementValueManually,
      {
        sensorId: req.body.sensorId,
        measurementType: req.body.measurementType,
        value: req.body.value,
        dateTime:req.body.dateTime,
      },
      handler.buildPageDataResult,
      handler,
      "addMeasurementValueManually"
    );
    // Serve request:
    super.ServeRequest(req, res, serveData);
  }
}
