const Sequelize = require('sequelize');
class User extends Sequelize.Model { }
exports.initModelUser = (sequelize) => {
  const curUser= User.init({
    userID:{
      type: Sequelize.STRING,
      primaryKey: true  
    },
    email:{
      type:Sequelize.STRING,
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
      type: Sequelize.STRING
    },
    avatarURL: {
      type: Sequelize.STRING
    },
    updatedAt:{
      type: Sequelize.STRING 
    },
    status:{
      type: Sequelize.STRING
    },
  }, {
    sequelize,
    modelName: 'user',
    timestamps: false,
    freezeTableName: true
  });
  /*
  curUser.associate=function(models){
    User.hasMany(models.Board, {
      foreignKey: 'userID',
      as: 'board',
    });
  }
  return curUser;
  */
}
//sequelize.models.user;
exports.User = User;
