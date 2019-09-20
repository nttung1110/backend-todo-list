"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initUserRouters = initUserRouters;
exports.initTaskRouters = initTaskRouters;
exports.initBoardRouters = initBoardRouters;

var express = require('express');

var router = express.Router();

const {
  userRouters
} = require("./user/users");

const {
  taskRouters
} = require("./task/tasks");

const {
  boardRouters
} = require("./board/boards");

function initUserRouters(app) {
  app.use("/", userRouters());
}

function initTaskRouters(app) {
  app.use("/", taskRouters());
}

function initBoardRouters(app) {
  app.use("/", boardRouters());
}
/*
router.get('/test', function(req, res, next) {
    sequelize.query("SELECT * FROM Example", { type:Sequelize.QueryTypes.SELECT})
     .then(function(properties) {
        console.log(properties);
        res.json(properties);
    })
  });
*/