const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'Battery',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    species: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    }
  }
  ,
  {
    timestamps: false,
    underscored: true,
    tableName: 'battery'
  }
)