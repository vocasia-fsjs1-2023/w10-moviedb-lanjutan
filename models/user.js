'use strict';
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [8, 20],
      },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, saltRounds);
      },
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Review, { foreignKey: 'userId', as: 'reviews' });
  };

  return User;
};
