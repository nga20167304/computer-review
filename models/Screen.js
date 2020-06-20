const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'Screen',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    size: {
      type: Sequelize.STRING
    },
    resolution: {
      type: Sequelize.STRING
    },
    technology: {
      type: Sequelize.STRING
    },
    sensor: {
      type: Sequelize.STRING
    }
  }
  ,
  {
    timestamps: false,
    underscored: true,
    tableName: 'screen'
  }
)