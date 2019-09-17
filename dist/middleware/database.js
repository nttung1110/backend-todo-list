"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Sequelize = require('sequelize');
/*const DB_USER="postgres"
const DB_NAME="todoList"
const DB_PASSWORD="tung546012"
*/
var _process$env = process.env,
    DB_USER = _process$env.DB_USER,
    DB_PASSWORD = _process$env.DB_PASSWORD,
    DB_NAME = _process$env.DB_NAME;

var _sequelize = void 0;
exports.initConnectionDatabase = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("user", DB_USER);
          console.log("pass", DB_PASSWORD);
          console.log("db name", DB_NAME);
          _context.prev = 3;

          if (!_sequelize) _sequelize = new Sequelize("postgres://" + DB_USER + ":" + DB_PASSWORD + "@localhost:5432/" + DB_NAME);
          return _context.abrupt("return", _sequelize);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](3);
          throw _context.t0;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, undefined, [[3, 8]]);
}));