const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//routes
const productGetterRoutes = require('./routes/productGetterRoutes');
const productSetterRoutes = require('./routes/productSetterRoutes');

app.use('/product', productGetterRoutes);
app.use('/product', productSetterRoutes);
app.get('/', (req, res) => res.send('Express on Vercel'));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);

    console.log('Database connected');
  } catch (error) {
    console.log('Error:', err.message);
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
