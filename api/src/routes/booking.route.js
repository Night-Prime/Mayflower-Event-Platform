const express = require("express");
const bookingController = require("../controllers/booking.controller");
const {
  createBookingValidation,
  getIdValidation,
  updateBookingValidation,
} = require("../middleware/validator");

const router = express.Router();

router.get("/all", bookingController.getAllBookings);
router.post("/", createBookingValidation, bookingController.createBooking);
router.get("/id", getIdValidation, bookingController.getBookingById);
router.patch("/", updateBookingValidation, bookingController.updateBooking);
router.delete("/", getIdValidation, bookingController.deleteBooking);

module.exports = router;
