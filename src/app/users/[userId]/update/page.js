"use client"
import { useEffect, useState } from "react"

const UpdateUser = ({ params }) => {
    const id = params.userId
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        let response = await fetch(`http://localhost:3000/api/users/${id}`)
        response = await response.json()
        setName(response.result.name)
        setAge(response.result.age)
        setEmail(response.result.email)
    }

    const handleUpdate = async () => {
        let response = await fetch(`http://localhost:3000/api/users/${id}`,
            {
                method: "PUT",
                body: JSON.stringify({ name, email, age }),
            },
        )
        response = await response.json()
        response.success ? alert("user information updated") : alert("please try with valid input")
    }

    return (
        <div>
            <h1>Update User Details</h1>
            <input type="text" placeholder="Enter Name" className="input-field" 
            value={name} onChange={(e) => setName(e.target.value)}
            />
            <input type="text" placeholder="Enter Age" className="input-field" 
            value={age} onChange={(e) => setAge(e.target.value)}
            />
            <input type="text" placeholder="Enter Email" className="input-field" 
            value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleUpdate} className="btn">update User</button>
        </div>
    )
}

export default UpdateUser