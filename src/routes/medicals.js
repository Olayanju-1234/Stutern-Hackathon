import { Router } from "express";
import { 
    ScheduleMedicineController,
    UpdateMedicDetailsController } from "../controllers/medicals.js";
import { auth } from "../middlewares/authenticate.js";

const router = Router();

router.post("/schedule", auth, ScheduleMedicineController);
router.post("/add", auth, UpdateMedicDetailsController);

export default router;

