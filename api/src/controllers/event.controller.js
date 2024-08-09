const { errorResponse, successResponse } = require("../helper/response");

const { Event } = require("../models");

// handles creating an event
exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, location, isPublic, time } = req.body;

    const newEvent = await Event.create({
      title,
      description,
      date,
      location,
      isPublic,
      time,
    });

    // set a request validator here

    return successResponse(res, {
      data: newEvent,
      statusCode: 201,
      message: "Event was created succesfully.",
    });
  } catch (error) {
    console.log("\n\n\n\n", error);
    return errorResponse(res, {
      statusCode: 500,
      message: "An Error occured while creating an event.",
    });
  }
};

// handles getting all events here
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll({ where: { isDeleted: false } });

    return successResponse(res, {
      data: events,
      statusCode: 200,
      message: "Events fetched sucessfully.",
    });
  } catch (error) {
    return errorResponse(res, {
      statusCode: 500,
      message: error.message,
    });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const { id } = req.body;
    // validate input here
    const event = await Event.findByPk(id);

    if (!event) {
      return res
        .status(404)
        .json({ status: "error", message: "Event not found" });
    }

    return successResponse(res, {
      data: event,
      statusCode: 201,
      message: "Event was grabbed succesfully.",
    });
  } catch (error) {
    return errorResponse(res, {
      statusCode: 500,
      message: error.message,
    });
  }
};

// handles updating a particular event
exports.updateEvent = async (req, res) => {
  try {
    const { id, title, description, date, location, isPublic, images, videos } =
      req.body;
    // set a validator for both params & body here
    const event = await Event.findByPk(id);

    if (!event) {
      return res
        .status(404)
        .json({ status: "error", message: "Event not found" });
    }

    event.title = title || event.title;
    event.description = description || event.description;
    event.date = date || event.date;
    event.location = location || event.location;
    event.isPublic = isPublic !== undefined ? isPublic : event.isPublic;
    event.images = images || event.images;
    event.videos = videos || event.videos;

    await event.save();

    return successResponse(res, {
      data: event,
      statusCode: 201,
      message: "Event was updated succesfully.",
    });
  } catch (error) {
    return errorResponse(res, {
      statusCode: 500,
      message: error.message,
    });
  }
};

// remove event. (soft delete)
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.body;
    // also set a validator here
    const event = await Event.findOne({ where: { id, isDeleted: false } });

    if (!event) {
      return res.status(404).json({
        status: "error",
        message: "Event not found or already deleted",
      });
    }

    // Mark event as deleted
    event.isDeleted = true;
    await event.save();

    return successResponse(res, {
      data: event,
      statusCode: 204,
      message: "Event was deleted succesfully.",
    });
  } catch (error) {
    return errorResponse(res, {
      statusCode: 500,
      message: error.message,
    });
  }
};
