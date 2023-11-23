import { Router } from "express";
import { 
    GetUserDetailsController,
    UpdateUserController } from "../controllers/user.js";
import { auth } from "../middlewares/authenticate.js";

const router = Router();

router.get("/", auth, GetUserDetailsController);
router.post("/update", auth, UpdateUserController);

export default router;