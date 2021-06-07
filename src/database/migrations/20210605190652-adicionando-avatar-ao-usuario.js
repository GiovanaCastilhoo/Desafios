'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'imagem_id', {
      type: Sequelize.INTEGER,
      references: { model: 'imagens', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
  });
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'imagem_id');
  }
};
