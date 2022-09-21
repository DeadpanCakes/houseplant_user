import { useState } from "react";
import ProductListing from "../../../components/ProductListing";
import Sorter from "../../../components/Sorter";
import FilterControl from "../../../components/FilterControl";

const Category = (props) => {
  const category = JSON.parse(props.category);
  const products = JSON.parse(props.products);
  const [sortCritera, setSortCriteria] = useState("default");
  const [desiredTags, setDesiredTags] = useState([]);

  const sortHandler = (a, b) => {
    if (sortCritera !== "default") {
      return a[sortCritera] - b[sortCritera];
    }
    return a["_id"] - b["_id"];
  };

  const filterHandler = (product) =>
    desiredTags.length > 1
      ? product.categories.find((category) =>
          desiredTags.includes(category.name)
        )
      : product;
  return (
    <>
      <h1>{category.name}</h1>
      <Sorter
        criteria={["price", "name", "default", "discount"]}
        changeHandler={setSortCriteria}
      />
      <FilterControl
        tags={[
          { _id: 4, name: "tropical" },
          { _id: 5, name: "succulent" },
        ]}
        changeHandler={setDesiredTags}
      />
      <ul>
        {products
          .sort(sortHandler)
          .filter(filterHandler)
          .map((product) => {
            return <ProductListing key={product._id} product={product} />;
          })}
      </ul>
      <ul>
        {desiredTags.map((t) => (
          <li>{t.name}</li>
        ))}
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
      discount: 15,
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
    {
      _id: 26,
      name: "Product 2",
      description: "This is a placeholder object",
      stock: 10,
      price: 15,
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
    {
      _id: 28,
      name: "Product 3",
      description: "This is a placeholder object",
      stock: 5,
      price: 5,
      discount: 0,
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
