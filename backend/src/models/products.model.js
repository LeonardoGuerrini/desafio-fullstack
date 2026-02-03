import mongoose from "mongoose";
const { Schema } = mongoose

const productSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    quantidadeEstoque: {
        type: Number,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    }

    
})

const Product = mongoose.models.Product || mongoose.model("Product", productSchema)
export default Product