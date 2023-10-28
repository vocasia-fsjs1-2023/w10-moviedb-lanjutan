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
          title: "The Batman",
          description: "Pembalasan Dendam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Loki",
          description: "Dewa Ilusi yang melewati garis waktu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Intersteller",
          description: "Seorang ayah yang terjebak di galaksi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Jhon Wick",
          description: "Seorang pembunuh bayaran yang sedang pensiun",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Oppenheimer",
          description: "Menceritakan seorang ilmuwan yang membuat bom ATOM",
          createdAt: new Date(),
          updatedAt: new Date(),
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
  }
};
