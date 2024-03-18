const { Router } = require('express');
const { createProduct, updateProduct } = require('../controllers');

const router = Router();

//POST /product
router.post('/', async (req, res) => {
  try {
    const data = await createProduct(req.body);
    res.json(data);
  } catch (error) {
    console.log(`Error: ${error.message}, status: ${error.status}`);
    res.status(400).json({ error: error.message });
  }
});

//PATCH /product/:id
router.patch('/:id', (req, res) => {
  const data = updateProduct();

  res.json(data);
});

module.exports = router;
