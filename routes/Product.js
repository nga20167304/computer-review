'use strict';

var multer  = require('multer')
var upload = multer({ dest: './public/productImg/' })

module.exports = function(app) {
    var ProductController = require('../controller/ProductController');
 
    app.route('/products')
        .get(ProductController.list_all_products)
        .post(upload.single('image'),ProductController.create_a_product);
    
    app.route('/products/:productId')
        .get(ProductController.read_a_product)
        .delete(ProductController.delete_a_product)
        .put(upload.single('image'),ProductController.update_a_product);
        
    app.route('/products/:productId/comment')
        .post(ProductController.add_comment);

    app.route('/products/:productId/comment/:commentId')    
        .put(ProductController.update_comment)
        .delete(ProductController.delete_comment);
 };