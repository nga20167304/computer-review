const db = require('../database/db.js')

var Product = function (product){
  console.log(product);
  this.name = product.name;
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

module.exports= Product;