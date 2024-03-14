import mongoose from "mongoose"
import { NextResponse } from "next/server"
import { connectionString } from "@/lib/db"
import { Product } from "@/lib/model/product"

export const GET = async () => {
    let data = []
    try {
        await mongoose.connect(connectionString)
        data = await Product.find()
    } catch (error) {
        data = { success: false }
    }

    return NextResponse.json({ result: data })
}

export const POST = async (request) => {
    const payload = await request.json()
    await mongoose.connect(connectionString)
    let product = new Product(payload)
    const result = await product.save()
    return NextResponse.json({ result, success: true })
}
