const sequelize = require("../config/db").sequelize;
const Booking = require("./Booking");
const Package = require("./Package");
const User = require("./User");

// Associations
User.hasMany(Package, { foreignKey: 'userId', as: 'packages' });
Package.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Correctly define relationships for other models
Package.hasMany(Booking, { foreignKey: 'packageId', as: 'bookings' });
Booking.belongsTo(Package, { foreignKey: 'packageId', as: 'packages' });


module.exports = {
  Event,
  Booking,
  Package,
  User,
  sequelize,
};
