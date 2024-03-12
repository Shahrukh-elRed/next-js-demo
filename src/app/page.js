"use client"
import Link from "next/link";
import style1 from "@/other.module.css";
import style2 from "@/custom.module.css";

export default function Home() {

  return (
    <main>
      <h1>fetch data with API in Client Component</h1>
      <Link href="/productlist">Go to Client Products List</Link>
      <br />
      <br />
      <h1>fetch data with API in Server Component</h1>
      <Link href="/serverproductlist">Go to Server Products List</Link>
      <br />
      <br />
      <h1>Global and inline styles component</h1>
      <Link href="/user">Go to Global and inline styles component</Link>
      <div className={style1.main}>Custom CSS dark blue color</div>
      <div className={style2.main}>Custom CSS dark gray color</div>
    </main>
  )
}
