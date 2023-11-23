import config from "../config/env.js";
import crypto from "crypto";

const { SALT_LENGTH, SALT_TOKEN } = config;

const md5 = (password) => {
  return crypto.createHash("md5").update(password).digest("hex");
};

const generateSalt = (length) => {
  var set = SALT_TOKEN,
    setLen = set.length,
    salt = "";
  for (var i = 0; i < length; i++) {
    var p = Math.floor(Math.random() * setLen);
    salt += set[p];
  }
  return salt;
};

const HashPassword = (password) => {
  var salt = generateSalt(SALT_LENGTH);
  var hash = md5(password + salt);
  return salt + hash;
};

const CheckPassword = (password, hashedPassword) => {
  var salt = hashedPassword.substring(0, SALT_LENGTH);
  var validHash = salt + md5(password + salt);
  return hashedPassword === validHash;
};

export { HashPassword, CheckPassword };