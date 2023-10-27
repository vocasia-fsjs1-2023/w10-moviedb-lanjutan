"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Movie, {
        foreignKey: "movieId",
      });
      Review.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Review.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0, // Nilai minimal adalah 0
          max: 5, // Nilai maksimal adalah 5
        },
      },
      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true, // Memastikan bahwa ini adalah angka integer
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true, // Memastikan bahwa ini adalah angka integer
        },
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
