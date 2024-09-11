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
router.post(
  "/",
  isAuth,
  createBookingValidation,
  bookingController.createBooking
);
router.get("/:id", isAuth, bookingController.getBookingById);
router.put("/event", bookingController.createEvents);
router.patch(
  "/",
  isAuth,
  updateBookingValidation,
  bookingController.updateBooking
);
router.delete("/:id", isAuth, bookingController.deleteBooking);

module.exports = router;
