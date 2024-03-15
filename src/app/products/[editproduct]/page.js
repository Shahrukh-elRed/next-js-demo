"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

const UpdateProduct = ({ params }) => {
    const router = useRouter()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [color, setColor] = useState("")
    const [company, setCompany] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        let data = await fetch(`http://localhost:3000/api/products/${params.editproduct}`)
        data = await data.json()
        if (data.success) {
            setName(data.result.name)
            setPrice(data.result.price)
            setColor(data.result.color)
            setCompany(data.result.company)
            setCategory(data.result.category)
        }
    }

    const updateProduct = async () => {
        let data = await fetch(`http://localhost:3000/api/products/${params.editproduct}`, 
            {
                method: "PUT",
                body: JSON.stringify({ name, price, color, company, category })
            }
        )
        data = await data.json()
        if (data.success) {
            alert("Product has been updated")
            router.push("/products")
        } else alert("Something went wrong! please try again")
    }

    return (
        <div className="product-from-container ">
            <h1>Update Product</h1>
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
            <button className="btn" onClick={updateProduct}>Update Product</button>
            <br />
            <br />
            <br />
            <br />
            <Link href="/">Go back to Home</Link>
        </div>
    )
}

export default UpdateProduct