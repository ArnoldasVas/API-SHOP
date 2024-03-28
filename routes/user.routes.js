const { Router } = require('express');
const { registerUser, loginUser } = require('../controllers');

const router = Router();

//POST /user/
router.post('/', async (req, res) => {
  try {
    const data = await registerUser(req.body);
    res.json(data);
  } catch (error) {
    console.log(`Error: ${error.message}, status: ${error.status}`);
    res.status(400).json({ error: error.message });
  }
});

//POST /user/login
router.post('/login', async (req, res) => {
  try {
    const data = await loginUser(req.body);
    res.json(data);
  } catch (error) {
    console.log(`Error: ${error.message}, status: ${error.status}`);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
