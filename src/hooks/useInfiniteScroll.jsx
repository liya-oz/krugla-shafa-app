import { useEffect, useRef, useCallback } from "react";

const useInfiniteScroll = (callback, isLoading, hasMore) => {
  const observer = useRef(null);

  const lastElementRef = useCallback(
    (node) => {
      if (isLoading || !hasMore) return; // to prevent multiple unnecessary calls

      if (observer.current) observer.current.disconnect(); 

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            console.log("🟢 Last element is visible, loading more...");
            callback();
          }
        },
        { threshold: 0.5 } // for adjusting sensitivity
      );

      if (node) observer.current.observe(node);
    },
    [callback, isLoading, hasMore]
  );

  return lastElementRef;
};

export default useInfiniteScroll;
