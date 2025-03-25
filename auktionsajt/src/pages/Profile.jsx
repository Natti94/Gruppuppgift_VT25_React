import { useContext, useEffect, useState } from "react"; 
import { AppContext } from "../context/AppContext"; 
import { getUserBids } from "../services/api"; 


const Profile = () => {
    const { user, logout } = useContext(AppContext); 
    const [bids, setBids] = useState([]); 
  
    useEffect(() => {
      if (user) { 
        getUserBids(user.id) 
          .then((data) => setBids(data)) 
          .catch((error) => console.error("Fel vid hämtning av bud:", error)); 
      }
    }, [user]); 
  
    return (
      <div>
        <h2>Profil</h2>
        {user ? (
          <>
            <p><strong>Namn:</strong> {user.name}</p>
            <p><strong>E-post:</strong> {user.email}</p>
  
            <h3>Dina bud</h3>
            {bids.length > 0 ? (
              <ul>
                {bids.map((bid) => (
                  <li key={bid.id}>
                    {bid.auctionTitle} - {bid.amount} kr (Lagt: {bid.date})
                  </li>
                ))}
              </ul>
            ) : (
              <p>Du har inte lagt några bud ännu.</p>
            )}
  
            <button onClick={logout}>Logga ut</button>
          </>
        ) : (
          <p>Du är inte inloggad.</p>
        )}
      </div>
    );
  };
  
  export default Profile;
  