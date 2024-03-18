const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());

//routes
const productGetterRoutes = require('./routes/productGetterRoutes');
const productSetterRoutes = require('./routes/productSetterRoutes');

app.use('/product', productGetterRoutes);
app.use('/product', productSetterRoutes);

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
