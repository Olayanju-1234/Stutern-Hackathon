import config from "../config/env.js";
import ErrorResponse from "../utils/responseHandler.js";
const { verify } = require("jsonwebtoken");

const { JWT_SECRET } = config;

// Middleware to authenticate requests with a JWT token
const auth = async (req, res, next) => {
  const token = extractTokenFromRequest(req);

  if (!token) {
    return ErrorResponse(res, "No token provided", 401);
  }

  verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return ErrorResponse(res, "Token expired", 401);
      }
      if (err.name === "JsonWebTokenError") {
        return ErrorResponse(res, "Invalid token", 401);
      }
      return ErrorResponse(res, "Error while authenticating token", 401);
    }
    req.user = decoded; // Attach decoded user information to the request object
    return next();
  });
};

// Function to extract the JWT token from the request headers
function extractTokenFromRequest(req) {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    return authHeader.split(" ")[1];
  }

  return null;
}

// Middleware to check if the user's email is verified
// const isEmailVerified = async (req, res, next) => {
//   const user = req.user;

//   if (!user.isVerified) {
//     return errorResponse(res, 403, "Email not verified", "Forbidden");
//   }

//   return next();
// };

module.exports = { auth, isEmailVerified };
