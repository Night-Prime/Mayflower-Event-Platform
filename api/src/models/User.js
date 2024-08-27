const { DataTypes } = require("sequelize");
const sequelize = require("../config/db").sequelize;

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
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
});

module.exports = User;
