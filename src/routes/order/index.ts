import { Router } from "express";

import createOrder from "./createOrder";
import listAllOrder from "./listAllOrder";

const router = Router();

router.post("/createOrder", createOrder);
router.get("/listAllOrder", listAllOrder);

export default router;
