const app = require("express")();
const { expect } = require("chai");

async function createInstances() {
  try {
    const User = require("./models/user.js");

    const BlogPost = require("./models/blogPost.js");
    await BlogPost.sync({
      force: true,
      logging: (log) => console.log("\nsync log", log),
    });

    await User.create({ name: "Lewis Hamilton" });
    const blogPost = await BlogPost.create({ name: "Hello" });
    expect(blogPost.slug).to.equal(`${blogPost.name}-${blogPost.id}`);
    await BlogPost.sync({
      force: true,
      logging: (log) => console.log("\nsync log", log),
    });
  } catch (error) {
    throw error;
  }
}

const port = 8881;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  createInstances();
});

module.exports = server;
