import { useState, useEffect } from "react";

const useFetch = (url, offset = 0, limit = 10) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setData([]);
    setError(null);
  }, [url]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const connector = url.includes('?') ? '&' : '?';
        const fullUrl = `${url}${connector}offset=${offset}&limit=${limit}`;
        const response = await fetch(fullUrl);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const result = await response.json();
        console.log("📥 API Response:", result);

        if (result.success && Array.isArray(result.data)) {
          if (url.includes("category=")) {
            const params = new URLSearchParams(url.split('?')[1]);
            const filterCategory = params.get("category");
            if (filterCategory) {
              result.data = result.data.filter(
                product =>
                  product.category &&
                  product.category.toLowerCase() === filterCategory.toLowerCase()
              );
            }
          }

          setTimeout(() => {
            setData(prevData => {
              const newProducts = result.data.filter(
                product => !prevData.some(p => p.id === product.id)
              );
              return [...prevData, ...newProducts];
            });
            setHasMore(result.data.length === limit);
          }, 500);
        } else {
          setHasMore(false);
          throw new Error("Unexpected API response format.");
        }
      } catch (err) {
        setError(err.message || "Failed to load data.");
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    };

    fetchData();
  }, [url, offset, limit]);

  return { data, loading, error, hasMore };
};

export default useFetch;
