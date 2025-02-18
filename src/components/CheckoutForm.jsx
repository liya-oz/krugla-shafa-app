import React, { useState } from "react";
import { useBasket } from "../context/BasketContext";
import { useNavigate } from "react-router-dom";
import "../styles/CheckoutForm.css";

const CheckoutForm = () => {
  const { basket } = useBasket();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError("Please fill out all required fields.");
      return;
    }
    
    setSubmitting(true);
    console.log("Order submitted:", { ...formData, basket });
    
    setTimeout(() => {
      setSubmitting(false);
      alert("Your order has been submitted successfully!");
      navigate("/store");
    }, 1500);
  };
  
  return (
    <div className="checkout-form-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="firstName">First Name*</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            placeholder="John"
            required 
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastName">Last Name*</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            placeholder="Doe"
            required 
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email*</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="john.doe@example.com"
            required 
          />
        </div>
        <div className="form-row">
          <label htmlFor="comments">Comments</label>
          <textarea 
            id="comments" 
            name="comments" 
            value={formData.comments} 
            onChange={handleChange} 
            placeholder="Any additional information..."
          />
        </div>
        {error && <p className="error-text">{error}</p>}
        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Place Order"}
        </button>
      </form>
      
      <div className="basket-summary">
        <h3>Basket Summary</h3>
        {basket.length ? (
          <ul>
            {basket.map((item, index) => (
              <li key={index}>
                {item.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your basket is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
