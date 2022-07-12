const server = require("../../server.js");

after(async () => {
  return new Promise((resolve) => {
    server.close(resolve);
  });
});

module.exports = server;
