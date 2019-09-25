//const { User } = require("../../models/user");
const { Router } = require("express");
const router = new Router();
const userController=require("./userController");
export function userRouters(){
  console.log('run');
  //router.get('/api/index',test);
  router.get('/api/user/list',userController.list);
  router.get('/api/user',userController.getProfileByID);
  router.post('/api/user',userController.register);
  //router.put('api/user',userController.updateUserInfo);
  return router;
}/*
let test=(req,res)=>{
  console.log("fdfd");
  res.send({
    message:"oksa"
  })
}*/
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
