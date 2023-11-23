import User from "../../../models/user.js";
import { HashPassword } from "../../../utils/password.js";
import { GenerateToken } from "../../../utils/token.js";

const AuthSignup = async (data) => {
  // Check if email exists
  const res = await User.findOne({ email: data.email });

  if (res) {
    throw new Error("Email already exists");
  }

  data.password = HashPassword(data.password);

  const response = await User.create(data);

  const { password, ...rest } = response.toJSON();

  return rest;
};

export default AuthSignup;


