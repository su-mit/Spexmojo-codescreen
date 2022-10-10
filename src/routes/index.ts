import { Router } from "express";
import productRoutes from "./product";
import userRoutes from "./user";

const router = Router();

router.use("/products", productRoutes);
router.use("/user", userRoutes);

export default router;
