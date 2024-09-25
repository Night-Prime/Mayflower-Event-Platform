const passport = require("passport");
const jwt = require("jsonwebtoken");
const BearerStrategy = require("passport-http-bearer").Strategy;
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const User = require("../models/User");
require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: `${process.env.URL}/api/v1/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("Token", accessToken)
      try {
        let user = await User.findOne({ where: { googleId: profile.id } });
        if (!user) {
          user = await User.create({
            googleId: profile.id,
            email: profile.emails[0] ? profile.emails[0].value : null,
            name: profile.displayName || null,
          });
        }
        return done(null, user, { accessToken });
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// For bearer tokens
passport.use(
  new BearerStrategy(async (token, done) => {
    try {
      const decoded = jwt.verify(token, process.env.COOKIE_SECRET);
      const user = await User.findOne({ where: { id: decoded.id } });
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    } catch (err) {
       console.error("Error verifying token:", err);
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
