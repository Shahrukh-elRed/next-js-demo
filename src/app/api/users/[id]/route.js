import { users } from "@/util/db"
import { NextResponse } from "next/server"

export const GET = (request, content) => {
    const userData = users.filter((item) => item.id === Number(content.params.id))
    return NextResponse.json(userData.length === 0 ? 
        { result: "No Data Found", success: false} : { result: userData[0], success: true }
        , { status: 200 })
}