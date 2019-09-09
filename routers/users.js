const { User } = require("../models/user");
const { Router } = require("express");
const router = new Router();

exports.userRouters = () => {
  router.get("/users", list)
  return router;
}

async function list(req, res) {
  try {
    const data = await User.findAll();
    return res.json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
