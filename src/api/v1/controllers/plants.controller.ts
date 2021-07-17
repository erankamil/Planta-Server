
import AbsController from './Base/AbsController';
import { Request, Response, NextFunction } from 'express';
import { ErrorMsgs } from '../entities/Errors/ErrorMsgs';
import { PlantsHandler } from '../handlers/plants.handler';


export class PlantsController extends AbsController {
  protected initializeRoutes(): void {
    // Approved Check
    this.router.get('/', this.approvedCheck.bind(this));

    // Get People Befour Me
    this.router.get('/get-plant/:name', this.getPlanetByName.bind(this));
  }
  // ----------------------------------------- HOME PAGE CONTROLLER -----------------------------------------------

  /**
   *  Approved Check
   * @param req
   * @param res
   * @param next
   */
  public async approvedCheck(req: any, res: any, next: any) {
    console.log('Plants Controller - Approved Check');
    res.send('Approved');
  }

  /**
   *  Get People Befour Me
   * @param req
   * @param res
   * @param next
   */
  public async getPlanetByName(req: any, res: any, next: any) {
    console.log('Plants Controller - getPlanetByName');
    const handler = new PlantsHandler();

    // Create serve data:
    let serveData = this.CreateServeData(
      handler.getPlanetByName,
      { name: req.params.name },
      handler.buildPageDataResult,
      handler,
      'getPlanetByName'
    );
    // Serve request:
    super.ServeRequest(req, res, serveData);
  }

}
