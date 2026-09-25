import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <Heart size={24} fill="currentColor" />
        <span>
          Surplus<span>2</span>Shelter
        </span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/ngo">NGO</Link>
        <Link to="/donor">Donor</Link>
        <Link to="/volunteer">Volunteer</Link>
        <Link to="/impact">Impact</Link>
      </div>

    </nav>
  );
}

export default Navbar;