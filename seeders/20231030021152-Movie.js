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
    return queryInterface.bulkInsert("Movies", [
      {
        title: "Iron Man",
        description:
          "Iron Man adalah film pahlawan super rilisan tahun 2008 yang berdasarkan pada tokoh Marvel Comics, Iron Man. Film yang diproduksi oleh Marvel Studios dan didistribusikan oleh Paramount Pictures ini merupakan film pertama dalam waralaba Marvel Cinematic Universe (MCU).",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Thor",
        description: " film pahlawan super Amerika 2011 berdasarkan karakter Marvel Comics dengan nama yang sama, diproduksi oleh Marvel Studios dan didistribusikan oleh Paramount Pictures",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Dark Knight",
        description: "Ketika ancaman yang dikenal sebagai Joker mendatangkan malapetaka dan kekacauan pada masyarakat Gotham, Batman harus menerima salah satu ujian psikologis dan fisik terbesar atas kemampuannya melawan ketidakadilan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Avengers: Age of Ultron",
        description:
          "film pahlawan super berdasarkan Marvel Comics tim superhero Avengers. Diproduksi oleh Marvel Studios dan didistribusikan oleh Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) dan film ke-11 dalam Marvel Cinematic Universe (MCU).",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Avengers: Endgame",
        description: "Pada film ini, anggota Avengers yang masih hidup dan para sekutunya berusaha untuk membalikkan kerusakan yang disebabkan oleh Thanos dalam Infinity War.",
        createdAt: new Date(),
        updatedAt: new Date(),
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
    return queryInterface.bulkDelete("Movies", null, {});
  },
};