const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db/index');

class Raiting extends Model {}

Raiting.init(
  {

    value: {
      type: DataTypes.ENUM('1','2','3','4','5'),
    }

  },
  {
    sequelize: db,
    modelName: 'raiting',
    timestamp: false
  }
)


module.exports = Raiting;