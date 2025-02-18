import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Krugla Shafa</h1>
      <p>
        At <strong>Krugla Shafa</strong>, we believe that furniture should adapt to your life, 
        not the other way around. Unlike mass-produced pieces that force you to adjust your space, 
        we create <strong>custom, handcrafted furniture</strong> tailored to your style, needs, and vision.
      </p>

      <h2>Handmade with Passion</h2>
      <p>
        Every piece is crafted by skilled artisans using high-quality materials, 
        ensuring durability, beauty, and timeless design. We don’t follow trends—we create 
        furniture that lasts for generations.
      </p>

      <h2>Designed for Your Home, Not a Showroom</h2>
      <p>
        Our philosophy is simple: <strong>furniture should fit your lifestyle</strong>. 
        Instead of buying a piece and wondering how to make it work, we design each item to 
        <strong>match your space perfectly</strong>—whether it's a modern loft, a rustic cabin, or a cozy family home.
      </p>

      <h2>Personalized Creations for Your Dream Home</h2>
      <p>
        We specialize in <strong>custom projects</strong>, bringing your ideas to life. Whether you need a 
        one-of-a-kind dining table, a custom bookshelf, or a unique bed frame, we work with you to ensure 
        that every detail aligns with your vision.
      </p>

      <h2>Sustainability Matters</h2>
      <p>
        We prioritize <strong>eco-friendly materials</strong> and responsible craftsmanship, 
        making sure that beauty and sustainability go hand in hand.
      </p>

      <h2>Your Dreams, Our Craftsmanship</h2>
      <p>
        At <strong>Krugla Shafa</strong>, we don't just sell furniture—we create <strong>pieces with soul</strong>, 
        designed to make your home truly yours.
      </p>

      <p className="contact-info">
       <strong>Let’s Create Together!</strong> Looking for something special? 
        <Link to="/contact" className="contact-link"> Contact us</Link> to discuss your custom furniture project!
      </p>

      <div className="back-to-home">
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}

export default About;
