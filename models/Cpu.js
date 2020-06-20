const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'Cpu',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    brand: {
      type: Sequelize.STRING
    },
    technology: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    speed: {
      type: Sequelize.STRING
    },
    cache: {
      type: Sequelize.STRING
    },
    maxSpeed: {
      type: Sequelize.STRING
    }
  }
  ,
  {
    timestamps: false,
    underscored: true,
    tableName: 'cpu'
  }
)