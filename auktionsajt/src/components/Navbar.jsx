import { Link } from "react-router-dom";

function NavBar() {
  console.log("NavBar renderas!");

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2x1 font-bold">Min hemsida</h1>
<ul className="flex sapce-x-6">
  <li>
    <Link to="/" className="text-white hover:underline">Hem</Link>
    </li>
    <li>
            <Link to="/auctions" className="text-white hover:underline">Auctions</Link>
          </li>
          <li>
            <Link to="/my-bids" className="text-white hover:underline">Mina bud </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:underline">Logga in </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

