const Sequelize = require('sequelize');
class User extends Sequelize.Model { }

exports.initModelUser = (sequelize) => {
  return User.init({
    userID:{
      type: Sequelize.STRING,
      primaryKey: true  
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    userPhone:{
      type: Sequelize.STRING
    },
    birthDay: {
      type: Sequelize.DATE
    },
    avatarURL: {
      type: Sequelize.STRING
    },
    updatedAt:{
      type: Sequelize.DATE
    },
    status:{
      type: Sequelize.STRING
    },
    userToken:{
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