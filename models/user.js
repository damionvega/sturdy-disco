const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize.js");

const User = sequelize.define("User", {
  name: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
    field: "created_at",
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: "updated_at",
    allowNull: false,
  },
});

module.exports = User;
