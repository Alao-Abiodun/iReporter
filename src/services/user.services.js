const { users } = require("../utils/dummyData");
const User = require("../models/user.model");
const db = require("../databases/db");
const customError = require("../utils/customError");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { ACCESS_TOKEN_SECRET, REFREHS_TOKEN_SECRET } = process.env;

// console.log(users);

const userServices = {
  async fetchUsers(req, res) {
    const users = await db.execute("SELECT * FROM users");
    const validUsers = await users[0].map((user) => user);
    return validUsers;
  },

  async signUp(user) {
    let userDetails = {
      firstname: user.firstname,
      lastname: user.lastname,
      othernames: user.othernames,
      email: user.email,
      phonenumber: user.phonenumber,
      username: user.username,
      registered: user.registered,
      isAdmin: user.isAdmin,
    };
    try {
      const newUser = await db.execute(
        "INSERT INTO users (firstName, lastName, othernames, email, phonenumber, username, registered, isAdmin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          userDetails.firstname,
          userDetails.lastname,
          userDetails.othernames,
          userDetails.email,
          userDetails.phonenumber,
          userDetails.username,
          userDetails.registered,
          userDetails.isAdmin,
        ]
      );
      return newUser;
    } catch (error) {
      console.log(error);
      return new customError(500, "Server Error");
    }
  },

  async login(email) {
    try {
      const users = await db.execute("SELECT * FROM users");
      const foundUser = users[0].find((user) => user.email == email);
      if (!foundUser) {
        return new customError(401, "user not found!");
      }
      const accessToken = jwt.sign(foundUser.email, ACCESS_TOKEN_SECRET);
      return { foundUser, token: accessToken } || {};
    } catch (error) {
      console.log(error);
      return new customError(500, "Server Error");
    }
  },
};

module.exports = userServices;
