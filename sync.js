const sequelize = require("./config/sequelize.js");
const BlogPost = require("./models/blogPost.js");

(async function () {
  try {
    const models = {};
    const modelName = "BlogPost";
    models[modelName] = sequelize.models[modelName];

    await models[modelName].sync({
      force: true,
      logging: (log) => console.log("\nsync log", log),
    });

    await sequelize.models.BlogPost.sync({
      force: true,
      logging: (log) => console.log("\nsync log", log),
    });

    await BlogPost.sync({
      force: true,
      logging: (log) => console.log("\nsync log", log),
    });

    await sequelize.sync({
      force: true,
      logging: (log) => console.log("\nsync log", log),
    });
  } catch (error) {
    throw error;
  }

  process.exit(0);
})();
