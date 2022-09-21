import ProductListing from "../../../components/ProductListing";

const Category = (props) => {
  const category = JSON.parse(props.category);
  const products = JSON.parse(props.products);
  return (
    <>
      <h1>{category.name}</h1>
      <ul>
        {products.map((product) => {
          return <ProductListing key={product._id} product={product} />;
        })}
      </ul>
    </>
  );
};

export const getServerSideProps = (context) => {
  const category = {
    _id: context.params.id,
    name: "Placeholder Category",
    description: "This is a plaeholder category",
  };
  const products = [
    {
      _id: 25,
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
    },
  ];
  return {
    props: {
      category: JSON.stringify(category),
      products: JSON.stringify(products),
    },
  };
};

export default Category;
