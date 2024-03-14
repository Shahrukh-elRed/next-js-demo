"use client"
import { useState } from "react"

const AddUser = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = async () => {
        let response = await fetch("http://localhost:3000/api/users", 
            { 
                method: "POST",      
                body: JSON.stringify({ name, age, email }) 
            }
        )
        response = await response.json()
        response.success ? alert("added user successfully") : alert("something wrong with data, please check")
    }

    return (
        <div className="add-user">
            <h1>Add New User</h1>
            <input type="text" placeholder="Enter Name" className="input-field" 
            value={name} onChange={(e) => setName(e.target.value)}
            />
            <input type="text" placeholder="Enter Age" className="input-field" 
            value={age} onChange={(e) => setAge(e.target.value)}
            />
            <input type="text" placeholder="Enter Email" className="input-field" 
            value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit} className="btn">Add User</button>
        </div>
    )
}

export default AddUser