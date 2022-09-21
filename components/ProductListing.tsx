import Link from "next/link";

const ItemListing = ({ product }) => {
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
};

export default ItemListing;
