const AuthService = require("../services/auth.services");
const responseHandler = require("../utils/responseHandlers");
const errorHandler = require("../utils/errorHandlers");
const customError = require("../utils/customError");

class AuthController {
  async register(req, res) {
    const result = await AuthService.register(req.body);
    return responseHandler(res, 201, "User successfully created", result);
  }

  async login(req, res) {
    const result = await AuthService.login(req.body);
    return responseHandler(res, 200, "User login successfully", result);
  }
}

module.exports = new AuthController();
