import { useState } from "react";
import ProductListing from "../../../components/ProductListing";
import Sorter from "../../../components/Sorter";
import FilterControl from "../../../components/FilterControl";

const Category = (props) => {
  const category = JSON.parse(props.category);
  const categories = JSON.parse(props.categories);
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
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { categories } = await fetch(process.env.ROOT_API + "/categories").then(
    (res) => res.json()
  );
  const category = categories.find((cat) => cat._id === context.params.id);
  const { products } = await fetch(process.env.ROOT_API + "/products").then(
    (res) => res.json()
  );
  return {
    props: {
      category: JSON.stringify(category),
      categories: JSON.stringify(categories),
      products: JSON.stringify(products),
    },
  };
};

export default Category;
