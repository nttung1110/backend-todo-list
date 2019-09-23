const { initConnectionDatabase } = require("../middleware/database");
const { initModelUser } = require("./user");
const {initModelTask}=require("./task");
const {initModelBoard}=require("./board");
const {Board}=require("./board");
const {Task}=require("./task");
const {User}=require("./user");
//const Sequelize=require("sequelize");
let sequelize;
const models={
  "User": User,
  "Board": Board,
  "Task": Task
}
exports.initDatabase = async () => { 
  sequelize = await initConnectionDatabase();
  initModelUser(sequelize);
  initModelTask(sequelize);
  initModelBoard(sequelize);
  Object.keys(models).forEach(modelKey => {
    // Create model associations
    if ('associate' in models[modelKey]) {
      models[modelKey].associate(models)
    }
  })
  sequelize.sync();
}
exports.sequelize=sequelize
