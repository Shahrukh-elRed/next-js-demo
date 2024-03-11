'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("Anil")

  const apple = () => {
    setName("Sidhu")
  }

  const InnerComp = () => {
    return <h1>Inner Component</h1>
  }

  return (
    <main className={styles.main}>
      <h1>Events, functions, and state - {name}</h1>
      <button onClick={apple}>Click me</button>
      
      {/* Called as a React component */}
      <InnerComp />
      
      {/* Called as a function */}
      {InnerComp()}
    </main>
  );
}
