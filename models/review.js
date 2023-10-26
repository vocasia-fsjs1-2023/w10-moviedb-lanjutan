'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Movie);
      Review.belongsTo(models.User);
    }
  }
  Review.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 255],
      },
    },
    description: DataTypes.TEXT,
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        len: [0, 5],
      },
    },
    movieId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};