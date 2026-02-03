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

// Usa o model já existente se tiver, ou cria um novo se não tiver
const Product = mongoose.models.Product || mongoose.model("Product", productSchema)
export default Product