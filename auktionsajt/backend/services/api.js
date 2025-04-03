const API_URL = "http://localhost:5000";

export const getAuctions = async () => {
  try {
    const response = await fetch(`${API_URL}/auctions`);
    if (!response.ok) throw new Error("Misslyckades att hämta auktioner");
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createAuction = async (auction) => {
  try {
    const response = await fetch(`${API_URL}/auctions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(auction),
    });
    if (!response.ok) throw new Error("Misslyckades att skapa auktion");
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const placeBid = async (auctionId, amount) => {
  try {
    const response = await fetch(`${API_URL}/auctions/${auctionId}/bid`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    if (!response.ok) throw new Error("Misslyckades att lägga bud");
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};