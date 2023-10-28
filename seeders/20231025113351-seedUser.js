'use strict';
const bcrypt = require("bcrypt")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const hashPass = await bcrypt.hash('rahasiabanget', 10);
    await queryInterface.bulkInsert(
      'Users', 
      [
        {
          name: 'evaadmin',
          email: 'evaadmin@gmail.com',
          password: hashPass,
          isAdmin: true,
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
    return queryInterface.bulkDelete('Users', null, {});
  },
};

