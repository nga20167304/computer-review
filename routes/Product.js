'use strict';
module.exports = function(app) {
    var ProductController = require('../controller/ProductController');
 
    app.route('/products')
        .get(ProductController.list_all_products)
        .post(ProductController.create_a_product);
 
 };