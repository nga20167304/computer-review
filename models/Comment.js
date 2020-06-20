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
// Comment.belongsTo(require('./Product'), {foreignKey: 'productId'});
// Comment.associate = function(models) {
//     Comment.belongsTo(models.Company, {foreignKey: 'companyId', as: 'company'})
// };
module.exports = Comment;