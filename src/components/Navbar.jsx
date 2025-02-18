import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Globe, Heart } from "lucide-react";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

function Navbar() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Brand Logo" className="logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/catalogue">Catalogue</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="navbar-icons">

        <button className="language-button" onClick={toggleLanguage}>
          <Globe size={24} />
          <span className="language-text">{language}</span>
        </button>

        <Link to="/purchased" className="cart-button">
          <ShoppingCart size={30} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
