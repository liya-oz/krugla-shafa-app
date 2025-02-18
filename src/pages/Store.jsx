import { useState } from "react";
import useFetch from "../hooks/useFetch";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import "../styles/Store.css";
import ProductItem from "../components/ProductItem";
import { Loader2 } from "lucide-react"; 

function Store() {
  const [offset, setOffset] = useState(0);
  const { data: products, loading, error, hasMore } = useFetch(
    "https://furniture-api.fly.dev/v1/products",
    offset
  );

  const loadMore = () => {
    console.log("🔄 Loading more products...");
    setOffset((prevOffset) => prevOffset + 10);
  };

  const lastElementRef = useInfiniteScroll(loadMore, loading, hasMore);

  return (
    <div className="store-container">
      <h1>🛋️ Our Furniture Collection</h1>

      {error && <p className="error-text">❌ Error: {error}</p>}

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
}

export default Store;
