import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Krugla Shafa</h1>

      <p>
        Krugla Shafa is a small workshop focused on building practical, well-made furniture. 
        Everything we produce is designed to last—not just in function, but in feeling.
      </p>

      <p>
        We don’t mass-produce. Every piece is made to order, by hand, using solid materials and 
        simple, honest construction. No shortcuts, no waste. Just thoughtful design shaped by your needs.
      </p>

      <p>
        Most of our clients come to us with an idea, a space that needs solving, or a feeling they want a room to reflect. 
        We listen, sketch, measure, and build. That’s it.
      </p>

      <p>
        If you're looking for custom furniture that’s built for real life—not just for showrooms—let’s talk.
        <Link to="/contact" className="contact-link"> Get in touch </Link>
      </p>

      <div className="back-to-home">
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}

export default About;
