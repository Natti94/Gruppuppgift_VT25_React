export const getUserBids = async (userId) => {
    const response = await fetch(`/api/bids?userId=${userId}`);
    if (!response.ok) throw new Error("Misslyckades med att hämta bud");
    return response.json();
  };