import { Sequelize } from 'sequelize';
import config from '../config/database';

import models from '../models';

// Instanciar o DB
const conn = new Sequelize(config as any);

// Passar a instancia para os models
models.map(Model => Model.start(conn)).map((Model: any) => Model.associate && Model.associate(conn.models));