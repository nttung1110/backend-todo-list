"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initModelTask = exports.BoardModel = exports.Task = void 0;

const Sequelize = require('sequelize');

class Task extends Sequelize.Model {}

exports.Task = Task;

const BoardModel = require('./board');

exports.BoardModel = BoardModel;

const initModelTask = sequelize => {
  const curTask = Task.init({
    taskID: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    taskName: {
      type: Sequelize.STRING
    },
    createdBy: {
      type: Sequelize.STRING
    },
    updatedBy: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.STRING
    },
    boardID: {
      type: Sequelize.BIGINT
    }
  }, {
    sequelize,
    modelName: 'task',
    timestamps: false,
    freezeTableName: true
  });

  curTask.associate = function (models) {
    Task.belongsTo(models.Board, {
      foreignKey: 'boardID'
    });
  };

  return curTask;
};

exports.initModelTask = initModelTask;