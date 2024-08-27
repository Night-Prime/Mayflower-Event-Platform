const express = require("express");
const packageRouter = require("./package.route");
const bookingRouter = require("./booking.route");
const authRouter = require("./auth.route");

const router = express.Router();

router.use("/package", packageRouter);
router.use("/booking", bookingRouter);
router.use("/auth", authRouter);

module.exports = router;
