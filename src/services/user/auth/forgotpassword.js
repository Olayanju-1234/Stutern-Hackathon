import User from "../../../models/user.js";
import { GeneratePRT } from "../../../utils/token.js";
import config from "../../../config/env.js";
import SendEmail from "../../email/send.js";

const ForgotPassword = async (email) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("User not found");
    }

    const token = GeneratePRT(6);

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;

    await user.save();

    const url = `${config.MONGO_DB_URL}/resetpassword/${token}`;

    SendEmail({
        to: email,
        template: "forgot_password",
        locals: {
          url,
          name: user.firstName,
        },
      });

      return token;
}
export default ForgotPassword;