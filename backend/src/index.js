import express from "express";
import cors from "cors";
import apiRoutes from "./api/index.js";
import connectMongoDB from "./database/mongodb.js";


const app = express();
const PORT = 8000;

app.use(cors({ 
    origin: "http://localhost:3000",
    credentials: true
 })); // porta do frontend

connectMongoDB();

// middleware obrigatório para interpretar JSON do body
app.use(express.json());  
app.use("/api", apiRoutes);

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
