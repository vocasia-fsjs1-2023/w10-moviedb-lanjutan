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
          title: "The Fall of the House of Usher",
          description:
            "To secure their fortune (and future) two ruthless siblings build a family dynasty that begins to crumble when their heirs mysteriously die, one by one.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Petualangan Sherina 2",
          description:
            "Sadam, a true adventurer, reunites with his brave childhood friend, Sherina, when she embarks on a journalistic adventure.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Di Ambang Kematian",
          description:
            "Nadia, the sole survivor of her family's tragic fate, grapples with the looming threat of her father's sacrifice as she faces a life on the edge.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pamali: Dusun Pocong",
          description:
            "A gravedigger and students breaking a taboo by whistling at night face a horde of pocong apparitions.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Saw X",
          description:
            "A sick and desperate John travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer only to discover the entire operation is a scam to defraud the most vulnerable.",
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
