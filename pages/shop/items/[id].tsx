import Item404 from "./404";
import { AddToCart } from "../../../components/ItemControls";
import DefaultLayout from "../../../layouts/Default";

const Item = (props) => {
  const item = JSON.parse(props.item);
  const { name, description, stock, price, discount, categories, isPublished } =
    item;
  return isPublished ? (
    <DefaultLayout>
      <h1>
        <span>
          {name} ${price}
        </span>
      </h1>
      <p>{description}</p>
      <ul>
        {categories.map((category) => {
          return <p key={category._id}>{category.name}</p>;
        })}
      </ul>
      <AddToCart productID={item._id} />
    </DefaultLayout>
  ) : (
    <DefaultLayout>
      <Item404 />
    </DefaultLayout>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const { product } = await fetch(
    process.env.ROOT_API + `/products/${id}`
  ).then((res) => res.json());
  return {
    props: { item: JSON.stringify(product) },
  };
};

export default Item;
