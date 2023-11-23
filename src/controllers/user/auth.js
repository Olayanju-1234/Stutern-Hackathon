import AuthSignup from '../../services/user/auth/signup.js';
import { SuccessResponse, ErrorResponse } from '../../utils/responseHandler.js';

const AuthSignupController = async (req, res) => {
    try {
        const response = await AuthSignup(req.body);

        return SuccessResponse(res, response, 'User created successfully');
    } catch (error) {
        return ErrorResponse(res, error.message);
    }
};

export { AuthSignupController };
