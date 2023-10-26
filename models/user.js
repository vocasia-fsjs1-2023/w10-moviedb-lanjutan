'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany(models.review);
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true, 
      }
    },
    password: {
      type: DataTypes.TEXT,
      validate: {
        len: [8, 20], 
        notEmpty: {
          msg: "password tidak boleh kosong atau null dan harus memiliki panjang min 8 dan max 20 karakter."
        }
      },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};