'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("agenda", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
     },
      
      data: {
        type: Sequelize.STRING,
        allowNull: false,       
      },

      periodo: {
        type: Sequelize.STRING,
        allowNull: false,               
      },

      estado: {
        type: Sequelize.STRING,
        allowNull: false,               
      },

      sala_id: {
        type: Sequelize.INTEGER,
        references: { model: 'salas', key: 'id' },
        allowNull: false,
      },

      usuario_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        allowNull: true,
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
    return queryInterface.dropTable('agenda');
  }
};
