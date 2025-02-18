import React, { useState } from "react";
import "../styles/articleSlider.css";


const ArticleSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/kitchen.png",
      title: "Elegant Kitchen Designs",
      description:
        "Discover handcrafted kitchen furniture designed with timeless elegance and sustainable materials. Our pieces are built to last, blending functionality with modern aesthetics.",
      buttonText: "View Kitchen Collection",
    },
    {
      id: 2,
      image: "/images/bathroom.png",
      title: "Luxurious Bathroom Pieces",
      description:
        "Our bathroom collection features artisanal designs that bring warmth and sophistication to your space. Explore our handcrafted selections perfect for any home.",
      buttonText: "Discover More",
    },
    {
      id: 3,
      image: "/images/bathroom-2.png",
      title: "Modern Bathroom Innovations",
      description:
        "Experience the fusion of contemporary design and traditional craftsmanship. Our latest collection redefines bathroom luxury with sleek, eco-friendly materials.",
      buttonText: "Learn More",
    },
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="article-slider">
      <div className="slider-container">
        <div
          className="slides"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div className="slide" key={slide.id}>
              <div className="image-container">
                <img src={slide.image} alt={slide.title} />
              </div>
              <div className="text-container">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <a href="#" className="article-button">
                  {slide.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-navigation">
          {slides.map((_, index) => (
            <label
              key={index}
              className={index === activeSlide ? "active" : ""}
              onClick={() => handleDotClick(index)}
            ></label>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSlider;