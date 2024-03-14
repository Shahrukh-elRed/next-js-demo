import { users } from "@/util/db"
import { NextResponse } from "next/server"

export const GET = (request, content) => {
    const userData = users.filter((item) => item.id === Number(content.params.id))
    return NextResponse.json(userData.length === 0 ? 
        { result: "No Data Found", success: false} : { result: userData[0], success: true }
        , { status: 200 })
}

export const PUT = async (request, content) => {
    let payload = await request.json()
    payload.id = content.params.id
    
    if (!payload.name || !payload.age || !payload.email) {
        return NextResponse.json({ result: "Request data is not valid", success: false }, { status: 400 })
    }
    return NextResponse.json({ result: payload, success: true }, { status: 200 })
}

export const DELETE = (request, content) => {
    let id = content.params.id
    if (id) {
        return NextResponse.json({ result: "User deleted successfully", success: true }, { status: 200 })
    } else {
        return NextResponse.json({ result: "Error! something went wrong", success: false }, { status: 400 })
    }
}