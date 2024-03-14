import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/users">Go to Users Page</Link>
      <br />
      <br />
      <Link href="/adduser">Go to Add User Page</Link>
    </main>
  );
}
