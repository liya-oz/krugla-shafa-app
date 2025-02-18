import React, { createContext, useContext, useState, useEffect } from "react";

const BasketContext = createContext();

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromBasket = (id) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setBasket((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setBasket((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  useEffect(() => {
  }, [basket]);

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
