import Link from "next/link";
import { getUsers } from "../../../services/getUsers"

const Users = async () => {
    const users = await getUsers();

    return (
        <div>
            <h1>User List</h1>
            {
                users.map((user) => 
                    <h2 key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </h2>
                )
            }
        </div>
    )
}

export default Users
