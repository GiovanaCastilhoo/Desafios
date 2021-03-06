'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("imagens", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      encoded: {
        type: Sequelize.TEXT,
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
    return queryInterface.dropTable('imagens');
  }
};