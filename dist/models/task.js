'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sequelize = require('sequelize');

var Task = function (_Sequelize$Model) {
  _inherits(Task, _Sequelize$Model);

  function Task() {
    _classCallCheck(this, Task);

    return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
  }

  return Task;
}(Sequelize.Model);

var BoardModel = require('./board');
exports.initModelTask = function (sequelize) {
  var curTask = Task.init({
    taskID: {
      type: Sequelize.STRING,
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
      type: Sequelize.STRING
    },
    updatedAt: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    boardID: {
      type: Sequelize.STRING
    }
  }, {
    sequelize: sequelize,
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
exports.Task = Task;