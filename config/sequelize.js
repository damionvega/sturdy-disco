const Sequelize = require("sequelize");
const { database, username, password, host, port } =
  require("./db.js")[process.env.NODE_ENV || "development"];

const sequelize = new Sequelize(database, username, password, {
  dialect: "postgres",
  host,
  port,
});

sequelize
  .authenticate()
  .then(() => console.log(`✅ Database connected`))
  .catch((error) =>
    console.log(`❌ Unable to connect to the database: ${error}`)
  );

module.exports = sequelize;
