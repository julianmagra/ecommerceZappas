const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: "products",
  }
);


module.exports = Product;