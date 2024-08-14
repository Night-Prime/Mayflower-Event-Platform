const { DataTypes } = require("sequelize");
const sequelize = require("../config/db").sequelize;

const User = sequelize.define(
  "User",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = User;
