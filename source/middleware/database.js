const Sequelize = require('sequelize');
/*const DB_USER="postgres"
const DB_NAME="todoList"
const DB_PASSWORD="tung546012"
*/
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
let _sequelize;
export async function initConnectionDatabase() {
  console.log("user",DB_USER);
  console.log("pass",DB_PASSWORD);
  console.log("db name",DB_NAME);
  try {
    if (!_sequelize)
      _sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`);
    return _sequelize;
  } catch (error) {
    throw error;
  }
}


