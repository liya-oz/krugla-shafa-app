import { useState, useEffect } from "react";

const useFetch = (url, offset = 0, limit = 10) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}?offset=${offset}&limit=${limit}`);
        const result = await response.json();

        console.log("📥 API Response:", result);

        if (result.success && Array.isArray(result.data)) {
          setTimeout(() => {
            setData((prevData) => {
              const newProducts = result.data.filter(
                (product) => !prevData.some((p) => p.id === product.id)
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
        setError("Failed to load data.");
      } finally {
        setTimeout(() => setLoading(false), 300); 
      }
    };

    fetchData();
  }, [url, offset, limit]);

  return { data, loading, error, hasMore };
};

export default useFetch;
