'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    static associate(models) {
      review.belongsTo(models.movie, { foreignKey: 'movieId'});
      review.belongsTo(models.user, { foreignKey: 'userId'});
    }
  }
  review.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    rating: {
      type:DataTypes.INTEGER,
      validate:{
        len:[0,5],
      },
    },
    movieId: {
      type:DataTypes.INTEGER,
      references:{
        model: 'movies',
        key: 'id'
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references:{
        model: 'users',
        key: 'id'
      },
    }
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};