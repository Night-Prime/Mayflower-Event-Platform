const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const { initializeDatabase } = require("./src/config/db");
const models = require("./src/models");
const routeHandler = require("./src/routes");
const passport = require("passport");
const session = require("express-session");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));
app.use(helmet());
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(compression());
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", routeHandler);

app.get("/", async (req, res) => {
  try {
    const result = await models.sequelize.query("SELECT NOW()");
    res.send({
      status: 200,
      message: "Welcome to Mayflower Event Platform Service",
      db_time: result[0],
    });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Mayflower Service running on PORT:${PORT}`);
  });
});
