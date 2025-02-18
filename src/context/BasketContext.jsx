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
    setBasket((prevBasket) => {
      const existingProduct = prevBasket.find(item => item.id === product.id);
      if (existingProduct) {
        return prevBasket.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevBasket, { ...product, quantity: 1 }];
      }
    });
    console.log("✅ Item added to basket:", product);
  };

  const removeFromBasket = (id) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id));
    console.log("❌ Item removed from basket:", id);
  };

  const increaseQuantity = (id) => {
    setBasket((prevBasket) =>
      prevBasket.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    console.log("🔺 Increased quantity for id:", id);
  };

  const decreaseQuantity = (id) => {
    setBasket((prevBasket) =>
      prevBasket.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
    console.log("🔻 Decreased quantity for id:", id);
  };

  useEffect(() => {
    console.log("🛒 Basket Updated:", basket);
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
