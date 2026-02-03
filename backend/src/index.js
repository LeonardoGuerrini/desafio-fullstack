import "dotenv/config"

import express from "express";
import cors from "cors";
import apiRoutes from "./api/index.js";
import connectMongoDB from "./database/mongodb.js";


const app = express();
const PORT = 8000;

app.use(cors({ 
    origin: "http://localhost:3000",
    credentials: true // permite envio de cookies
})); // porta do frontend

connectMongoDB();

app.use(express.json());  
app.use("/api", apiRoutes);

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));