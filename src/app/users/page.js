const userList = async () => {
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;
}

const Users = async () => {
    let users = await userList();

    return (
        <div>
            <h1>User Name List</h1>
            {
                users.map((item) => 
                    <div key={item.id}>
                        <h2>User Name : {item.firstName}</h2>
                    </div>
                )
            }
        </div>
    )
}

export default Users