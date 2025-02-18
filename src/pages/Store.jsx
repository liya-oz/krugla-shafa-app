import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import "../styles/Store.css";
import ProductItem from "../components/ProductItem";
import { Loader2 } from "lucide-react";

const BASE_URL = "https://furniture-api.fly.dev/v1/products";

const Store = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const [offset, setOffset] = useState(0);
  const [url, setUrl] = useState(BASE_URL);

  useEffect(() => {
    if (category && category !== "all") {
      setUrl(`${BASE_URL}?category=${encodeURIComponent(category)}`);
    } else {
      setUrl(BASE_URL);
    }
    setOffset(0);
  }, [category]);

  const { data: products, loading, error, hasMore } = useFetch(url, offset);

  const loadMore = () => setOffset((prevOffset) => prevOffset + 10);

  const lastElementRef = useInfiniteScroll(loadMore, loading, hasMore);

  return (
    <div className="store-container">
      <h1>🛋️ Our Furniture Collection</h1>
      {error && <p className="error-text">Error: {error}</p>}
      {!loading && products.length === 0 && <p>⚠️ No products available.</p>}
      <div className="store-grid">
        {products.map((product, index) => (
          <ProductItem
            key={`${product.id}-${index}`}
            product={product}
            ref={index === products.length - 1 ? lastElementRef : null}
          />
        ))}
      </div>
      {loading && (
        <div className="loading-spinner">
          <Loader2 size={32} className="spinner-icon" />
        </div>
      )}
    </div>
  );
};

export default Store;
