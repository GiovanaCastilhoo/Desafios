import { Sequelize, DataTypes, Model } from 'sequelize';

export class Imagem extends Model {
   id!: number;
   encoded!: string;

   static start(conn: Sequelize) {
      this.init({
        encoded: DataTypes.TEXT,      

      }, {          
         sequelize: conn,
         tableName: 'imagens',
      });

      return this;
   }
}
