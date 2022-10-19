import { Router } from "express";

import createProduct from "./createProduct";
import updateProduct from "./updateProduct";
import listAllProduct from "./listAllProducts";
import findProductWithId from "./findProduct";

const router = Router();

// List all users
router.get("/listAllProducts", listAllProduct);

router.get("/findProductWithId", findProductWithId);

// Create a new user
router.post("/createProduct", createProduct);

// Update user
router.put("/updateProduct", updateProduct);

export default router;
