const express = require("express");
const bookingController = require("../controllers/booking.controller");

const router = express.Router();

router.post("/", bookingController.createBooking);
router.get("/all", bookingController.getAllBookings);
router.get("/id", bookingController.getBookingById);
router.patch("/", bookingController.updateBooking);
router.delete("/", bookingController.deleteBooking);

module.exports = router;
