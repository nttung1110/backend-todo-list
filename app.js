const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const { initDatabase } = require('./models');
const { initRouters } = require('./routers');
const app = express();

app.use(logger('dev'));
app.use(express.json());

initDatabase();
initRouters(app);

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

module.exports = app;
