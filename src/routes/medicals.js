import { Router } from 'express';
import {
    ScheduleMedicineController,
    UpdateMedicDetailsController,
    CreateReminderController,
    GetAllUserMedicinesController
} from '../controllers/medicals.js';
import { auth } from '../middlewares/authenticate.js';

const router = Router();

router.post('/schedule', auth, ScheduleMedicineController);
router.post('/add', auth, UpdateMedicDetailsController);
router.post('/reminder/:medicineId', auth, CreateReminderController);
router.get('/medicines', auth, GetAllUserMedicinesController);

export default router;
