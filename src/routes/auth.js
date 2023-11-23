import { Router } from 'express';
import {
    AuthSignupController,
    AuthSigninController,
    ForgotPasswordController
} from '../controllers/auth.js';

const router = Router();

router.post('/signup', AuthSignupController);
router.post('/signin', AuthSigninController);
router.post('/forgotpassword', ForgotPasswordController);

export default router;
