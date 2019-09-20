"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.taskRouters = taskRouters;

const {
  Router
} = require("express");

const router = new Router();

const taskController = require("./taskController");

const {
  verifyingAuthentication
} = require('../../middleware/authentication');

const {
  verifyingBoardUser
} = require('../../middleware/verifyingBoardUser');

function taskRouters() {
  router.get('/api/user/board/:boardID/task/:taskID', verifyingAuthentication, verifyingBoardUser, taskController.readTask);
  router.post('/api/user/board/:boardID/task', verifyingAuthentication, verifyingBoardUser, taskController.createTask);
  router.put('/api/user/board/:boardID/task', verifyingAuthentication, verifyingBoardUser, taskController.updateTask);
  router.delete('/api/user/board/:boardID/task', verifyingAuthentication, verifyingBoardUser, taskController.deleteTask);
  return router;
}