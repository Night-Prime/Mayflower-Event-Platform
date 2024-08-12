const { Booking, Event, Package } = require("../models");
const { successResponse, errorResponse } = require("../helper/response");

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const {
      eventId,
      packageId,
      clientName,
      clientEmail,
      clientPhone,
      eventDate,
    } = req.body;

    // Check if the event exists
    const event = await Event.findByPk(eventId);
    if (!event) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Event not found.",
      });
    }

    // Check if the package exists
    const pkg = await Package.findByPk(packageId);
    if (!pkg) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Package not found.",
      });
    }

    const newBooking = await Booking.create({
      eventId,
      packageId,
      clientName,
      clientEmail,
      clientPhone,
      eventDate,
    });

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
      include: [
        { model: Event, as: "event" },
        { model: Package, as: "package" },
      ],
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
    const { id } = req.body;
    const booking = await Booking.findByPk(id, {
      include: [
        { model: Event, as: "event" },
        { model: Package, as: "package" },
      ],
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
  try {
    const {
      id,
      eventId,
      packageId,
      clientName,
      clientEmail,
      clientPhone,
      eventDate,
    } = req.body;

    const booking = await Booking.findByPk(id);
    if (!booking) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Booking not found.",
      });
    }

    if (eventId) {
      const event = await Event.findByPk(eventId);
      if (!event) {
        return errorResponse(res, {
          statusCode: 404,
          message: "Event not found.",
        });
      }
      booking.eventId = eventId;
    }

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

    booking.clientName = clientName || booking.clientName;
    booking.clientEmail = clientEmail || booking.clientEmail;
    booking.clientPhone = clientPhone || booking.clientPhone;
    booking.eventDate = eventDate || booking.eventDate;

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
    const { id } = req.body;

    const booking = await Booking.findByPk(id);
    if (!booking) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Booking not found.",
      });
    }

    await booking.destroy();

    return successResponse(res, {
      data: booking,
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
