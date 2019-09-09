const { initConnectionDatabase } = require("../middleware/database");
const { initModelUser } = require("./user");

exports.initDatabase = async () => {
  const sequelize = await initConnectionDatabase();
  initModelUser(sequelize);
}