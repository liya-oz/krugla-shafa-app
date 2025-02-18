import React from "react";
import { Link } from "react-router-dom"; // ✅ Use Link for navigation
import "../styles/heroSection.css";

const HeroSection = () => {
  return (
    <section className="hero" role="banner">
      <div className="hero-content">
        <h1 className="hero-title">Custom Furniture, Built for You</h1>
        <p className="hero-description">
  Don’t settle for mass-produced furniture—create something uniquely yours. 
  Imagine a piece that fits your space, reflects your personality, and serves your needs perfectly.  
  Our skilled artisans handcraft every order with passion and precision, turning your vision into reality.  
  No compromises. No limits. Just furniture made for you.
</p>


        <div className="hero-buttons">
          <Link to="/contact" className="hero-button" aria-label="Request a custom furniture order">
            Create Your Custom Piece
          </Link>
          <Link to="/store" className="hero-button outline" aria-label="Browse our collection">
            Explore Our Designs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
