"use client"
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <h1>fetch data with API in Client Component</h1>
      <Link href="/productlist">Go to Products List</Link>
    </main>
  )
}
