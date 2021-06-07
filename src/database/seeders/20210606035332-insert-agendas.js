'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('agenda', [{
      data: '2021-07-05',
      periodo: 'Manhã',
      estado: 'Disponível',
      sala_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      data: '2021-07-05',
      periodo: 'Tarde',
      estado: 'Disponível',
      sala_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {

      data: '2021-07-05',
      periodo: 'noite',
      estado: 'Disponível',
      sala_id: 1,
      created_at: new Date(),
      updated_at: new Date()

    }
  ]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('agendas', null, {});
  }
 };
