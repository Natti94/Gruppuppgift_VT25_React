import express from "express";
import connectDB from "./config/database.js";
import auctions from "./routes/routes.js";

const app = express();
app.use(express.json());

connectDB(); // Koppla upp till MongoDB Atlas

app.use("/auctions", auctions);

app.listen(5000, () => console.log("Server körs på port 5000"));