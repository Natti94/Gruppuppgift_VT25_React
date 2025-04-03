import { useState } from "react";
import { placeBid } from "../../../backend/services/api";
import "../AuctionList/AuctionList.css"

export default function BidForm({ auctionId }) {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleBid = async () => {
    if (!amount || amount <= 0) {
      setMessage("Ange ett giltigt bud.");
      return;
    }

    try {
      const updatedAuction = await placeBid(auctionId, parseInt(amount));
      setMessage(`Bud på ${updatedAuction.currentBid} kr accepterat!`);
      setAmount("");
    } catch (error) {
      setMessage("Misslyckades att lägga bud.");
    }
  };

  return (
    <div className="bid-form">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Lägg ett bud"
        className="bid-input"
      />
      <button onClick={handleBid} className="bid-button">Lägg bud</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}
