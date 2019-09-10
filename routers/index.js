var express=require('express');
var router=express.Router();
const userRouters=require("./user/users");
const taskRouters=require("./task/tasks");
const boardRouters=require("./board/boards");
exports.initUserRouters = (app) => {
    app.use("/", userRouters());
}
exports.initTaskRouters=(app)=>{
    app.use("/",taskRouters());
}
exports.initBoardRouters=(app)=>{
    app.use("/",boardRouters());
}
