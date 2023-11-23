import crypto from "crypto";
import { customAlphabet } from "nanoid";

const digits = "0123456789";
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const GeneratePRT = () => {
  const tokenLength = 16;
  const token = crypto.randomBytes(tokenLength).toString("hex");
  return token;
};

const GenerateToken = (length) => {
  const token = customAlphabet(digits, length)();
  return token;
};

export { GeneratePRT, GenerateToken };
