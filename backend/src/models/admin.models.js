import mongoose from "mongoose";
const { Schema } = mongoose

const adminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Usa o model já existente se tiver, ou cria um novo se não tiver
const Admin = mongoose.models.Admin|| mongoose.model("Admin", adminSchema)
export default Admin