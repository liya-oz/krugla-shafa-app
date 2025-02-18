import React from "react";
import "../styles/heroSection.css";

const HeroSection = () => {
  return (
    <section className="hero" role="banner">
      <div className="hero-image-container">
        <img 
          src="/images/room.png" 
          alt="Study room with furniture" 
          className="hero-background-img" 
        />
      </div>

      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Study Furniture</h1>
          <p className="hero-description">
            Whether you're looking for a cozy patio set or a statement piece for your garden, our collection offers a wide range of styles to suit your outdoor space.
          </p>
          <a 
            href="#"
            className="hero-button"
            aria-label="View our furniture selection"
          >
            View Selection
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
