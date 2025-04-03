import express from "express";
import Auction from "../models/auction.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    const auction = new Auction(req.body);
    await auction.save();
    res.status(201).json(auction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const auctions = await Auction.find();
    res.json(auctions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
