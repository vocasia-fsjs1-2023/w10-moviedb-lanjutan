// models/movies.js

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class movies extends Model {
    static associate(models) {
      // Definisikan asosiasi jika ada
    }
  }

  movies.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      // Tambahkan kolom lain sesuai kebutuhan
    },
    {
      sequelize,
      modelName: 'movies',
      hooks: {
        // Sequelize Hooks sebelum pembuatan entitas
        beforeCreate: (movies, options) => {
          // Contoh penggunaan hook sebelum pembuatan entitas (misalnya, mengubah nilai sebelum disimpan)
          movies.price = parseFloat(movies.price).toFixed(2); // Mengubah harga menjadi desimal 2 digit
        },
      },
    }
  );

  return movies;
};
