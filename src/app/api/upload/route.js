import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"

export const POST = async (request) => {
    const data = await request.formData()
    const file = data.get("file")
    if (!file) {
        return NextResponse.json({ "message": "No image found", success: false })
    }
    const byteData = await file.arrayBuffer()
    const buffer = Buffer.from(byteData)
    const path = `./public/${file.name}`
    await writeFile(path, buffer)
    return NextResponse.json({ "message": "File uploaded", success: true })
}
