import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import auctionRoutes from "./routes/routes.js";
import authRoutes from "./routes/auth.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auctions", auctionRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server körs på port 5000"));

// frontend/src/services/api.js
const API_URL = "http://localhost:5000/api";

export const register = async (userData) => {
    return fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    }).then((res) => res.json());
};

export const login = async (userData) => {
    return fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    }).then((res) => res.json());
};