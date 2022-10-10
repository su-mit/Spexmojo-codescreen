import { Router } from "express";

import createProduct from "./createProduct";
import updateProduct from "./updateProduct";
import listAllProduct from "./listAllProducts";

const router = Router();

// List all users
router.get("/listAllProducts", listAllProduct);

// Create a new user
router.post("/createProduct", createProduct);

// Update user
router.put("/updateProduct", updateProduct);

export default router;
