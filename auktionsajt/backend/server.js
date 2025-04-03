import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";
import auctionRoutes from "./routes/auction.js";
import authRoutes from "./routes/auth.js";


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auctions", auctionRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server körs på port ${PORT}`));
