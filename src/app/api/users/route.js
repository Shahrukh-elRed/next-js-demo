import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json(
        {
            name: "Anil",
            age: 28,
            city: "Noida",
        },
        {
            status: 200
        }
    )
}