const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:plataforma5pass@localhost:5432/ecommerce-zappas')


module.exports = sequelize;