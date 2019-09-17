"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require("../middleware/database"),
    initConnectionDatabase = _require.initConnectionDatabase;

var _require2 = require("./user"),
    initModelUser = _require2.initModelUser;

var _require3 = require("./task"),
    initModelTask = _require3.initModelTask;

var _require4 = require("./board"),
    initModelBoard = _require4.initModelBoard;

var Board = require("./board").Board;
var Task = require("./task").Task;
var User = require("./user").User;
//const Sequelize=require("sequelize");
var models = {
  User: require('./user'),
  Board: require('./board'),
  Task: require('./task')
};
exports.initDatabase = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var sequelize;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return initConnectionDatabase();

        case 2:
          sequelize = _context.sent;

          initModelUser(sequelize);
          initModelTask(sequelize);
          initModelBoard(sequelize);
          Object.keys(models).forEach(function (modelKey) {
            // Create model associations
            if ('associate' in models[modelKey]) {
              models[modelKey].associate(models);
            }
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));