import { Router, Request, Response, NextFunction } from "express";
import {AppController} from "./controllers/app.controller";

class V1Routes {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    const appController = new AppController();
    this.router.use("/planta", appController.router);
  }
}

export default V1Routes;
