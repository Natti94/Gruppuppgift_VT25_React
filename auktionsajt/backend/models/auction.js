import mongoose from "mongoose";

const AuctionSchema = new mongoose.Schema({
  title: String,
  description: String,
  startingPrice: Number,
  currentBid: { type: Number, default: 0 },
  bids: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      amount: Number,
      timestamp: { type: Date, default: Date.now },
    },
  ],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  startTime: { type: Date, default: Date.now },
  endTime: Date,
});

export default mongoose.model("Auction", AuctionSchema);
