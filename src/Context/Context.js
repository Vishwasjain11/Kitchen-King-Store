import { createContext, useState } from "react";

export const ShoppingContext = createContext();

const ShoppingContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);  // Cart count
  const [price, setPrice] = useState(0);  // Total price

  // Add item to cart and update total price
  const addToCart = (item) => {
    setCart([...cart, item]);
    setCartCount(cart.length + 1);

    const itemPrice = parseFloat(item.price);  // Ensure price is a number
    setPrice(price + itemPrice);  // Update total price
  };

  // Remove item from cart and update total price
  const removeFromCart = (itemId) => {
    const removedItem = cart.find(item => item.id === itemId);
  
    if (removedItem) {
      setPrice(price - parseFloat(removedItem.price));  // Update total price
    }
  
    setCart(cart.filter(item => item.id !== itemId));  // Update cart
    setCartCount(cart.length - 1);  // Update cart count
  };
  

  return (
    <ShoppingContext.Provider value={{ addToCart, removeFromCart, cart, cartCount, price }}>
      {props.children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContextProvider;
