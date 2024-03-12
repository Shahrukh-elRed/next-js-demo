"use client"
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <h1>fetch data with API in Client Component</h1>
      <Link href="/productlist">Go to Client Products List</Link>
      <br />
      <br />
      <h1>fetch data with API in Server Component</h1>
      <Link href="/serverproductlist">Go to Server Products List</Link>
    </main>
  )
}
