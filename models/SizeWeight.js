const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'SizeWeight',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    size: {
      type: Sequelize.STRING
    },
    weight: {
      type: Sequelize.STRING
    },
    material: {
      type: Sequelize.STRING
    }
  }
  ,
  {
    timestamps: false,
    underscored: true,
    tableName: 'size_weight'
  }
)