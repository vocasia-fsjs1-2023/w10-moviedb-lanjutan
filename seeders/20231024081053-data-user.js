"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashPassword = await bcrypt.hash("vocasia123", 10);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Bimo Cahyo Kusumo",
          email: "bimochayo@gmail.com",
          password: hashPassword,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
