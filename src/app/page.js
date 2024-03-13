import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Export Static HTML Page with Build</h1>
      <Link href="/products">Go to Products Page</Link>
      <br />
      <br />
      <Link href="/seller">Go to Seller Page</Link>
    </main>
  );
}
