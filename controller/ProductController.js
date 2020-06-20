var Product = require('../models/Product.js');

exports.list_all_products = function(req, res) {
    Product.findAll({include: [{all: true}]}).then(
        (products) => {
            res.send(products);
        }
    )
};

exports.create_a_product = function(req, res) {
    console.log("req.body")
    console.log(req.body)
    Product.create(req.body,{include: [{all: true}]}).then(
        (products) => {
            console.log('backend', products);
            res.send(products);
        }
    )
};

exports.read_a_product = function(req, res) {
    Product.findByPk(req.params.productId, {include: [{all: true}]}).then(
        (product) => {
            res.send(product);
        }
    );
};
