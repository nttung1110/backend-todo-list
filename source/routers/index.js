var express=require('express');
var router=express.Router();
const {userRouters}=require("./user/users");
const {taskRouters}=require("./task/tasks");
const {boardRouters}=require("./board/boards");
<<<<<<< HEAD
const {adminRouters}=require("./admin/admin");
exports.initUserRouters = (app) => {
=======
export function initUserRouters(app){
>>>>>>> model-code
    app.use("/", userRouters());
}
export function initTaskRouters (app){
    app.use("/",taskRouters());
}
export function initBoardRouters(app){
    app.use("/",boardRouters());
}
exports.initAdminRouters=(app)=>{
    app.use("/",adminRouters());
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