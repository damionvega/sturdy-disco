const { expect } = require("chai");
const Test = require("./config/test.utils.js");

describe("Models", () => {
  before(Test.resetDb);

  describe("create instances", () => {
    it("should create a user", async () => {
      const name = "Lemmy Kilmister";
      const user = await Test.User.create({ name });
      expect(user.name).to.equal(name);
      return Promise.resolve();
    });

    it("should create a blog post and read `slug` virtual property", async () => {
      const name = "Day One";
      const blogPost = await Test.BlogPost.create({ name });
      expect(blogPost.name).to.equal(name);
      expect(blogPost.slug).to.equal(`${blogPost.name}-${blogPost.id}`);
      return Promise.resolve();
    });
  });
});
