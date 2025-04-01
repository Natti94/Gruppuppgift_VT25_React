import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://natnaelberhanesv:${process.env.DB_PASSWORD}@auktionsajt.v3zi8.mongodb.net/auktionsDB?retryWrites=true&w=majority&appName=Auktionsajt`
    );
    console.log("✅ Ansluten till MongoDB Atlas");
  } catch (err) {
    console.error("❌ MongoDB-anslutning misslyckades:", err.message);
    process.exit(1);
  }
};

export default connectDB;