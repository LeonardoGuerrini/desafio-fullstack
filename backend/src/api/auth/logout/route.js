import { Router } from "express";
import { logout } from "../../../controllers/auth.controller.js";

const router = Router();

// rota POST /auth/logout
router.post("/", logout);

export default router;
