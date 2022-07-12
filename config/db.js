const config = {
  username: "postgres",
  password: null,
  host: "localhost",
  dialect: "postgres",
  port: 5432,
};

module.exports = {
  development: {
    database: "sturdy_disco_dev",
    ...config,
  },
  test: {
    database: "sturdy_disco_test",
    ...config,
  },
};
