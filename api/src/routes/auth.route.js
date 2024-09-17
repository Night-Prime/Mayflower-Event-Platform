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

    // Set the access token in an HttpOnly cookie
    res.cookie("accessToken", accessToken, {
      httpOnly: true, // Prevent JavaScript access (mitigates XSS attacks)
      secure: process.env.NODE_ENV === "production", // Only send over HTTPS in production
      sameSite: "Strict", // Prevent CSRF (Cross-Site Request Forgery)
      maxAge: 60 * 60 * 1000, // 1 hour expiration
    });

    // Redirect the user to the frontend, no need to pass the token in the URL
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
