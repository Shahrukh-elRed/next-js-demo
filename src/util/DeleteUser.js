"use client"

const DeleteUser = ({ id }) => {
    const handleDelete = async () => {
        let response = await fetch(`http://localhost:3000/api/users/${id}`,
            {
                method: "DELETE", 
            }
        )
        response = await response.json()
        if (response.success) {
            alert("Deleted successfully")
        }
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete User</button>
        </div>
    )
}

export default DeleteUser