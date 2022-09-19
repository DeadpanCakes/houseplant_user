import Link from "next/link";
import BannerNav from "../components/BannerNav";

const Default = ({ children }) => {
  return (
    <>
      <header>
        <h1>Home</h1>
        <nav>
          <Link href="/register">
            <a>Sign Up</a>
          </Link>
          <Link href="/log-in">
            <a>Log In</a>
          </Link>
        </nav>
        <BannerNav />
      </header>
      {children}
      <footer>
        <p>Copyright 2022</p>
      </footer>
    </>
  );
};

export default Default;
