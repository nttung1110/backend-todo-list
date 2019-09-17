'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sequelize = require('sequelize');

var User = function (_Sequelize$Model) {
  _inherits(User, _Sequelize$Model);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  return User;
}(Sequelize.Model);

exports.initModelUser = function (sequelize) {
  var curUser = User.init({
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
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    }
  }, {
    sequelize: sequelize,
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
};
//sequelize.models.user;
exports.User = User;