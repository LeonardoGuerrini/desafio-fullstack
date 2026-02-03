import { Router } from "express";
import {
  createUserController,
  getUsersController,
  deleteUserController
} from "../../controllers/users.controller.js";

const router = Router();

// POST /users/create
router.post("/create", createUserController);

// GET /users/
router.get("/", getUsersController);

// DELETE /users/delete
router.delete("/:id", deleteUserController);

export default router; 
