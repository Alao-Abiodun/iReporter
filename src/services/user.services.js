const { users } = require("../utils/dummyData");
const User = require("../models/user.model");
const db = require("../databases/db");
const customError = require("../utils/customError");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { ACCESS_TOKEN_SECRET, REFREHS_TOKEN_SECRET } = process.env;

class UserService {
  async fetchUsers() {
    const users = await db.execute("SELECT * FROM users");
    return users;
  }
}

module.exports = UserService;
