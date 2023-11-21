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
    return queryInterface.bulkInsert('Movies', [
    {
      title: 'The Trial of the Chicago 7',
      description: 'Disutradarai oleh Aaron Sorkin dan didasarkan pada peristiwa sebenarnya yang terjadi pada tahun 1968 selama Konvensi Partai Demokrat di Chicago. Ini mengikuti perjuangan hukum tujuh aktivis yang dituduh memberontak.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Nomadland',
      description: 'Disutradarai oleh Chloe Zhao dan mengikuti kisah seorang wanita yang menjadi nomaden setelah krisis ekonomi. Film ini meraih banyak penghargaan dan dianggap sebagai salah satu film terbaik di tahun 2020.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Parasite',
      description: 'Disutradarai oleh Bong Joon-ho dan mengisahkan tentang ketidaksetaraan sosial melalui cerita keluarga yang menjebak mereka dalam situasi yang aneh.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Tenet',
      description: 'Film aksi ilmiah yang disutradarai oleh Christopher Nolan. Film ini memasukkan unsur perjalanan waktu dan mengikuti agen yang berusaha mencegah dunia dari kehancuran.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: '1917',
      description: 'Disutradarai oleh Sam Mendes dan mengikuti perjalanan epik dua tentara Inggris yang berusaha mengirimkan pesan kritis selama Perang Dunia I.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
