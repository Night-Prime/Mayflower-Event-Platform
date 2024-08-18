const sequelize = require("../config/db").sequelize;
const Booking = require("./Booking");
const Package = require("./Package");
const User = require("./User");

Package.hasMany(Booking, { foreignKey: "packageId", as: "bookings" });
Booking.belongsTo(Package, { foreignKey: "packageId", as: "packages" });

User.hasMany(Package, { foreignKey: "id", as: "packages" });

module.exports = {
  Event,
  Booking,
  Package,
  User,
  sequelize,
};
