import { Router } from "express";
import { UpdateMedicDetailsController } from "../controllers/medicals.js";
import { auth } from "../middlewares/authenticate.js";

const router = Router();

router.post("/add", auth, UpdateMedicDetailsController);

export default router;

