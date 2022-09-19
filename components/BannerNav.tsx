import Link from "next/link";

const ShopNav = () => {
  return (
    <nav>
      <Link href="/shop/categories/tropical">
        <a>Tropical</a>
      </Link>
      <Link href="/shop/categories/succulent">
        <a>Succulents</a>
      </Link>
      <Link href="/shop/categories/tillandsia">
        <a>Tillandsia</a>
      </Link>
      <Link href="/shop/categories/misc">
        <a>Miscellaneous</a>
      </Link>
    </nav>
  );
};

export default ShopNav;
