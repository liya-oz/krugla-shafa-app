import React from "react";
import { useBasket } from "../context/BasketContext";
import { Minus, Plus, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/Purchased.css";

function Purchased() {
  const { basket, removeFromBasket, increaseQuantity, decreaseQuantity } = useBasket();
  const navigate = useNavigate();

  const totalCost = basket.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handlePlaceOrder = () => {
    // Navigate to the contact page for order submission
    navigate("/contact");
  };

  return (
    <div className="purchased-container">
      <h2>🛒 Your Basket</h2>
      {basket.length > 0 ? (
        <>
          {basket.map((product) => (
            <div key={product.id} className="basket-item">
              <img src={product.image_path} alt={product.name} width="50" />
              <div className="basket-details">
                <p>{product.name} - ${product.price}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    title="Decrease Quantity"
                    className="control-button"
                  >
                    <Minus size={20} stroke="black" />
                  </button>
                  <span className="quantity-display">{product.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    title="Increase Quantity"
                    className="control-button"
                  >
                    <Plus size={20} stroke="black" />
                  </button>
                  <button
                    onClick={() => removeFromBasket(product.id)}
                    title="Remove from Basket"
                    className="control-button remove"
                  >
                    <Trash size={20} stroke="red" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="basket-total">
            <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
          </div>
          <div className="basket-submit">
            <button 
              className="submit-order-button" 
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </>
      ) : (
        <p>Your basket is empty.</p>
      )}
    </div>
  );
}

export default Purchased;
