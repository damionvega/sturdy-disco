const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize.js");

const BlogPost = sequelize.define("BlogPost", {
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
  slug: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${this.name}-${this.id}`;
    },
  },
});

module.exports = BlogPost;
