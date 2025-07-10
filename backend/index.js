// server.js
import express from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from "./routes/productRoute.js";
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
app.use('/api/products',productRoutes);



// Server start
app.listen(port, () => console.log(`Server running on port ${port}`));
