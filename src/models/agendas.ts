import { Sequelize, DataTypes, Model } from 'sequelize';

export class Agenda extends Model {
   id!: number;
   data!: string;
   periodo!: string;
   estado!: string;
   sala_id!: number;
   usuario_id!: number;


   static start(conn: Sequelize) {
      this.init({
        data: DataTypes.STRING,
        periodo: DataTypes.STRING,
        estado: DataTypes.STRING,
      }, {          
         sequelize: conn,
         tableName: 'agenda',
      });

      return this;
   }

   static associate({ Sala , User  }: any)  {
    this.belongsTo(Sala, { foreignKey: 'sala_id', as: 'sala-agenda' }); 
    this.belongsTo(User, { foreignKey: 'usuario_id', as: 'usuario-agenda' }); 
   }
}