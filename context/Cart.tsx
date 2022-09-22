import { useState, createContext } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addItem = (newItem) => {
    setItems((prevState) => {
      return prevState.concat(newItem);
    });
  };
  const removeItem = (targetID) => {
    return setItems((prevState) => {
      return prevState.filter((item) => {
        item._id === targetID;
      });
    });
  };
  const setQuantity = (targetID, newQuantity) => {
    setItems((prevState) => {
      return prevState.map((item) => {
        if (item._id !== targetID) {
          return item;
        }
        return { ...item, quantity: newQuantity };
      });
    });
  };
  const incrementQuantity = (targetID) => {
    setItems((prevState) => {
      return prevState.map((item) => {
        if (item._id !== targetID) {
          return item;
        }
        return {
          ...item,
          quantity: item.quantity < 99 ? item.quantity + 1 : item.quantity,
        };
      });
    });
  };
  const decrementQuantity = (targetID) => {
    setItems((prevState) => {
      return prevState.map((item) => {
        if (item._id !== targetID) {
          return item;
        }
        return {
          ...item,
          quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
        };
      });
    });
  };
  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        incrementQuantity,
        decrementQuantity,
        setQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
