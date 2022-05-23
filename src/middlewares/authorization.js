require("dotenv").config();
const jwt = require("jsonwebtoken");
const role = require("./role"); // role.USER

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;
const customError = require("../utils/customError");

function authorize(roles = []) {
  roles = roles.length > 0 ? roles : role.USER;

  return async (req, res, next) => {
    const accessToken = req.header("Authorization");
    if (!accessToken) {
      return next(new customError(401, "Access denied. No token provided."));
    }
    try {
      const decoded = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);

      const user = await db.execute("SELECT * FROM users WHERE id = ?", [
        decoded.id,
      ]);

      if (!user) {
        return next(
          new customError(401, "unauthorized access: User does not exist")
        );
      }

      if (!user.registered) {
        return next(
          new customError(
            401,
            "unauthorized access: User is registered but yet to verify"
          )
        );
      }

      if (!roles.includes(user[0].role)) {
        return next(
          new customError(401, "unauthorized access: User is not authorized")
        );
      }

      req.$user = user;

      next();
    } catch (error) {
      return next(new customError(401, "Invalid token."));
    }
  };
}

module.exports = authorize;
