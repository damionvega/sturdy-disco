require("../../models/blogPost.js");
require("../../models/user.js");

const Test = {
  sequelize: require("../../config/sequelize.js"),
  modelNames: ["BlogPost", "User"],
};

for (const modelName of Test.modelNames) {
  Test[modelName] = Test.sequelize.models[modelName];
}

Test.resetDb = async () => {
  for (const name of Test.modelNames) {
    await Test.resetTable(name);
  }

  return Promise.resolve();
};

Test.resetTable = async (modelName) => {
  if (!modelName) throw new Error("modelName undefined");
  if (!Test[modelName]) throw new Error(`Test.${modelName} not defined`);

  try {
    const syncResult = await Test[modelName].sync({
      force: true,
      logging: (log) => console.log("\nsync log", log),
    });

    return Promise.resolve(syncResult);
  } catch (error) {
    console.log("resetTable error", error.message);
    throw error;
  }
};

module.exports = Test;
