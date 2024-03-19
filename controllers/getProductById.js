// function getProductById() {
//   return 'get product by id';
// }

const Product = require('../models/productModel.js');

async function getProductById() {
  const response = await Product.find();

  console.log(response);

  return response;
}
module.exports = getProductById;
