const { Booking, Event, Package } = require("../models");
const { successResponse, errorResponse } = require("../helper/response");
const { UUIDGenerator } = require("../helper");
const { validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { sendMail } = require("../helper/sendMail");

// Create a new booking
exports.createBooking = async (req, res) => {
  // set up validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, {
      statusCode: 400,
      message: "Validation error:",
      errors: errors.array(),
    });
  }

  try {
    const {
      eventTitle,
      eventDescription,
      eventDate,
      eventTime,
      packageId,
      clientName,
      clientEmail,
      clientPhone,
    } = req.body;

    // Check if the package exists
    const pkg = await Package.findByPk(packageId);
    if (!pkg) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Package not found.",
      });
    }

    const event = UUIDGenerator();

    const newBooking = await Booking.create({
      eventId: event,
      eventTitle,
      eventDescription,
      eventDate,
      eventTime,
      packageId,
      clientName,
      clientEmail,
      clientPhone,
    });

    // send mail
    await sendMail(clientEmail, eventTitle, eventDate, eventTime);

    return successResponse(res, {
      data: newBooking,
      statusCode: 201,
      message: "Booking created successfully.",
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred while creating the booking.",
    });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: [{ model: Package, as: "packages" }],
    });

    return successResponse(res, {
      data: bookings,
      statusCode: 200,
      message: "Bookings retrieved successfully.",
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred while fetching bookings.",
    });
  }
};

// Get a single booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByPk(id, {
      include: [{ model: Package, as: "packages" }],
    });

    if (!booking) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Booking not found.",
      });
    }

    return successResponse(res, {
      data: booking,
      statusCode: 200,
      message: "Booking retrieved successfully.",
    });
  } catch (error) {
    console.error("Error fetching booking:", error);
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred while fetching the booking.",
    });
  }
};

// Update a booking
exports.updateBooking = async (req, res) => {
  // set up validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, {
      statusCode: 400,
      message: "Validation error:",
      errors: errors.array(),
    });
  }

  try {
    const {
      id,
      packageId,
      clientName,
      clientEmail,
      clientPhone,
      eventDate,
      eventTitle,
      eventDescription,
      eventTime,
    } = req.body;

    // Find the booking by ID
    const booking = await Booking.findByPk(id);
    if (!booking) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Booking not found.",
      });
    }

    // Update event fields if provided
    if (eventTitle) {
      booking.eventTitle = eventTitle;
    }
    if (eventDescription) {
      booking.eventDescription = eventDescription;
    }
    if (eventDate) {
      booking.eventDate = eventDate;
    }
    if (eventTime) {
      booking.eventTime = eventTime;
    }

    // Update package if provided
    if (packageId) {
      const pkg = await Package.findByPk(packageId);
      if (!pkg) {
        return errorResponse(res, {
          statusCode: 404,
          message: "Package not found.",
        });
      }
      booking.packageId = packageId;
    }

    // Update client fields
    booking.clientName = clientName || booking.clientName;
    booking.clientEmail = clientEmail || booking.clientEmail;
    booking.clientPhone = clientPhone || booking.clientPhone;

    // Save updated booking
    await booking.save();

    return successResponse(res, {
      data: booking,
      statusCode: 200,
      message: "Booking updated successfully.",
    });
  } catch (error) {
    console.error("Error updating booking:", error);
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred while updating the booking.",
    });
  }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findByPk(id);
    if (!booking) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Booking not found.",
      });
    }

    await booking.destroy();

    return successResponse(res, {
      statusCode: 204,
      message: "Booking deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting booking:", error);
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred while deleting the booking.",
    });
  }
};
