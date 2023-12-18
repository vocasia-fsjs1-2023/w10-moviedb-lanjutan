'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt'); 

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define association here
    }
  }

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 35]
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
          len: [8,25],
        },
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeCreate: async (user, options) => {
          const saltRounds = 10;
          user.password = await bcrypt.hash(user.password, saltRounds); 
        },
      },
    }
  );

  return User;
};
