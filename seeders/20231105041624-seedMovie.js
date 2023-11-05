'use strict';

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
      'Movies',
      [
        {
          title: "PETUALANGAN SHERINA 2",
          description: "Sebuah sekuel dari film legendaris, bernuansa musikal dengan sentuhan aksi petualangan.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "DI AMBANG KEMATIAN",
          description: "Pesugihan yang menuntut nyawa manusia.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "RETRIBUTION",
          description: "seorang bankir senior yang mendapat ancaman bom saat mengantar anak-anaknya ke sekolah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "EXPEND4BLES",
          description: "Misi kelompok The Expendables kali ini akan berusaha mencegah perang dunia ke-3.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Oppenheimer",
          description: "Menceritakan Julius Robert Openheimer seorang ilmuwan yang membuat bom ATOM",
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
    return queryInterface.bulkDelete("Movies", null, {});
  }
};
