import { Router, Request, Response, NextFunction } from "express";
import { PlantsController } from "./controllers/plants.controller";

class V1Routes {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    const plantsController = new PlantsController();

    this.router.use("/plants-info", plantsController.router);
  }
}

export default V1Routes;
