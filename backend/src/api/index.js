import express from "express";

// Routers filhos
import loginRoutes from "./auth/login/route.js";
import registerRoutes from "./auth/register/route.js";
import logoutRoutes from "./auth/logout/route.js";
import usersRoutes from "./users/route.js";
import productsRoutes from "./products/route.js";

const router = express.Router();

// Auth
router.use("/auth/login", loginRoutes);      // /api/auth/login
router.use("/auth/register", registerRoutes);// /api/auth/register
router.use("/auth/logout", logoutRoutes);    // /api/auth/logout

// Outros recursos
router.use("/users", usersRoutes);           // /api/users
router.use("/products", productsRoutes);     // /api/products

export default router;
