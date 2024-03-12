"use client"
import Link from "next/link";
import style1 from "@/other.module.css";
import style2 from "@/custom.module.css";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("red")
  const { red } = style2;

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
      <div className={color === "red" ? style2.red : style2.green}>Condition with style</div>
      <button onClick={() => setColor(color === "red" ? "green" : "red")}>Update Color</button>
      <div id={style2.whitetext} style={color === "red" ? {background: "red"} : {background: "green"}}>Condition with Inline style</div>
      <div className={red}>Red 1</div>
      <div className={red}>Red 2</div>
      <div className={red}>Red 3</div>
      <div className={red}>Red 4</div>
    </main>
  )
}
