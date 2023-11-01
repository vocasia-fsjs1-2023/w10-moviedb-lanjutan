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
    await queryInterface.bulkInsert('Movies', 
    [
      {
        title: "doona",
        description: "kehidupan seorang selebrity wanita yang memiliki hubungan romansa dengan seorang mahasiswa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "disney",
        description: "elemen air dan api yang saling jatuh cinta tanpa restu",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "the words of evil",
        description: "seorang polisi yang menyamar ke dalam geng bandar narkoba",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "taxi driver",
        description: "agen rahasia yang menyamar jadi supir taxi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "squid game",
        description: "permainan bertahan hidup demi uang",
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
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
