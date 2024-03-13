import { users } from "@/util/db"
import { NextResponse } from "next/server"

export const GET = (request, content) => {
    console.log(content.params.id)
    const userData = users.filter((item) => item.id === Number(content.params.id))
    return NextResponse.json(userData.length === 0 ? 
        { result: "No Data Found", success: false} : { result: userData, success: true }
        , { status: 200 })
}