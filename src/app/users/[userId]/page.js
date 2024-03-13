const getUsers = async (id) => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`)
    data = await data.json()
    return data.result
}

const User = async ({ params }) => {
    const user = await getUsers(params.userId)

    return (
        <div>
            <h1>User Detail</h1>
            <h4>Name: {user.name}</h4>
            <h4>Age: {user.age}</h4>
            <h4>Email: {user.email}</h4>
            <h4>User Id: {user.id}</h4>
        </div>
    )
}

export default User