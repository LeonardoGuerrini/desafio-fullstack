import { Router } from "express";
import { login } from "../../../controllers/auth.controller.js";

const router = Router();

router.post("/", login); // caminho final: /api/auth/login
export default router;
