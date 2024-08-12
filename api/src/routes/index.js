const express = require("express");
const eventRouter = require("./event.route");
const packageRouter = require("./package.route");
const bookingRouter = require("./booking.route");

const router = express.Router();

router.use("/events", eventRouter);
router.use("/package", packageRouter);
router.use("/booking", bookingRouter);

module.exports = router;
