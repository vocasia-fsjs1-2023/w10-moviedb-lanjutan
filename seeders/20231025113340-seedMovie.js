'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
  */
    await queryInterface.bulkInsert(
      'Movies', 
      [
        {
          title: 'King the Land',
          description: 'Drama Korea',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Do Bong Soon',
          description: 'Drama Korea',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: '2521',
          description: 'Drama Korea',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Sherina',
          description: 'Film Indonesia',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Danur',
          description: 'Film Indonesia',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], 
      {}
      );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Movies', null, {});
  },
};

