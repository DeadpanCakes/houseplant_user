import Link from "next/link";
import BannerNav from "../components/BannerNav";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <h1>Home</h1>
        </a>
      </Link>
      <nav>
        <Link href="/register">
          <a>Sign Up</a>
        </Link>
        <Link href="/log-in">
          <a>Log In</a>
        </Link>
        <Link href="/cart">
          <a>Cart</a>
        </Link>
      </nav>
      <BannerNav />
    </header>
  );
};

export default Header;
