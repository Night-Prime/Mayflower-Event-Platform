const sequelize = require("../config/db").sequelize;
const Event = require("./Event");
const Booking = require("./Booking");
const Package = require("./Package");

// Event-Booking association
Event.hasMany(Booking, { foreignKey: "eventId", as: "bookings" });
Booking.belongsTo(Event, { foreignKey: "eventId", as: "event" });

// Package-Booking association
Package.hasMany(Booking, { foreignKey: "packageId", as: "bookings" });
Booking.belongsTo(Package, { foreignKey: "packageId", as: "package" });

// Export models
module.exports = {
  Event,
  Booking,
  Package,
  sequelize,
};
