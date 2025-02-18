import React, { useState, useEffect, useCallback } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import ProductItem from "./ProductItem";
import { Loader2 } from "lucide-react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://furniture-api.fly.dev/v1/products?limit=50&offset=0")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.data);
          setDisplayedProducts(data.data.slice(0, 10));
        } else {
          console.error("Failed to fetch products:", data.error);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  const loadMoreProducts = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    console.log("Loading more products...");
    setTimeout(() => {
      setDisplayedProducts((prev) => {
        const nextBatch = products.slice(prev.length, prev.length + 10);
        if (nextBatch.length === 0) {
          setHasMore(false);
        }
        return [...prev, ...nextBatch];
      });
      setIsLoading(false);
    }, 1000);
  }, [isLoading, hasMore, products]);

  const lastElementRef = useInfiniteScroll(loadMoreProducts, isLoading, hasMore);

  return (
    <div className="product-list">
      {displayedProducts.map((product, index) => (
        <div
          key={product.sku}
          ref={index === displayedProducts.length - 1 ? lastElementRef : null}
        >
          <ProductItem product={product} />
        </div>
      ))}
      {isLoading && (
        <div className="loading-spinner">
          <Loader2 size={32} className="spinner-icon" />
        </div>
      )}
    </div>
  );
}

export default ProductList;
