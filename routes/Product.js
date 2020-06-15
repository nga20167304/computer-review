'use strict';
module.exports = function(app) {
    const ProductController = require('../controller/ProductController');

    app.route('/products')
        .get(ProductController.list_all_products)
        .post(ProductController.create_a_product);

    app.route('/products/:productId')
        .get(ProductController.read_a_product)

    app.route('/compare/:productId')
        .get(ProductController.read_a_product)

 };
