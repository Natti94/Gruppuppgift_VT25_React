import Auction from "../models/auction";

export async function createAuction(req, res) {
  try {
    const auction = new Auction(req.body);
    await auction.save();
    res.status(201).json(auction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}