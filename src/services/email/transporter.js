import config from "../../config/env.js";
import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: config.EMAIL_HOST,
  secure: false,
  service: "gmail",
  auth: {
    user: config.EMAIL_USERNAME,
    pass: config.EMAIL_PASSWORD,
  },
});

export default transporter;
