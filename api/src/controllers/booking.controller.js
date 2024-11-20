const { Booking, Event, Package } = require("../models");
const { successResponse, errorResponse } = require("../helper/response");
const { UUIDGenerator } = require("../helper");
const { validationResult } = require("express-validator");
const { sendMail } = require("../helper/sendMail");
const { createEvent } = require("../helper/createEvent");

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
      hotelbooking,
      specialRequest,
      extraInfo,
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
      hotelbooking,
      specialRequest,
      extraInfo,
    });

    console.log("newly created: ", newBooking);

    // send mail
    await sendMail(clientEmail, eventTitle, eventDate, eventTime);

    return successResponse(res, {
      data: newBooking,
      statusCode: 201,
      message: "Booking created successfully.",
    });
  } catch (error) {
    console.error("Error occurred: ", error);
    console.error("Create Booking Error: ", error);
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
      where: { scheduled: false },
      include: [{ model: Package, as: "packages" }],
    });

    return successResponse(res, {
      data: bookings,
      statusCode: 200,
      message: "Bookings retrieved successfully.",
    });
  } catch (error) {
    console.error("Get Booking Error: ", error);
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
    console.error("Get BookingID Error: ", error);
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
    console.error("Updating Booking Error: ", error);
    console.error("Error updating booking:", error);
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred while updating the booking.",
    });
  }
};

// schedule event
exports.createEvents = async (req, res) => {
  try {
    const { id, scheduled } = req.body;
    console.log("Request: ", req.body);

    // Find the booking by ID
    const booking = await Booking.findByPk(id);
    if (!booking) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Booking not found.",
      });
    }

    const message =
      scheduled === true
        ? "Event Scheduled successfully."
        : "Event Not Scheduled successfully.";

    if (scheduled === true) {
      console.log("Booking details: ", booking);
      // Trigger the createEvent function
      await createEvent(booking);
      booking.scheduled = scheduled;
      await booking.save();

      return successResponse(res, {
        data: booking,
        statusCode: 201,
        message,
      });
    } else {
      await booking.destroy();
      return errorResponse(res, {
        statusCode: 201,
        message: "Event Not Scheduled successfully.",
      });
    }
  } catch (error) {
    console.error("Error create booking events:", error);
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred while scheduling event for this booking",
    });
  }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
  console.log("Triggered!");
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
    console.error("Deleting Booking Error: ", error);
    console.error("Error deleting booking:", error);
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred while deleting the booking.",
    });
  }
};
