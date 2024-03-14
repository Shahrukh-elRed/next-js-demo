import { users } from "@/util/db"
import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json(users, { status: 200 })
}

export const POST = async (request) => {
    let payload = await request.json()
    console.log(payload)
    if (!payload.name || !payload.age || !payload.email) {
        return NextResponse.json({ result: "Required field not found", success: false }, { status: 400 })
    }
    return NextResponse.json({ result: "New user created", success: true }, { status: 201 })
}