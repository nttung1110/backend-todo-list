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
    modelName: 'user',
    timestamps: false,
    freezeTableName: true
  });
}
exports.User = User;
exports.User.associate=function(models){
  User.hasMany(models.Board, {
    foreignKey: 'userID',
    as: 'board',
  });
}