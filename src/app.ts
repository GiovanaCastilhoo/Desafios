import express, { json, Express } from 'express';

import './database';
import routes from './routes';

class App {
  express: Express;

  constructor() {
    this.express = express();  

    this.middlewares();
    this.routes();    
  } 
  
  private middlewares() {
    this.express.use(json({ limit: '15mb' }));
  }

  private routes() {
    this.express.use(routes);
  }
}

export default new App().express