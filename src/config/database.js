require('dotenv/config');

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  dialect: process.env.DB_DIALECT,
  operatorsAliases: 0,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};


