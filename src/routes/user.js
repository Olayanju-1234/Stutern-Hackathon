import { Router } from "express";
import { UpdateUserController } from "../controllers/user.js";
import { auth } from "../middlewares/authenticate.js";

const router = Router();

router.post("/update", auth, UpdateUserController);

export default router;