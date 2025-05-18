import React from 'react';
import "../App.css";
import { Facebook, Twitter, Instagram, MapPin, Info } from 'lucide-react';
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
        </div>

        <div className="address">
          <p>
            <MapPin className="footer-icon" /> 1234 Handmade Street, Earthy Town
          </p>
          <p>Phone: +3(800)123-4567</p>
        </div>

        <div className="company-info">
          <p>
            <Info className="footer-icon" /> © 2025 Krugla Shafa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;