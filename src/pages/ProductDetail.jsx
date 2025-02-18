import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Check } from "lucide-react";
import { useBasket } from "../context/BasketContext";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { sku } = useParams();
  const { addToBasket } = useBasket();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

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
      } catch (error) {
        console.error("Error fetching product detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [sku]);

  useEffect(() => {
    if (!added) return;
    const timer = setTimeout(() => setAdded(false), 2000);
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

  const displayPrice = product.discount_price ? product.discount_price : product.price;

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={product.image_path} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p className="price">
          ${displayPrice.toFixed(2)}
          {product.discount_price && (
            <span className="original-price"> ${product.price.toFixed(2)}</span>
          )}
        </p>
        <p className="description">{product.description}</p>

        <div className="product-specs">
          <div className="spec-item">
            <span className="spec-label">Category</span>
            <span className="spec-value">{product.category}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Wood Type</span>
            <span className="spec-value">{product.wood_type}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Finish</span>
            <span className="spec-value">{product.finish}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Dimensions</span>
            <span className="spec-value">
              {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Stock</span>
            <span className="spec-value">{product.stock}</span>
          </div>
        </div>

        <button
          className="basket-button"
          onClick={handleAddToBasket}
          disabled={added}
          title={added ? "Added to Basket" : "Add to Basket"}
        >
          {added ? <Check size={24} stroke="green" /> : <ShoppingCart size={24} stroke="black" />}
        </button>
        <div className="back-to-store">
          <Link to="/store">← Back to Store</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
