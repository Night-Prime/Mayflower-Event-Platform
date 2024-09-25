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
    const accessToken = req.authInfo.accessToken;
    console.log("Token:", accessToken);
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 60 * 60 * 1000,
    });

    res.redirect(`${process.env.CLIENT_URL}/dashboard`);
  }
);

// Logout route
router.get("/logout", (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });
  res.redirect(process.env.CLIENT_URL);
});

module.exports = router;
