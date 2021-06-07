import { Sequelize, DataTypes, Model } from 'sequelize';

export class Sala extends Model {
   id!: number;
   nome!: string;
   numero!: number;
   descricao!: string;

   endereco_id!: number;

   static start(conn: Sequelize) {
      this.init({
         nome: DataTypes.STRING,
         numero: DataTypes.NUMBER,
         descricao: DataTypes.STRING,
      }, {
         sequelize: conn,
         tableName: 'salas',
      });

      return this;
   }

   static associate({ ImagensSala, Endereco }: any)  {
      this.hasMany(ImagensSala, { foreignKey: 'imagem', as: 'imagens-sala' }); 
      this.belongsTo(Endereco, { foreignKey: 'endereco_id', as: 'endereco' }); 
   }
}