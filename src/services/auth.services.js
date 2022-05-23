const { users } = require("../utils/dummyData");
const User = require("../models/user.model");
const db = require("../databases/db");
const customError = require("../utils/customError");
const JWT = require("jsonwebtoken");
require("dotenv").config();

const { ACCESS_TOKEN_SECRET, REFREHS_TOKEN_SECRET } = process.env;

class AuthService {
  async register(data) {
    if (!data.firstname) throw new CustomError(400, "firstname is required");
    if (!data.lastname) throw new CustomError(400, "lastname is required");
    if (!data.othernames) throw new CustomError(400, "othernames is required");
    if (!data.email) throw new CustomError(400, "email is required");
    if (!data.password) throw new CustomError(400, "password is required");
    if (!data.phonenumber)
      throw new CustomError(400, "phonenumber is required");
    if (!data.username) throw new CustomError(400, "username is required");
    if (!data.registered) throw new CustomError(400, "registered is required");
    if (!data.role) throw new CustomError(400, "role is required");

    let user = await db.execute("SELECT * FROM users WHERE username = ?", [
      data.username,
    ]);
    if (user[0].length > 0)
      throw new CustomError(400, "username already exist");

    user = await db.execute("SELECT * FROM users WHERE email = ?", [
      data.email,
    ]);

    if (user[0].length > 0) throw new CustomError(400, "email already exist");

    user = await db.execute(
      "INSERT INTO users (firstName, lastName, othernames, email, password, phonenumber, username, registered, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        data.firstname,
        data.lastname,
        data.othernames,
        data.email,
        data.password,
        data.phonenumber,
        data.username,
        data.registered,
        data.role,
      ]
    );
    const token = JWT.sign(
      { id: user.id, role: user.role },
      ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    return {
      token,
    };
  }

  async login(data) {
    if (!data.email) throw new CustomError(400, "email is required");
    if (!data.password) throw new CustomError(400, "password is required");

    let user = await db.execute("SELECT * FROM users WHERE email = ?", [
      data.email,
    ]);

    console.log("user:::::>", user);

    if (user[0].length === 0)
      throw new CustomError(400, "email does not exist");

    if (user[0][0].password !== data.password)
      throw new CustomError(400, "password is incorrect");

    const isVerifiedPassword = await bcrypt.compare(
      data.password,
      user[0][0].password
    );

    if (!isVerifiedPassword)
      throw new CustomError(400, "password is incorrect");

    const token = JWT.sign(
      { id: user.id, role: user.role },
      ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    return {
      token,
    };
  }
}

module.exports = new AuthService();
