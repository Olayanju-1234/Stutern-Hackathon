import { Router } from 'express';
import {
    AuthSignupController,
    AuthSigninController,
} from '../controllers/auth.js';

const router = Router();

router.post('/signup', AuthSignupController);
router.post('/signin', AuthSigninController);

export default router;
