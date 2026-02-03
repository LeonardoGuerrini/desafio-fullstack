import { Router } from "express";
import {
  createProductController,
  getProductsController,
  deleteProductController
} from "../../controllers/products.controller.js";

const router = Router();

// POST /products/create
router.post("/create", createProductController);

// GET /products/
router.get("/", getProductsController);

// DELETE /products/delete
router.delete("/:id", deleteProductController);

export default router;
