import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI; 

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "user_db_access", 
    });
    console.log("Conectado ao MongoDB.");
  } catch (error) {
    console.log("Erro ao conectar com o MongoDB:", error);
  }
};

export default connectMongoDB;