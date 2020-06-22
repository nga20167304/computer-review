const Sequelize = require('sequelize')
const db = require('../database/db.js')
// const Comment = require('./Comment');

let User = db.sequelize.define(
    'User',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        }
    }
    ,
    {
        timestamps: false,
        underscored: true,
        tableName: 'users'
    }

)

// User.hasMany(Comment, {as: 'comments'})

module.exports = User;

