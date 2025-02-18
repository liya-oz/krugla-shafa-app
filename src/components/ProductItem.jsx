import React, { useState, forwardRef, useEffect } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../context/BasketContext";
import "../styles/ProductItem.css";

const ProductItem = forwardRef(function ProductItem({ product }, ref) {
  const { addToBasket } = useBasket();
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (added) {
      timer = setTimeout(() => setAdded(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [added]);

  const handleCardClick = () => {
    navigate(`/products/${product.sku}`);
  };

  const handleAddToBasket = (e) => {
    e.stopPropagation();
    addToBasket(product);
    setAdded(true);
  };

  return (
<div className="product-card" ref={ref} onClick={handleCardClick}>
  <div className="product-image-container">
    <img src={product.image_path} alt={product.name} />
  </div>

  <button 
    className="basket-button" 
    onClick={handleAddToBasket}
    disabled={added}
    title={added ? "Added to Basket" : "Add to Basket"}
  >
    {added 
      ? <Check size={24} stroke="green" /> 
      : <ShoppingCart size={24} stroke="black" />
    }
  </button>

  <div className="product-details">
    <div className="product-info">
      <h3 className="product-title">{product.name}</h3>
      <p className="price">${product.price}</p>
    </div>
  </div>
</div>
  );
});

ProductItem.displayName = "ProductItem";

export default ProductItem;
