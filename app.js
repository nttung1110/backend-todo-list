const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
global.base_dir=__dirname;
var bodyParser=require('body-parser');
const { initDatabase } = require('../backend-todo-list/models');
const { initUserRouters } = require('../backend-todo-list/routers');
const {initBoardRouters}=require('../backend-todo-list/routers');
const {initTaskRouters}=require('../backend-todo-list/routers');
const {initFirebaseConnection}=require('../backend-todo-list/middleware/firebase');
const app = express();
app.use(logger('dev'));
app.use(express.json());
//initFirebaseConnection();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
initDatabase();
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
module.exports = app;
