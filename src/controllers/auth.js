import AuthSignup from '../services/user/auth/signup.js';
import AuthSignin from '../services/user/auth/signin.js';
import ForgotPassword from '../services/user/auth/forgotpassword.js';
import { SuccessResponse, ErrorResponse } from '../utils/responseHandler.js';

const AuthSignupController = async (req, res) => {
    try {
        const response = await AuthSignup(req.body);

        return SuccessResponse(res, response, 'User created successfully');
    } catch (error) {
        if (error.message === 'Email already exists') {
            return ErrorResponse(res, error.message, 409);
        }
        return ErrorResponse(res, error.message);
    }
};

const AuthSigninController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const response = await AuthSignin({email, password});

        return SuccessResponse(res, response, 'User logged in successfully');
    }
    catch (error) {
        if (error.message === "Invalid email or password") {
            return ErrorResponse(res, error.message, 401);
        }
        return ErrorResponse(res, error.message);
    }
}

const ForgotPasswordController = async (req, res) => {
    const { email } = req.body;

    try {
        const response = await ForgotPassword(email);

        return SuccessResponse(res, response, 'Password reset link sent successfully');
    }
    catch (error) {
        if (error.message === "User not found") {
            return ErrorResponse(res, error.message, 404);
        }
        return ErrorResponse(res, error.message);
    }
}

export { 
    AuthSignupController,
    AuthSigninController,
    ForgotPasswordController
 };
