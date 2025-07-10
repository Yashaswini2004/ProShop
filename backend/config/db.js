// config/db.js
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config(); 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connected');
  } catch (err) {
    console.log('MongoDB connection failed:', err.message);
    process.exit(1); 
  }
};

export default connectDB;
