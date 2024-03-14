import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/users">Go to Users Page - Static API</Link>
      <br />
      <br />
      <Link href="/adduser">Go to Add User Page - Static API</Link>
      <br />
      <br />
      <br />
      <br />
      <Link href="/addproduct">Go to Add Product Page</Link>
      <br />
      <br />
      <Link href="/products">Go to Products Page</Link>
    </main>
  );
}
