
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
/*
app.use('/anotherindex',anotherindex);
*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});  

/*
sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});*/
/*sequelize.authenticate().then(() => {
  console.log("Success!");
  var Person = sequelize.define('person4', {
    pname: {
      type: Sequelize.STRING
    },
    pphone: {
      type: Sequelize.STRING
    },
    page:{
      type:Sequelize.STRING
    },
  }, {
    freezeTableName: true
  })
  Person.findAll({attributes:['pname','pphone','page']}).then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  });
  /*Person.sync({force: true}).then(function () {
    return Person.create({
      title: 'Getting Started with PostgreSQL and Sequelize',
      content: 'Hello there'
    });
  });
}).catch((err) => {
  console.log(err);
});*/
app.listen(5000);
//
module.exports = app;
