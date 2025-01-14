import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    description: {
        type: String,

    },
    price: {
        type: Number,

    },
    quantity: {
        type: Number,

    },
    category: {
        type: mongoose.ObjectId,
        ref: "category",

    },
    photo: {
        data: Buffer,
        contentType: String,

    },
    shipping: {
        type: Boolean,
    }

}, { timestamps: true })

export default mongoose.model("products", productSchema)