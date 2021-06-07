import { Sequelize, DataTypes, Model } from 'sequelize';

export class Endereco extends Model {
   id!: number;
   logradouro!: string;
   estado!: string;
   cidade!: string;
   bairro!: string;
   cep!: number;
   complemento!: string;
   pais!: string;

   static start(conn: Sequelize) {
      this.init({
        logradouro: DataTypes.STRING,
        estado: DataTypes.STRING,
        cidade: DataTypes.STRING,
        bairro: DataTypes.STRING,
        cep: DataTypes.STRING,
        complemento: DataTypes.STRING,
        pais: DataTypes.STRING,

      }, {          
         sequelize: conn,
         tableName: 'endereco',
      });

      return this;
   }
}