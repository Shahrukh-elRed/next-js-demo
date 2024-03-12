"use client"
import { useState } from "react"

const User = () => {
    const [h3Style, setH3Style] = useState({ backgroundColor: "green", color: "#fff", padding: "10px", borderRadius: "8px" })
  return (
    <div>
        <h1 style={{ backgroundColor: "grey", color: "#fff", padding: "10px", borderRadius: "8px" }}>
            User Page
        </h1>
        <h2>Heading 2 in User page</h2>
        <h3 style={h3Style}>Heading 3 for User</h3>
        <button onClick={() => setH3Style({ backgroundColor: "red", color: "#fff", padding: "10px", borderRadius: "8px" })}>
            Update Style
        </button>
    </div>
  )
}

export default User