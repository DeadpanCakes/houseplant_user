import DefaultLayout from "../layouts/Default";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <DefaultLayout>
        <h1>Welcome To Website</h1>
      </DefaultLayout>
    </div>
  );
}
