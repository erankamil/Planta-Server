import { Request, Response, Router, NextFunction } from 'express';

export abstract class Controller {
    public router = Router();

    protected abstract initializeRoutes(): void;

    /**
     *
     */
    constructor() {
        this.initializeRoutes();
    }

}