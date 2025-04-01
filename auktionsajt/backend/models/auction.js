import { Schema, model } from "mongoose";

const AuctionSchema = new Schema({
  title: String,
  description: String,
  startingPrice: Number,
  currentBid: { type: Number, default: 0 },
  bids: [{ amount: Number, timestamp: Date }],
  startTime: { type: Date, default: Date.now },
  endTime: Date, // Slutdatum för auktionen
});

export default model("Auction", AuctionSchema);