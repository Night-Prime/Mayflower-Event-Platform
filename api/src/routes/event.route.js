const express = require("express");
const eventController = require("../controllers/event.controller");

const router = express.Router();

router.post("/", eventController.createEvent);
router.get("/", eventController.getAllEvents);
router.get("/id", eventController.getEventById);
router.patch("/event", eventController.updateEvent);
router.delete("/event", eventController.deleteEvent);

module.exports = router;
