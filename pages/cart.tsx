import { useContext } from "react";
import { CartContext } from "../context/Cart";
import DefaultLayout from "../layouts/Default";
import { ItemControls } from "../components/ItemControls";

const Cart = (props) => {
  const products = JSON.parse(props.products);
  const cart = useContext(CartContext);
  const items = cart.items.map((item) => {
    const product = products.find((product) => item._id === product._id);
    console.log(item._id, products);
    return { ...product, quantity: item.quantity };
  });
  return (
    <DefaultLayout>
      <ul>
        {items.map((item) => (
          <div key={item._id}>
            <CartListing item={item} key={item._id} />
            <ItemControls
              counter={{
                quantity: item.quantity,
                setQuantity: (newQuantity) =>
                  cart.setQuantity(item._id, newQuantity),
                increment: () => cart.incrementQuantity(item._id),
                decrement: () => cart.decrementQuantity(item._id),
              }}
            />
            <button onClick={() => cart.removeItem(item._id)}>X</button>
          </div>
        ))}
      </ul>
    </DefaultLayout>
  );
};

const CartListing = ({ item }) => {
  return (
    <li key={item._id}>
      <h2>
        <span>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </span>
      </h2>
    </li>
  );
};

export const getServerSideProps = async (context) => {
  const { products } = await fetch(process.env.ROOT_API + "/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products: JSON.stringify(products),
    },
  };
};

export default Cart;
