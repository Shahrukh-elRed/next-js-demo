import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>generateMetadata in Next</h1>
      <Link href="/user">User Page</Link>
    </main>
  );
}

export const generateMetadata = () => {
  return {
      title: "student page title",
      description: "student page description",
  }
}