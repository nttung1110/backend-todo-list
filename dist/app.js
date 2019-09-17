'use strict';

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

require('@babel/polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var dotenv = require('dotenv');
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
dotenv.config();
var bodyParser = require('body-parser');
var headerParser = require('header-parser');

var _require = require('./models'),
    initDatabase = _require.initDatabase;

var _require2 = require('./routers'),
    initUserRouters = _require2.initUserRouters;

var _require3 = require('./routers'),
    initBoardRouters = _require3.initBoardRouters;

var _require4 = require('./routers'),
    initTaskRouters = _require4.initTaskRouters;

var _require5 = require('./middleware/firebase'),
    initFirebaseConnection = _require5.initFirebaseConnection;

var _require6 = require('./middleware/firebase'),
    initAdmin = _require6.initAdmin;

var app = express();
app.use(headerParser);
app.use(logger('dev'));
app.use((0, _cors2.default)({
  path: process.env.NODE_ENV === "prod" ? '../.env' : null
}));
app.use(express.json());
//initFirebaseConnection();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
initDatabase();
if (!firebase.apps.length) {
  initFirebaseConnection(firebase);
}
initAdmin();
initUserRouters(app);
initBoardRouters(app);
initTaskRouters(app);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  return res.json(err);
});
app.listen(3000);