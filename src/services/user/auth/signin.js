import User from '../../../models/user.js';
import { CheckPassword } from '../../../utils/password.js';
import { SignToken } from './token.js';

const AuthSignin = async (data) => {
    const user = await User.findOne({ email: data.email }).select('+password');

    if (!user || !CheckPassword(data.password, user.password)) {
        throw new Error('Invalid email or password');
    }

    const token = SignToken({
        id: user._id
    });

    const { password, ...rest } = user.toJSON();

    return { ...rest, token, expiresIn: Date.now() + 86400000 };
};

export default AuthSignin;
