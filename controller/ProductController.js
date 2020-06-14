var Product = require('../models/ProductModel.js');

exports.list_all_products = function(req, res) {
    Product.getAllProduct(function(err, product) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', product);
        res.send(product);
    });
};

exports.create_a_product = function(req, res) {
    var new_product = new Product(req.body);
    console.log("req.body")
    console.log(req)

    Product.createProduct(new_product, function(err, product) {
        if (err)
            res.send(err);
        else{
            res.send("Success!!");
        }
    });
};
