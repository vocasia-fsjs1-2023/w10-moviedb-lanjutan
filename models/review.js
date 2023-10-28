'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Movie, {
        foreignKey: 'movieId',
        onDelete: 'CASCADE',
      });
      Review.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE", });
    }
  }
  Review.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg: "input tidak boleh null"
        },
        notEmpty: {
          ms: "input tidak boleh string kosong"
        },
        len: {
          args: [1, 255],
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "input tidak boleh null"
        },
        notEmpty: {
          msg: "input tidak boleh string kosong"
        }
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        len: [0, 5],
      }
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};