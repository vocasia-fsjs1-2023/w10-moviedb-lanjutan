'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Movies", [
      {
        title: 'Saw X',
        description: 'John yang sakit dan putus asa melakukan perjalanan ke Meksiko untuk menjalani prosedur medis yang berisiko dan eksperimental dengan harapan mendapatkan obat ajaib untuk kankernya, namun ternyata seluruh operasi tersebut adalah penipuan untuk menipu kelompok yang paling rentan.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Smile',
        description: 'Setelah menyaksikan kejadian aneh dan traumatis yang melibatkan seorang pasien, seorang psikiater semakin yakin bahwa dia sedang diancam oleh suatu entitas luar biasa.',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        title: 'Final Destination',
        description: 'Alex Browning adalah salah satu dari sekelompok siswa sekolah menengah yang sedang melakukan perjalanan ke Eropa. Dia tiba-tiba mendapat firasat pesawat mereka akan jatuh, dia berteriak untuk memperingatkan yang lain tetapi terlempar dari pesawat, dan pesawat itu jatuh setelah mereka turun.',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        title: 'Midsommar',
        description: 'Sepasang suami istri melakukan perjalanan ke Eropa Utara untuk mengunjungi festival pertengahan musim panas Swedia yang terkenal di kampung halaman mereka. Apa yang awalnya merupakan kemunduran yang indah dengan cepat berubah menjadi persaingan yang semakin keras dan aneh di tangan sekte pagan.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Hereditary',
        description: 'Keluarga yang berduka dihantui oleh kejadian tragis dan meresahkan.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Movies", null, {});
  }
};
