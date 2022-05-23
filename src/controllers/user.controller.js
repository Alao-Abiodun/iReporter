const UserService = require("../services/user.services");
const responseHandler = require("../utils/responseHandlers");
const errorHandler = require("../utils/errorHandlers");
const customError = require("../utils/customError");

class UserController {
  async fetchUsers(req, res) {
    const result = await UserService.fetchUsers();
    return responseHandler(res, 200, "Users successfully fetched", result);
  }
}

module.exports = new UserController();
