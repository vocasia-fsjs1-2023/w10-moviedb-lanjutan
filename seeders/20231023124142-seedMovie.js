"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
      "Movies",
      [
        {
          title: "Movie judul pertama",
          description: "Description dari movie pertama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Movie judul kedua",
          description: "Description dari movie kedua",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Movie judul ketiga",
          description: "Description dari movie ketiga",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Movie judul keempat",
          description: "Description dari movie keempat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Movie judul kelima",
          description: "Description dari movie kelima",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
