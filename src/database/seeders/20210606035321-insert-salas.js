'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('imagens', [{
      encoded: 'maopsdmaosdmasomdas',
      created_at: new Date(),
      updated_at: new Date()
    }]);

    await queryInterface.bulkInsert('endereco', [{
      logradouro: 'Rua Vilane',
      numero: '20',
      pais: 'Brasil',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '1110175',
      bairro: '',
      created_at: new Date(),
      updated_at: new Date()
    }]);

  await queryInterface.bulkInsert('salas', [{
    nome: 'Sala de reunião',
    numero: '01',
    descricao: 'Sala de reunião e negociações',
    endereco_id: 1,
    created_at: new Date(),
    updated_at: new Date()
  }]);

  await queryInterface.bulkInsert('imagens-sala', [{
    imagem_id: 2,
    sala_id: 1,
    created_at: new Date(),
    updated_at: new Date()
  }]);
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('imagens-sala', null, {});
    await queryInterface.bulkDelete('salas', null, {});
  }
 };

