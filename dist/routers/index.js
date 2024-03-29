"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initUserRouters = initUserRouters;
exports.initTaskRouters = initTaskRouters;
exports.initBoardRouters = initBoardRouters;
exports.initAdminRouters = initAdminRouters;

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

const {
  adminRouters
} = require("./admin/admin");

function initUserRouters(app) {
  app.use("/", userRouters());
}

function initTaskRouters(app) {
  app.use("/", taskRouters());
}

function initBoardRouters(app) {
  app.use("/", boardRouters());
}

function initAdminRouters(app) {
  app.use("/", adminRouters());
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