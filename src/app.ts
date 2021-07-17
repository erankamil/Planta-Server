import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import ApiRoutes from './api/routes';
import './db/mongoose-init';
import * as helmet from 'helmet';
import * as config from 'config';
import * as expressValidator from 'express-validator';

class App {
  public app: express.Application;
  public port: number;

  constructor(port: any) {
    this.app = express();
    this.port = port;
    this.initAppUsage();
  }

  private initAppUsage() {
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares() {

    const allowedOrigins: any = config.get("Security.AllowedOrigins");

    this.app.use(bodyParser.json());
    if (process.env.NODE_ENV == 'production') {
      this.app.use(helmet());
    }
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors({ credentials: true, origin: allowedOrigins }));

    this.app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {

      if (process.env.NODE_ENV !== "production") {
        res.header("Access-Control-Allow-Origin", "*");
      }
      res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
  }

  private initializeRoutes() {
    const apiRoutes = new ApiRoutes();
    this.app.use('/api/', apiRoutes.router);
  }

  public listen() {
    const server = this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
