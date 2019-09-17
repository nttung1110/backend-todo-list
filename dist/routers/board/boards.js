'use strict';

var _require = require("express"),
    Router = _require.Router;

var router = new Router();
var boardController = require('./boardController');
var taskController = require('../task/taskController');

var _require2 = require('../../middleware/authentication'),
    verifyingAuthentication = _require2.verifyingAuthentication;

exports.boardRouters = function (app) {
    router.get('/api/user/board/:boardID', verifyingAuthentication, boardController.readBoard);
    router.get('/api/user/board/:boardID/tasks', verifyingAuthentication, taskController.getListTaskByBoard);
    router.post('/api/user/board', verifyingAuthentication, boardController.createBoard);
    router.put('/api/user/board', verifyingAuthentication, boardController.updateBoard);
    router.delete('/api/user/board', verifyingAuthentication, boardController.deleteBoard);
    return router;
};