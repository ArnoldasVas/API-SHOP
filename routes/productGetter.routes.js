const { Router } = require('express');
const { getAllProducts, getProductById } = require('../controllers');

const router = Router();

//GET /product
router.get('/', async (req, res) => {
  try {
    const data = await getAllProducts(req.body);
    res.send(data);
  } catch (error) {
    console.log(`Error: ${error.message}, status: ${error.status}`);
    res.status(400).json({ error: error.message });
  }
});

//GET /product/:id
router.get('/:id', async (req, res) => {
  try {
    const data = await getProductById(req.body);
    res.send(data);
  } catch (error) {
    console.log(`Error: ${error.message}, status: ${error.status}`);
    res.status(400).json({ error: error.message });
  }

  res.json(data);
});

module.exports = router;
