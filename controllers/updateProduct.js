// function updateProduct() {
//   return 'product updated';
// }

const Product = require('../models/productModel.js');

async function updateProduct() {
  const response = await Product.find();

  console.log(response);

  return response;
}

module.exports = updateProduct;
