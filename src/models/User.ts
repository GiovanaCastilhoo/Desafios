import { Sequelize, DataTypes, Model } from 'sequelize';
import { compareSync, hashSync } from 'bcryptjs';

export class User extends Model {
   id!: number;
   name!: string;
   email!: string;
   password_hash!: string;
   imagem_id!: number;

   static start(conn: Sequelize) {
      this.init({
         name: DataTypes.STRING,
         email: DataTypes.STRING,
         password_hash: DataTypes.STRING,
      }, {
         sequelize: conn,
         tableName: 'users',
      });

      return this;
   }

   static associate({ Imagem }: any)  {
      this.belongsTo(Imagem, { foreignKey: 'imagem_id', as: 'avatar' });
   }
  
   public comparePassword(comparePassword: string): boolean {
      return compareSync(comparePassword, (this.toJSON() as any).password_hash);
   }
}