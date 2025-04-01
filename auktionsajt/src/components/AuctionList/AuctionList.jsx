import useAuctionData from "../../hooks/useAuctionData";
import AuctionCard from "../AuctionCard/AuctionCard";
import "./AuctionList.css";

export default function AuctionList() {
  const { auctions, loading, error } = useAuctionData();

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>Fel: {error}</p>;

  // Lägg till en kontroll för att säkerställa att auctions är definierat
  if (!auctions) return <p>Data saknas...</p>;

  return (
    <div className="auction-container">
      <h2>Auktioner</h2>
      {auctions.length === 0 ? (
        <p>Inga auktioner tillgängliga.</p>
      ) : (
        auctions.map((auction) => (
          <AuctionCard key={auction._id} auction={auction} />
        ))
      )}
    </div>
  );
}
