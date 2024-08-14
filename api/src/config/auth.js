const passport = require("passport");
const { Strategy, GoogleStrategy } = require("passport-google-oauth20");
const { pool } = require("./db");
const User = require("../models/User");
require("dotenv").config();

/**
 * @description Setting up the Google OAuth system
 */

passport.use(
  new GoogleStrategy(),
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log(accessToken, refreshToken, profile);
    try {
      let user = await User.findOne({ where: { googleId: profile.id } });

      if (!user) {
        user = await User.create({
          googleId: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName,
        });
      }
      return done(null, user);
    } catch (error) {
      return done(err, null);
    }
  }
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
