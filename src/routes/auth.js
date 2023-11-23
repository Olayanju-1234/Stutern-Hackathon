import { Router } from "express";
import { AuthSignupController } from "../controllers/user/auth.js";

const router = Router();

router.post("/signup", AuthSignupController);

export default router;