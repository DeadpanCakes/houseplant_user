import Link from "next/link";
import Header from "../components/Header";

const Default = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer>
        <p>Copyright 2022</p>
      </footer>
    </>
  );
};

export default Default;
