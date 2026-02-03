import mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    sobrenome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    celular: {
        type: Number,
        required: true,
        unique: true
    }

    
})

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User