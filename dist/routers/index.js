"use strict";

var express = require('express');
var router = express.Router();

var _require = require("./user/users"),
    userRouters = _require.userRouters;

var _require2 = require("./task/tasks"),
    taskRouters = _require2.taskRouters;

var _require3 = require("./board/boards"),
    boardRouters = _require3.boardRouters;

exports.initUserRouters = function (app) {
    app.use("/", userRouters());
};
exports.initTaskRouters = function (app) {
    app.use("/", taskRouters());
};
exports.initBoardRouters = function (app) {
    app.use("/", boardRouters());
};

/*
router.get('/test', function(req, res, next) {
    sequelize.query("SELECT * FROM Example", { type:Sequelize.QueryTypes.SELECT})
     .then(function(properties) {
        console.log(properties);
        res.json(properties);
    })
  });
*/