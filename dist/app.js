"use strict";

var _cors = _interopRequireDefault(require("cors"));

require("@babel/polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createError = require('http-errors');

const express = require('express');

const logger = require('morgan');

const dotenv = require('dotenv');

const firebase = require("firebase/app");

require("firebase/auth");

require("firebase/firestore");

dotenv.config();

var bodyParser = require('body-parser');

var headerParser = require('header-parser');

const {
  initDatabase
} = require('./models');

const {
  initUserRouters
} = require('./routers');

const {
  initBoardRouters
} = require('./routers');

const {
  initTaskRouters
} = require('./routers');

const {
  initAdminRouters
} = require('./routers');

const {
  initFirebaseConnection
} = require('./middleware/firebase');

const {
  authCloudExplicit
} = require('./middleware/firebase');

const {
  initAdmin
} = require('./middleware/firebase');

const app = express();
const projectId = 'todolist-dev-3e715';
const keyFilename = '/home/tung/Downloads/todolist-dev-3e715-firebase-adminsdk-4dpsg-65d7376e97.json';
app.use(headerParser);
app.use(logger('dev'));
app.use((0, _cors.default)({
  path: process.env.NODE_ENV === "prod" ? '../.env' : null
}));
app.use(express.json()); //initFirebaseConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
initDatabase();
/*if (!firebase.apps.length) {
  initFirebaseConnection(firebase);
}*/

initAdmin(); //authCloudExplicit(projectId,keyFilename);

initUserRouters(app);
initBoardRouters(app);
initTaskRouters(app);
initAdminRouters(app); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  return res.json(err);
});
/*
export GOOGLE_APPLICATION_CREDENTIALS="/home/tung/Downloads/todolist-dev-3e715-firebase-adminsdk-4dpsg-65d7376e97.json"
*/

app.listen(4000);