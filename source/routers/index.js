var express=require('express');
var router=express.Router();
const {userRouters}=require("./user/users");
const {taskRouters}=require("./task/tasks");
const {boardRouters}=require("./board/boards");
exports.initUserRouters = (app) => {
    app.use("/", userRouters());
}
exports.initTaskRouters=(app)=>{
    app.use("/",taskRouters());
}
exports.initBoardRouters=(app)=>{
    app.use("/",boardRouters());
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