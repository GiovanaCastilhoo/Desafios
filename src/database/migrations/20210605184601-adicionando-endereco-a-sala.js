'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('salas', 'endereco_id', {
          type: Sequelize.INTEGER,
          references: { model: 'endereco', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false,
      });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('salas', 'endereco_id');
  },
};