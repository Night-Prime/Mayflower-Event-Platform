const passport = require("passport");
const { errorResponse } = require("../helper/response");

/**
 * This handles the middleware auth for routes in this service
 */

const isAuth = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return errorResponse(res, {
      statusCode: 401,
      message: "Unauthorized Token!",
    });
  }

  // verify token
  passport.authenticate("bearer", { session: false }, (err, user) => {
    if (err || !user) {
      if (!token) {
        return errorResponse(res, {
          statusCode: 401,
          message: "Unauthorized Access!",
        });
      }
    }

    req.user = user;
    next();
  })(req, res, next);
};

module.exports = isAuth;
