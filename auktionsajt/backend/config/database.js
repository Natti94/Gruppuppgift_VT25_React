import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Ansluten till MongoDB");
  } catch (err) {
    console.error("❌ MongoDB-anslutning misslyckades:", err.message);
    process.exit(1);
  }
};

export default connectDB;
