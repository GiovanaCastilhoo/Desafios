import { Sequelize, DataTypes, Model } from 'sequelize';

export class ImagensSala extends Model {
   id!: number;
   sala_id!: number;
   imagem_id!: number;

   static start(conn: Sequelize) {
      this.init({}, {          
         sequelize: conn, 
         tableName: 'imagens-sala',
      });
 
      return this;
   }

   static associate({ Sala, Imagem }: any)  {
      this.belongsTo(Sala, { foreignKey: 'sala_id', as: 'sala' });
      this.belongsTo(Imagem, { foreignKey: 'imagem_id', as: 'image' });
   }
} 