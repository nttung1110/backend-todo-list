"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initModelUser = exports.User = void 0;

const Sequelize = require('sequelize');

class User extends Sequelize.Model {}

exports.User = User;

const initModelUser = sequelize => {
  const curUser = User.init({
    userID: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    email: {
      type: Sequelize.STRING
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    userPhone: {
      type: Sequelize.STRING
    },
    birthDay: {
      type: Sequelize.STRING
    },
    avatarURL: {
      type: Sequelize.STRING
    },
    updatedAt: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.STRING
    },
    typeUser: {
      type: Sequelize.STRING
    }
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
}; //sequelize.models.user;


exports.initModelUser = initModelUser;