const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../db");

class Review extends Model {}

Review.init(
  {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [3, 1000],
      },
    },
  },
  {
    sequelize: db,
    modelName: "reviews",
    timestamp: false
  }
);

module.exports = Review;
