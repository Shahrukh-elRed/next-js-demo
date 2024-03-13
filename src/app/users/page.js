import Link from "next/link"

const getUsers = async () => {
    let data = await fetch("http://localhost:3000/api/users")
    data = await data.json()
    return data
}

const Users = async () => {
    const users = await getUsers();

    return (
        <div>
            <h1>Users List</h1>
            {
                users.map((user) => 
                    <div key={user.id}>
                        <Link href={`users/${user.id}`}>{user.name}</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Users