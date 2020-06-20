const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'SellWeb',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    },
    link: {
      type: Sequelize.STRING
    }
  }
  ,
  {
    timestamps: false,
    underscored: true,
    tableName: 'sell_web'
  }
)