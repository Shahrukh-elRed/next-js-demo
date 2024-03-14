"use client"
import Link from "next/link"
import { useState } from "react"

const AddProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [color, setColor] = useState("")
    const [company, setCompany] = useState("")
    const [category, setCategory] = useState("")

    const addProduct = async () => {
        let result = await fetch("http://localhost:3000/api/products", 
            {
                method: "POST",
                body: JSON.stringify({ name, price, color, company, category })
            }
        )
        result = await result.json()
        if (result.success) alert("new product added")
    }

    return (
        <div className="product-from-container ">
            <h1>Add Product</h1>
            <input type="text" placeholder="Add Product Name" className="product-input" 
            value={name} onChange={(e) => setName(e.target.value)}
            />
            <input type="text" placeholder="Add Product Price" className="product-input" 
            value={price} onChange={(e) => setPrice(e.target.value)}
            />
            <input type="text" placeholder="Add Product Color" className="product-input" 
            value={color} onChange={(e) => setColor(e.target.value)}
            />
            <input type="text" placeholder="Add Product Company" className="product-input" 
            value={company} onChange={(e) => setCompany(e.target.value)}
            />
            <input type="text" placeholder="Add Product Category" className="product-input" 
            value={category} onChange={(e) => setCategory(e.target.value)}
            />
            <button className="btn" onClick={addProduct}>Add Product</button>
            <br />
            <br />
            <br />
            <br />
            <Link href="/">Go back to Home</Link>
        </div>
    )
}

export default AddProduct