'use strict';

const { hashSync } = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Id = 1
    await queryInterface.bulkInsert('imagens', [{
      encoded: 'maopsdmaosdmasomdas',
      created_at: new Date(),
      updated_at: new Date()
    }]);

    await queryInterface.bulkInsert('users', [{
      name: 'Clina',
      email: 'clina@hotmail.com',
      password_hash: hashSync('clinacare', 8),
      imagem_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('imagens', null, {});
  }
};
