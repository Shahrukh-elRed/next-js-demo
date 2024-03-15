import DeleteProduct from "@/lib/DeleteProduct"
import Link from "next/link"

const fetchProducts = async () => {
    let data = await fetch("http://localhost:3000/api/products", { cache: "no-cache" })
    data = await data.json()
    return data.success ? data.result : { success: false } 
}

const Products = async () => {
    const products = await fetchProducts()

    return (
        <div>
            <h1>Products List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Company</td>
                        <td>Category</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => 
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.color}</td>
                                <td>{product.company}</td>
                                <td>{product.category}</td>
                                <td><Link href={`products/${product._id}`}>Edit</Link></td>
                                <td><DeleteProduct id={product._id} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <br />
            <br />
            <br />
            <br />
            <Link href="/">Go back to Home</Link>
        </div>
    )
}

export default Products