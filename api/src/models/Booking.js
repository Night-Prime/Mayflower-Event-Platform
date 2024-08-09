const { DataTypes } = require("sequelize");
const sequelize = require("../config/db").sequelize;

const Booking = sequelize.define(
  "Booking",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    clientPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Events",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    packageId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Packages",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "bookings",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Booking;
