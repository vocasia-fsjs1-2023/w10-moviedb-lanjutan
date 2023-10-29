'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Review = sequelize.define('Review', {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 255],
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      },
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Review.associate = (models) => {
    Review.belongsTo(models.Movie, { foreignKey: 'movieId', as: 'movie' });
    Review.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return Review;
};
