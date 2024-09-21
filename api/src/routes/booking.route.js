const express = require("express");
const {
  getAllBookings,
  getBookingById,
  createBooking,
  createEvents,
  updateBooking,
  deleteBooking,
} = require("../controllers/booking.controller");
const {
  createBookingValidation,
  getIdValidation,
  updateBookingValidation,
} = require("../middleware/validator");
const isAuth = require("../middleware/authenticator");

const router = express.Router();

router.get("/all", isAuth, getAllBookings);
router.post("/", createBookingValidation, createBooking);
router.get("/:id", isAuth, getBookingById);
router.put("/event", createEvents);
router.patch("/", isAuth, updateBookingValidation, updateBooking);
router.delete("/:id", isAuth, deleteBooking);

module.exports = router;
