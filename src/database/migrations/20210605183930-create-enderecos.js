'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("endereco", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
     },
      
      estado: {
        type: Sequelize.STRING,
        allowNull: false,       
      },

      cidade: {
        type: Sequelize.STRING,
        allowNull: false,               
      },

      bairro: {
        type: Sequelize.STRING,
        allowNull: false,               
      },

      cep: {
        type: Sequelize.STRING,
        allowNull: false,               
      },

      logradouro: {
        type: Sequelize.STRING,
        allowNull: false,               
      },
      
      numero: {
        type: Sequelize.STRING,
        allowNull: false,               
      },

      complemento: {
        type: Sequelize.STRING,
        allowNull: true,               
      },

      pais: {
        type: Sequelize.STRING,
        allowNull: false,               
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false, 
      },
    })  
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('endereco');
  }
};
