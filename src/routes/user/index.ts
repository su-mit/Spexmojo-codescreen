import { Router } from "express";

import createUser from "./createUser";
import listAllUsers from "./listAllUsers";
import updateUser from "./updateUser";

const router = Router();

// List all users
router.get("/listAllUsers", listAllUsers);

// Create a new user
router.post("/createUser", createUser);

// Update user
router.put("/updateUser", updateUser);

export default router;
