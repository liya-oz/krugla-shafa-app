import React from 'react';
import "../App.css";
import { Facebook, Twitter, Instagram, MapPin, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} />
          </a>
        </div>
        <div className="address">
          <p>
            <MapPin size={18} /> 1234 Handmade Street, Earthy Town  
          </p>
          <p>Phone: +3(800)123-4567</p>
        </div>
        <div className="company-info">
          <p>
            <Info size={18} /> &copy; 2025 Krugla Shafa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;