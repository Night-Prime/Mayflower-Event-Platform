const express = require("express");
const passport = require("../config/auth");

const router = express.Router();

/**
 * Google OAuth Routes - handles the authentitcation & authorization
 */

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/admin`,
  }),
  (req, res) => {
    console.log("Result: ", req.authInfo.accessToken);
    res.redirect(
      `${process.env.CLIENT_REDIRECT_URL}?token=${req.authInfo.accessToken}`
    );
  }
);

// Logout route
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect(process.env.CLIENT_URL);
  });
});

module.exports = router;
