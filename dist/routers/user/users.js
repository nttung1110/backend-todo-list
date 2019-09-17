"use strict";

//const { User } = require("../../models/user");
var _require = require("express"),
    Router = _require.Router;

var router = new Router();
var userController = require("./userController");
exports.userRouters = function () {
  console.log('run');
  router.get('/api/user/list', userController.list);
  router.get('/api/user', userController.getProfileByID);
  router.post('/api/user', userController.register);
  //router.put('api/user',userController.updateUserInfo);
  return router;
};
/*
exports.userRouters = () => {
  router.get("/users", list);
  return router;
}

async function list(req, res) {
  try {
    const data = await User.findAll();
    return res.json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}*/