import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
  } catch (e) {
    console.error(`Error:${e.message}`);
    process.exit(1); // 1 code means failue, 0 means success
  }
};
