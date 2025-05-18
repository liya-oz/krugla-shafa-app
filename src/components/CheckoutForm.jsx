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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { firstName, lastName, email } = formData;
    if (!firstName || !lastName || !email) {
      setError("Please fill out all required fields.");
      return;
    }

    setSubmitting(true);
    console.log("Order submitted:", { ...formData, basket });

    setTimeout(() => {
      setSubmitting(false);
      alert("Thanks! Your order was submitted.");
      navigate("/store");
    }, 1200);
  };

  return (
    <div className="checkout-form-container">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-row">
          <label htmlFor="firstName">First Name*</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="lastName">Last Name*</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your surname"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Add your email"
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
          />
        </div>

        {error && <p className="error-text">{error}</p>}

        <button type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Place Order"}
        </button>
      </form>

      <div className="basket-summary">
        <h4>You order:</h4>
        {basket.length > 0 ? (
          <ul>
            {basket.map((item, idx) => (
              <li key={idx}>
                {item.name} × {item.quantity}
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
