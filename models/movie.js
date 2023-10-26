'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    static associate(models) {
      movie.hasMany(models.review);
    }
  }
  movie.init({
    title: {
      type: DataTypes.STRING,
      validate:{
        len:[1,255],
        notEmpty: {
          msg: "Title tidak boleh kosong atau null dan harus memiliki panjang min 1 dan max 255 karakter."
        }
      }
    },
    description: {
      type:DataTypes.TEXT,
      validate:{
        notEmpty: {
          msg: "Title tidak boleh kosong atau null dan harus memiliki panjang min 1 dan max 255 karakter."
        }
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};