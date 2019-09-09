const Sequelize = require('sequelize');
class User extends Sequelize.Model { }

exports.initModelUser = (sequelize) => {
  return User.init({
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'testuser',
    timestamps: false,
    freezeTableName: true
  });
}
exports.User = User;