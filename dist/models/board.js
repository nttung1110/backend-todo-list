'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sequelize = require('sequelize');

var Board = function (_Sequelize$Model) {
  _inherits(Board, _Sequelize$Model);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
  }

  return Board;
}(Sequelize.Model);

exports.initModelBoard = function (sequelize) {
  var curBoard = Board.init({
    boardID: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    boardName: {
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
    userID: {
      type: Sequelize.STRING
    }
  }, {
    sequelize: sequelize,
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
exports.Board = Board;