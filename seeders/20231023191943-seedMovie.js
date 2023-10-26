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
    return queryInterface.bulkInsert('Movies', [
      {
        title: 'The Shawshank Redemption',
        description: 'Selama beberapa tahun, dua narapidana menjalin persahabatan, mencari penghiburan dan, pada akhirnya, penebusan melalui rasa kasih sayang yang mendasar.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Godfather',
        description: 'Don Vito Corleone, kepala keluarga mafia, memutuskan untuk menyerahkan kerajaannya kepada putra bungsunya Michael. Namun, keputusannya secara tidak sengaja membahayakan nyawa orang yang dicintainya.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Dark Knight',
        description: 'Ketika ancaman yang dikenal sebagai Joker mendatangkan malapetaka dan kekacauan pada masyarakat Gotham, Batman harus menerima salah satu ujian psikologis dan fisik terbesar atas kemampuannya melawan ketidakadilan.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Godfather Part II',
        description: 'Kehidupan awal dan karier Vito Corleone di Kota New York tahun 1920-an digambarkan, sementara putranya, Michael, memperluas dan mempererat cengkeramannya pada sindikat kejahatan keluarga.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Doe12 Angry Men',
        description: 'Juri dalam persidangan pembunuhan di New York City dibuat frustrasi oleh satu anggota yang sikap skeptisnya memaksa mereka untuk mempertimbangkan bukti dengan lebih hati-hati sebelum mengambil keputusan secara terburu-buru.',
        createdAt: new Date(),
        updatedAt: new Date()
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
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
