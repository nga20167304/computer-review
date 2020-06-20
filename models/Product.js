const Sequelize = require('sequelize');
const db = require('../database/db.js');
const AvailableProgram = require('./AvailableProgram');
const Battery = require('./Battery');
const Board = require('./Board');
const Brand = require('./Brand');
const Cpu = require('./Cpu');
const Graphic = require('./Graphic');
const HardDisk = require('./HardDisk');
const Ram = require('./Ram');
const Screen = require('./Screen');
const SellWeb = require('./SellWeb');
const SizeWeight = require('./SizeWeight');

const Product = db.sequelize.define(
  'Product',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.BIGINT
    },
    rating: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.TEXT
    },
    image: {
      type: Sequelize.STRING
    },
    webId: {
      type: Sequelize.INTEGER
    },
    brandId: {
      type: Sequelize.INTEGER
    },
    cpuId: {
      type: Sequelize.INTEGER
    },
    boardId: {
      type: Sequelize.INTEGER
    },
    ramId: {
      type: Sequelize.INTEGER
    },
    harddiskId: {
      type: Sequelize.INTEGER
    },
    graphicsId: {
      type: Sequelize.INTEGER
    },
    screenId: {
      type: Sequelize.INTEGER
    },
    programId: {
      type: Sequelize.INTEGER
    },
    batteryId: {
      type: Sequelize.INTEGER
    },
    sizeAndWeightId: {
      type: Sequelize.INTEGER
    },
    securityId: {
      type: Sequelize.INTEGER
    }
  }
  ,
  {
    timestamps: true,
    underscored: true,
    tableName: 'product'
  }
)

Product.belongsTo(AvailableProgram, {foreignKey: 'programId', as: 'availableProgram'});
Product.belongsTo(Battery, {foreignKey: 'batteryId', as: 'battery'});
Product.belongsTo(Board, {foreignKey: 'boardId', as: 'board'});
Product.belongsTo(Brand, {foreignKey: 'brandId', as: 'brand'});
Product.belongsTo(Cpu, {foreignKey: 'cpuId', as: 'cpu'});
Product.belongsTo(Graphic, {foreignKey: 'graphicsId', as: 'graphic'});
Product.belongsTo(HardDisk, {foreignKey: 'harddiskId', as: 'harddisk'});
Product.belongsTo(Ram, {foreignKey: 'ramId', as: 'ram'});
Product.belongsTo(Screen, {foreignKey: 'screenId', as: 'screen'});
Product.belongsTo(SellWeb, {foreignKey: 'webId', as: 'web'});
Product.belongsTo(SizeWeight, {foreignKey: 'sizeAndWeightId', as: 'sizeAndWeight'});


module.exports = Product;