const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'Ram',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    capacity: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    busSpeed: {
      type: Sequelize.STRING
    },
    slots: {
      type: Sequelize.INTEGER
    }
  }
  ,
  {
    timestamps: false,
    underscored: true,
    tableName: 'ram'
  }
)