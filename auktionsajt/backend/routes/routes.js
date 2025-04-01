import { Router } from "express";
import Auction from "../models/auction.js"; // Korrigerad sökväg

const router = Router();

// Hämta alla auktioner
router.get("/", async (req, res) => {
  const auctions = await Auction.find(); // Korrigerat till Auction.find()
  res.json(auctions);
});

// Skapa en ny auktion
router.post("/", async (req, res) => {
  const { title, description, startingPrice, endTime } = req.body;

  try {
    const auction = new Auction({ title, description, startingPrice, endTime });
    await auction.save();
    res.status(201).json(auction);
  } catch (err) {
    res.status(400).json({ error: "Misslyckades att skapa auktion" });
  }
});

// Lägg ett bud på en auktion
router.post("/:id/bid", async (req, res) => {
  const { amount } = req.body;
  const auction = await Auction.findById(req.params.id); // Korrigerat till Auction.findById()

  if (!auction) return res.status(404).json({ error: "Auktion hittades ej" });

  if (new Date() > auction.endTime) {
    return res.status(400).json({ error: "Auktionen har avslutats" });
  }

  if (amount <= auction.currentBid) {
    return res.status(400).json({ error: "Budet måste vara högre än nuvarande bud" });
  }

  auction.currentBid = amount;
  auction.bids.push({ amount, timestamp: new Date() });
  await auction.save();

  res.json(auction);
});

export default router;