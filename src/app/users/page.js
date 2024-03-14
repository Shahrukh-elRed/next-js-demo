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
                    <div key={user.id} className="user-item">
                        <span>
                            <Link href={`users/${user.id}`}>{user.name}</Link>
                        </span>
                        <span>
                            <Link href={`users/${user.id}/update`}>Edit</Link>
                        </span>
                    </div>
                )
            }
            <br />
            <br />
            <Link href="/adduser">Go to Add User Page</Link>
        </div>
    )
}

export default Users