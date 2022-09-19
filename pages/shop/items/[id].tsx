const Item = (props) => {
  const item = JSON.parse(props.item);
  const { name, description, stock, price, discount, categories, isPublished } =
    item;
  return (
    <>
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
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const placeholderProduct = {
    _id: id,
    name: "Product",
    description: "This is a placeholder object",
    stock: 10,
    price: 10,
    discount: 25,
    categories: [
      {
        _id: 1,
        name: "Tropical",
        description:
          "Leafy Plants That Can Endure Periods Of Shade; Great Indoor Plants",
      },
      { _id: 2, name: "Pink", description: "Plants With Shades Of Pink" },
    ],
    isPublished: true,
  };
  return {
    props: { item: JSON.stringify(placeholderProduct) },
  };
};

export default Item;
