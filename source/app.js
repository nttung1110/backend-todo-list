const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
import cors from "cors";
import "@babel/polyfill";
const dotenv = require('dotenv');
const firebase=require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
dotenv.config();
var bodyParser=require('body-parser');
var headerParser = require('header-parser');
const { initDatabase } = require('./models');
const { initUserRouters } = require('./routers');
const {initBoardRouters}=require('./routers');
const {initTaskRouters}=require('./routers');
const{initAdminRouters}=require('./routers');
const {initFirebaseConnection}=require('./middleware/firebase');
const {initAdmin}=require('./middleware/firebase');
const app = express();
app.use(headerParser);
app.use(logger('dev'));
app.use(cors({
  path: process.env.NODE_ENV === "prod" ? '../.env' : null
})); 
app.use(express.json());
//initFirebaseConnection();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
initDatabase();
if (!firebase.apps.length) {
  initFirebaseConnection(firebase);
}
initAdmin();
initUserRouters(app);
initBoardRouters(app);
initTaskRouters(app);
initAdminRouters(app);
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
app.listen(4000);
