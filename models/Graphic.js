const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'Graphic',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    chipset: {
      type: Sequelize.STRING
    },
    memory: {
      type: Sequelize.STRING
    },
    designStyle: {
      type: Sequelize.STRING
    }
  }
  ,
  {
    timestamps: false,
    underscored: true,
    tableName: 'graphics'
  }
)