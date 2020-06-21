const Sequelize = require('sequelize')
const db = require('../database/db.js')
const User = require('./User');
let Comment = db.sequelize.define(
    'Comment',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: Sequelize.INTEGER
        },
        productId: {
            type: Sequelize.INTEGER
        },
        content: {
            type: Sequelize.TEXT
        }
    }
    ,
    {
        timestamps: true,
        underscored: true,
        tableName: 'comment'
    }
);

Comment.belongsTo(User, {foreignKey: 'userId', as: 'user'});
module.exports = Comment;
