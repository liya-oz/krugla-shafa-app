import React from 'react';
import "../App.css";
import { Facebook, Twitter, Instagram, MapPin, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        fontSize: "0.75rem",
        padding: "1rem 0",
        backgroundColor: "#f7f7f7",
      }}
    >
      <div
        className="footer-content"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div className="social-media" style={{ display: "flex", gap: "0.75rem" }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={18} />
          </a>
        </div>

        <div className="address" style={{ lineHeight: "1.2" }}>
          <p style={{ margin: 0 }}>
            <MapPin size={14} style={{ verticalAlign: "middle" }} />{" "}
            1234 Handmade Street, Earthy Town
          </p>
          <p style={{ margin: 0 }}>Phone: +3(800)123-4567</p>
        </div>

        <div className="company-info" style={{ lineHeight: "1.2" }}>
          <p style={{ margin: 0 }}>
            <Info size={14} style={{ verticalAlign: "middle" }} /> © 2025 Krugla Shafa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
