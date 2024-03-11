const { Router } = require('express');
const { postAllProducts } = require('../controllers');
const { patchProductById } = require('../controllers');

const router = Router();

//POST /product
router.post('/', (req, res) => {
  const data = postAllProducts();

  res.json(data);
});

//PATCH /product/:id
router.patch('/:id', (req, res) => {
  const data = patchProductById();

  res.json(data);
});

module.exports = router;
