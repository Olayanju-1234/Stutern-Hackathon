import config from "../../../config/env.js";
import jwt from "jsonwebtoken";

const { JWT_SECRET } = config;

export const SignToken = (payload) => {
    const accessToken = jwt.sign(payload, JWT_SECRET, {
        expiresIn: "1d",
    });

    const refreshToken = jwt.sign(payload, JWT_SECRET, {
        expiresIn: "7d",
    });

    return { accessToken, refreshToken };
}

