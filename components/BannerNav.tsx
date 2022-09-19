import Link from "next/link";

const ShopNav = () => {
  return (
    <nav>
      <Link href="/shop/tropicial">
        <a>Tropical</a>
      </Link>
      <Link href="/shop/succulent">
        <a>Succulents</a>
      </Link>
      <Link href="/shop/tillandsia">
        <a>Tillandsia</a>
      </Link>
      <Link href="/shop/misc">
        <a>Miscellaneous</a>
      </Link>
    </nav>
  );
};

export default ShopNav;
