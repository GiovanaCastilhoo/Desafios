'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("imagens-sala", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      sala_id: {
        type: Sequelize.INTEGER,
        references: { model: 'salas', key: 'id' },
        allowNull: false,
      },

      imagem_id: {
        type: Sequelize.INTEGER,
        references: { model: 'imagens', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('imagens-sala');
  }
};

 
