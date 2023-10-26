'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('movies', 
    [
      {
        title: "Ice Cold",
        description:"Pembunuhan Jessica Mirna",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        title: "Ice Cold 2",
        description:"Pembunuhan Jessica Mirna",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        title: "Ice Cold 3",
        description:"Pembunuhan Jessica Mirna",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        title: "Ice Cold 4",
        description:"Pembunuhan Jessica Mirna",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        title: "Ice Cold 5",
        description:"Pembunuhan Jessica Mirna",
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('movies', null, {});
  }
};
