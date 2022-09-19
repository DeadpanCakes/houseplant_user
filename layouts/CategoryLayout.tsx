import Link from "next/link";

const Category = ({ category, products }) => {
  return (
    <>
      <h1>{category.name}</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product._id}>
              <Link href={`/shop/items/${product._id}`}>
                <a>
                  <span>
                    {product.name} ${product.price}
                  </span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Category;
