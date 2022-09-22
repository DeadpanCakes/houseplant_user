import { useContext } from "react";
import { CartContext } from "../context/Cart";
import DefaultLayout from "../layouts/Default";
import { ItemControls } from "../components/ItemControls";

const Cart = (props) => {
  const products = JSON.parse(props.products);
  const cart = useContext(CartContext);
  const items = cart.items.map((item) => {
    const product = products.find((product) => item._id === product._id);
    return { ...product, quantity: item.quantity };
  });
  return (
    <DefaultLayout>
      <ul>
        {items.map((item) => (
          <div key={item._id}>
            <button onClick={() => console.log(item)}>Check</button>
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

export const getServerSideProps = (context) => {
  const products = [
    {
      _id: "25",
      name: "Product",
      description: "This is a placeholder object",
      stock: 10,
      price: 10,
      discount: 15,
      categories: [
        {
          _id: "1",
          name: "Tropical",
          description:
            "Leafy Plants That Can Endure Periods Of Shade; Great Indoor Plants",
        },
        { _id: "2", name: "Pink", description: "Plants With Shades Of Pink" },
      ],
      isPublished: true,
    },
    {
      _id: "26",
      name: "Product 2",
      description: "This is a placeholder object",
      stock: 10,
      price: 15,
      discount: 25,
      categories: [
        {
          _id: "1",
          name: "Tropical",
          description:
            "Leafy Plants That Can Endure Periods Of Shade; Great Indoor Plants",
        },
        { _id: "2", name: "Pink", description: "Plants With Shades Of Pink" },
      ],
      isPublished: true,
    },
    {
      _id: "28",
      name: "Product 3",
      description: "This is a placeholder object",
      stock: 5,
      price: 5,
      discount: 0,
      categories: [
        {
          _id: "1",
          name: "Tropical",
          description:
            "Leafy Plants That Can Endure Periods Of Shade; Great Indoor Plants",
        },
        { _id: "2", name: "Pink", description: "Plants With Shades Of Pink" },
      ],
      isPublished: true,
    },
  ];
  return {
    props: {
      products: JSON.stringify(products),
    },
  };
};

export default Cart;
