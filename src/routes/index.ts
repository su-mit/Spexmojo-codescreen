import { Router } from "express";
import productRoutes from "./product";
import userRoutes from "./user";
import orderRouter from "./order";

const router = Router();

router.use("/product", productRoutes);
router.use("/user", userRoutes);
router.use("/order", orderRouter);

export default router;
