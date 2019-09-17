"use strict";

var _require = require("express"),
    Router = _require.Router;

var router = new Router();
var taskController = require("./taskController");

var _require2 = require('../../middleware/authentication'),
    verifyingAuthentication = _require2.verifyingAuthentication;

exports.taskRouters = function () {
    router.get('/api/user/board/:boardID/task/:taskID', verifyingAuthentication, taskController.readTask);
    router.post('/api/user/board/:boardID/task', verifyingAuthentication, taskController.createTask);
    router.put('/api/user/board/:boardID/task', verifyingAuthentication, taskController.updateTask);
    router.delete('/api/user/board/:boardID/task', verifyingAuthentication, taskController.deleteTask);
    return router;
};