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
    await queryInterface.bulkInsert('movies', 
    [
      {
        title: 'The Nun II',
        description: "Seorang pendeta dibunuh. Kejahatan sedang menyebar. Sekuel dari hit besar di seluruh dunia mengikuti Sister Irene saat dia sekali lagi berhadapan langsung dengan Valak, biarawati iblis.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Saw X',
        description: "John yang sakit dan putus asa melakukan perjalanan ke Meksiko untuk prosedur medis yang berisiko dan eksperimental dengan harapan penyembuhan ajaib untuk kankernya hanya untuk menemukan seluruh operasi adalah penipuan untuk menipu yang paling rentan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Devil On Trial',
        description: "Menggunakan peragaan dan video rumahan, film dokumenter gelap ini menyelidiki kepemilikan seorang anak laki-laki dan pembunuhan brutal yang mengikutinya.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Herd',
        description: "Ketika seorang wanita yang mencoba berlari lebih cepat dari masa lalunya akhirnya terjebak di antara wabah zombie dan kelompok-kelompok milisi yang bertikai, dia harus berjuang untuk menemukan jalan pulang.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Feed',
        description: "Sekelompok pakar media sosial disewa untuk membantu bisnis keluarga lama berkembang. Tapi mereka segera menemukan diri mereka terjebak di sebuah pulau kecil di sebuah danau di mana seorang penyihir Swedia kuno dikatakan hidup.",
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
