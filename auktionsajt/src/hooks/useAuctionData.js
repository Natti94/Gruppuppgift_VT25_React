import { useState, useEffect } from "react";
import { getAuctions } from "../../backend/services/api";

export default function useAuctionData() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    getAuctions().then(setAuctions);
  }, []);

  return auctions;
}