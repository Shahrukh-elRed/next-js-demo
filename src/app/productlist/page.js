"use client"
import { useEffect, useState } from "react"

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let data = await fetch("https://dummyjson.com/products");
            data = await data.json();
            setProducts(data.products);
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1>Product List fetched using Client Component</h1>
            {
                products.map((item) => 
                    <h3 key={item.id}>Name: {item.title}, Price: {item.price}</h3>
                )
            }
        </div>
    )
}

export default ProductList