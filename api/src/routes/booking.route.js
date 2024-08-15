const express = require("express");
const bookingController = require("../controllers/booking.controller");
const {
  createBookingValidation,
  getIdValidation,
  updateBookingValidation,
} = require("../middleware/validator");

const router = express.Router();

router.get("/all", bookingController.getAllBookings);
router.post("/:id", createBookingValidation, bookingController.createBooking);
router.get("/id", bookingController.getBookingById);
router.patch("/", updateBookingValidation, bookingController.updateBooking);
router.delete("/:id", bookingController.deleteBooking);

module.exports = router;
