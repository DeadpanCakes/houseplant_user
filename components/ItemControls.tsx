import { useState, useContext } from "react";
import { CartContext } from "../context/Cart";

export const AddToCart = ({ productID }) => {
  const [quantity, setQuantity] = useState(1);
  const increment = () =>
    setQuantity((prevState) => {
      return prevState < 99 ? prevState + 1 : prevState;
    });
  const decrement = () =>
    setQuantity((prevState) => {
      return prevState > 1 ? prevState - 1 : prevState;
    });
  const cart = useContext(CartContext);
  return (
    <>
      <button
        onClick={() => {
          cart.addItem({ _id: productID, quantity });
        }}
      >
        Add To Cart
      </button>
      <ItemControls counter={{ increment, decrement, quantity, setQuantity }} />
    </>
  );
};

export const ItemControls = ({ counter }) => {
  const { increment, decrement, quantity, setQuantity } = counter;
  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input
        value={quantity}
        onChange={(e) => {
          const quantity = Number(e.target.value);
          if (quantity > 99) {
            return setQuantity(99);
          } else if (quantity < 1) {
            return setQuantity(1);
          }
          return setQuantity(quantity);
        }}
      />
    </>
  );
};
