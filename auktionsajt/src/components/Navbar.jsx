import { Link } from "react";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="./AuctionList.jsx">Auctions</link>
        </li>
        <li>
          <link to="./BidForm.jsx">My Bids</link>
        </li>
        <li>
          <link to="./Navbar.jsx">Login</link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
