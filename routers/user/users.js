//const { User } = require("../../models/user");
const { Router } = require("express");
const router = new Router();
const userController=require("./userController").user;
exports.userRouters=()=>{
  router.get('/api/users',userController.list);
  router.get('/api/users/:id',userController.getProfileByID);
  router.post('/api/users',userController.register);
  router.put('api/users/:id',userController.updateUserInfo);
  return router;
}






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
