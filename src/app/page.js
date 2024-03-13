import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/user">Go to user page</Link>
      <br />
      <br />
      <Link href="/admin">Go to admin page</Link>
    </main>
  );
}
