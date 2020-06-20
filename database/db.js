var mysql = require('mysql');
const Sequelize = require('sequelize')
const db = {}

// const sequelize = new Sequelize('computer_review', 'root', '12345678', {

const sequelize = new Sequelize('computer_review', 'root', '', {


  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  // password : '12345678',
  password : '',
  database : 'computer_review'
});

db.sequelize = sequelize
db.Sequelize = Sequelize
db.connection = connection

module.exports = db