const express = require("express");
const bookingController = require("../controllers/booking.controller");
const {
  createBookingValidation,
  getIdValidation,
  updateBookingValidation,
} = require("../middleware/validator");
const isAuth = require("../middleware/authenticator");

const router = express.Router();

router.get("/all", isAuth, bookingController.getAllBookings);
router.post("/", createBookingValidation, bookingController.createBooking);
router.get("/id", bookingController.getBookingById);
router.patch("/", updateBookingValidation, bookingController.updateBooking);
router.delete("/:id", bookingController.deleteBooking);

module.exports = router;
