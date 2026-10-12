
import { useState } from "react";
import { ValueContext } from "./Context";

export function ValueProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Total items count
  const value = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item._id === product._id
      );

      if (existing) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Delete product from cart
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item._id !== id)
    );
  };

  return (
    <ValueContext.Provider
      value={{
        value,
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
}
