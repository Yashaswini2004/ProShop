// clearUsers.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import User from './models/userModel.js';

dotenv.config();
connectDB();

const clearUsers = async () => {
  try {
    await User.deleteMany({});
    console.log(colors.green('✅ All users deleted.'));
    process.exit();
  } catch (error) {
    console.error(colors.red(`❌ Error: ${error.message}`));
    process.exit(1);
  }
};

clearUsers();
