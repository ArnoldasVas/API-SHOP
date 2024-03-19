const Product = require('../models/productModel.js');

//GET prduct
async function getAllProducts() {
  const response = await Product.find();

  console.log(response);

  return response;
}

module.exports = getAllProducts;
