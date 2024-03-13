import { getUsers } from "../../../../services/getUsers";

const Page = async ({ params }) => {
    const users = await getUsers();
    const currentUser = users[params.userId - 1]

    return (
        <div>
            <h1>User detail page</h1>
            <h4>Id: {currentUser.id}</h4>
            <h4>Name: {currentUser.name}</h4>
            <h4>Website: {currentUser.website}</h4>
        </div>
    )
}

export default Page

export async function generateStaticParams() {
    const users = await getUsers();
    return users.map((user) => ({
        userId: user.id.toString()
    }))
}