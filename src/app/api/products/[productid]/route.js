import { connectionString } from "@/lib/db"
import { Product } from "@/lib/model/product"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const PUT = async (request, content) => {
    const { productid } = content.params
    const filter = { _id: productid }
    const payload = await request.json()
    await mongoose.connect(connectionString)
    const result = await Product.findOneAndUpdate(filter, payload)
    return NextResponse.json({ result, success: true })
}