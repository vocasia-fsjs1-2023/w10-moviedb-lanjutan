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
     * 
     * 
    */
     await queryInterface.bulkInsert('movies',
      [
        {
          title: 'INDIANA JONES AND THE DIAL OF DESTINY',
          description: "Arkeolog Indiana Jones berpacu dengan waktu untuk mengambil artefak legendaris yang dapat mengubah jalannya sejarah.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'MISSION MAJNU',
          description: " Pada 1970-an, seorang mata-mata India yang menyamar melakukan misi mematikan untuk mengekspos program senjata nuklir rahasia di jantung Pakistan.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'ONLY CLOUD KNOWS',
          description: " Film ini berkisah tentang seorang pria Cina yang kembali ke Selandia Baru setelah kematian istrinya dan mulai menemukan bahwa dia menyimpan sejumlah rahasia.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'BLUE BEETLE',
          description: "Seorang scarab alien memilih Jaime Reyes untuk menjadi tuan rumah simbiosisnya, menganugerahi lulusan perguruan tinggi baru-baru ini dengan baju zirah yang mampu memiliki kekuatan luar biasa, selamanya mengubah takdirnya saat ia menjadi pahlawan super yang dikenal sebagai Blue Beetle.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'COCAINE COUGAR',
          description: "Seekor Black Cougar yang kecanduan kokain lolos dari fasilitas pengujian hewan dan menghancurkan Los Angeles.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     * 
     */
    await queryInterface.bulkDelete('movies', null, {});
  }
};
