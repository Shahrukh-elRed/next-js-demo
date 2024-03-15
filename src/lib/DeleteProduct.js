"use client"
import { useRouter } from "next/navigation"

const DeleteProduct = ({ id }) => {
    const router = useRouter()

    const handleDelete = async () => {
        let result = await fetch(`http://localhost:3000/api/products/${id}`, { method: "DELETE"})
        result = await result.json()
        if (result.success) {
            alert("Product deleted")
            router.refresh()
        } else alert ("Somethign went wrong! please try again")
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteProduct