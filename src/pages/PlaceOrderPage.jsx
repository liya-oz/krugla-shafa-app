import React from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import "../styles/PlaceOrderPage.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Place Your Order</h1>
      <CheckoutForm />
      <div className="back-home">
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}

export default Contact;
