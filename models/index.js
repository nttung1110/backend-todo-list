const { initConnectionDatabase } = require("../middleware/database");
const { initModelUser } = require("./user");
const {initModelTask}=require("./task");
const {initModelBoard}=require("./board");
const Board=require("./board").Board;
const Task=require("./task").Task;
const User=require("./user").User;
//const Sequelize=require("sequelize");
const models={
  User: require('./user'),
  Board: require('./board'),
  Task: require('./task')
}
exports.initDatabase = async () => {
  const sequelize = await initConnectionDatabase();
  initModelUser(sequelize);
  initModelTask(sequelize);
  initModelBoard(sequelize);
  Object.keys(models).forEach(modelKey => {
    // Create model associations
    if ('associate' in models[modelKey]) {
      models[modelKey].associate(models)
    }
  })
}