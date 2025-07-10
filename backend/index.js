// server.js
import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// ✅ Load environment variables first
dotenv.config();

// ✅ Now you can connect to MongoDB
connectDB();

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// Server start
app.listen(port, () => console.log(`Server running on port ${port}`));
