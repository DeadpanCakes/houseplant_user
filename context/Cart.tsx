import { useState, createContext } from "react";

export const CartContext = createContext({});

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
  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
