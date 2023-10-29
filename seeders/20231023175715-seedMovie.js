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
    await queryInterface.bulkInsert('movies', [
    {
      title: 'Train To Busan',
      description: "The film mostly takes place on a high-speed train from Seoul to Busan as a zombie apocalypse suddenly breaks out in the country and threatens the safety of the passengers.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Culpamia',
      description: "tells the story of 17-year-old Noah, whose life is uprooted after her mother moves the family into her new husband's mansion",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Avatar',
      description: "the conflict by an indigenous people, the Na'vi of Pandora, against the oppression of alien humans.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'KKN di desa Penari',
      description: "tells of various mystical incidents experienced by six students while undergoing KKN in a remote village.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'The Nun II',
      description: "Sister Irene (Taissa Farmiga) is now at a convent in France, trying to forget the incidents of the previous movie. But the demon nun known as the Valak is back again, moving across Europe and now seemingly taking up residence in a nearby boarding school.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('movies', null, {});
  }
};
