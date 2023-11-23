import AuthSignup from '../services/user/auth/signup.js';
import AuthSignin from '../services/user/auth/signin.js';
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

export { 
    AuthSignupController,
    AuthSigninController,
 };
