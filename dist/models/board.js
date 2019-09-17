"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initModelBoard = exports.Board = void 0;

const Sequelize = require('sequelize');

class Board extends Sequelize.Model {}

exports.Board = Board;

const initModelBoard = sequelize => {
  const curBoard = Board.init({
    boardID: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    boardName: {
      type: Sequelize.STRING
    },
    createdBy: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.STRING
    },
    updatedAt: {
      type: Sequelize.DATE
    },
    updatedBy: {
      type: Sequelize.STRING
    },
    userID: {
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'board',
    timestamps: false,
    freezeTableName: true
  });

  curBoard.associate = function (models) {
    Board.belongsTo(models.User, {
      foreignKey: 'userID'
    });
    Board.hasMany(models.Task, {
      foreignKey: 'boardID'
    });
  };

  return curBoard;
};

exports.initModelBoard = initModelBoard;