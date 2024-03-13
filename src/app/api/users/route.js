import { users } from "@/util/db"
import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json(users, { status: 200 })
}