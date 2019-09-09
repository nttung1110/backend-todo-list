const Sequelize = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
let _sequelize;
exports.initConnectionDatabase = async () => {
  try {
    if (!_sequelize)
      _sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`);
    return _sequelize;
  } catch (error) {
    throw error;
  }
}


