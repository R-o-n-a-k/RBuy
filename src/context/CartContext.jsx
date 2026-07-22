import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Calculate total quantity of all products
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Add product to cart
  const addToCart = (product , quantity = 1) => {
    setCartItems((currentItems) => {
      // Check if product already exists
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      // If product exists, increase quantity
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      // If product doesn't exist, add it
      return [
        ...currentItems,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  // Remove product completely
  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  // Increase product quantity
  const increaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease product quantity
  const decreaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;