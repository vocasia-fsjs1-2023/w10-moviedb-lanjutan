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
      await queryInterface.bulkInsert('Movies', [
        {
          title: 'Danur 1',
          description: 'Ketika Risa ulang tahun yang ke-8 tahun, dia berharap mendapatkan teman.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Danur 2',
          description: 'seorang gadis yang memiliki 3 teman hantu dan kini tinggal bersama adiknya yang semakin malu dengan kemampuan gadis itu untuk melihat hantu.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Movie 3',
          description: 'Risa Saraswati merasa bahwa dia harus melepaskan pertemanannya dengan teman-teman hantunya, Peter, Janshen, William, Hans dan Hendrik',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Avatar 1',
          description: 'Jake Sully, seorang mantan marinir yang menjadi bagian dari misi manusia di planet Pandora yang dikenal sebagai salah satu planet terindah di jagat raya.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'BoboiBoy The Movie',
          description: 'Teman robot BoBoiBoy, Ochobot, telah diculik oleh sekelompok pemburu Sfera Kuasa makhluk asing bernama Tengkotak dengan tujuan menggunakan Ochobot untuk menemukan Klamkabot, sebuah Sfera Kuasa kuno dan berkuasa yang menyembunyikan diri di bumi.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
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
