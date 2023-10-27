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
    const now = new Date();
    await queryInterface.bulkInsert("Movies", [
      {
        title: "Di Ambang Kematian",
        description: "Film Horor Indonesia",
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "The Exorcist: Believer",
        description: "Film Horor Amerika",
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "Alchemy Of Souls",
        description: "Drama Korea",
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "Hidden Love",
        description: "Drama China",
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "Moving",
        description: "Drama Korea",
        createdAt: now,
        updatedAt: now,
      },
    ]);
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
