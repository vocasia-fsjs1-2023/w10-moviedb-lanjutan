'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('coba12345', 10);
    return queryInterface.bulkInsert('users', [
      {
        name: "shibaa",
        email: "shibaa@gmail.com",
        password: hashedPassword, 
        isAdmin: true,
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
