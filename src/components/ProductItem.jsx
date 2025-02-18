import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Check } from "lucide-react";
import { useBasket } from "../context/BasketContext";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { sku } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { addToBasket } = useBasket();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`https://furniture-api.fly.dev/v1/products/${sku}`);
        const data = await response.json();
        if (data.success) {
          setProduct(data.data);
        } else {
          console.error("Error fetching product detail:", data.error);
        }
      } catch (err) {
        console.error("Error fetching product detail:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [sku]);

  useEffect(() => {
    let timer;
    if (added) {
      timer = setTimeout(() => setAdded(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [added]);

  const handleAddToBasket = () => {
    addToBasket(product);
    setAdded(true);
  };

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={product.image_path} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p className="price">
          ${product.discount_price ? product.discount_price.toFixed(2) : product.price.toFixed(2)}
          {product.discount_price && (
            <span className="original-price"> ${product.price.toFixed(2)}</span>
          )}
        </p>
        <p className="description">{product.description}</p>
        <p>Category: {product.category}</p>
        <p>Wood Type: {product.wood_type}</p>
        <p>Finish: {product.finish}</p>
        <p>
          Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}
        </p>
        <p>Stock: {product.stock}</p>
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
          <span>{added ? "Added" : "Add to Basket"}</span>
        </button>
        <div className="back-to-store">
          <Link to="/store">← Back to Store</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
