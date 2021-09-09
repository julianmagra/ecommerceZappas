const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Order extends Model {}

Order.init(
  {
    state: {
      type: DataTypes.ENUM('open','preparation','send','delivered'),
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: "orders",
  }
);


module.exports = Order;