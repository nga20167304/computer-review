const db = require('../database/db.js')

var Product = function (product){
  console.log(product);
  this.id = product.id
  this.name = product.name;
  this.brand = product.brand;
  this.description = product.description;
  this.price = product.price;
  this.rating = product.rating;
};

Product.createProduct = function createProduct(newProduct, result){
  db.connection.query("INSERT INTO product set ?", newProduct, function(err, res){
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log(res);
      result(null, newProduct);
    }
  })
}

Product.getAllProduct = function getAllProduct(result) {
  db.connection.query("Select * from product", function (err, res) {

      if(err) {
          console.log("error: ", err);
          result(null, err);
      }
      else{
          console.log('tasks : ', res);

          result(null, res);
      }
  });
};

Product.getProductById = function getAProduct(productId, result) {
  db.connection.query("Select * from product where id = ? ", productId, function (err, res) {
      if(err) {
          console.log("error: ", err);
          result(err, null);
      }
      else{
          result(null, res);

      }
  });
};

module.exports= Product;