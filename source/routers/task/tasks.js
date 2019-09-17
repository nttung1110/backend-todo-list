const {Router}=require("express");
const router=new Router();
const taskController=require("./taskController");
const {verifyingAuthentication}=require('../../middleware/authentication');
exports.taskRouters=()=>{
    router.get('/api/user/board/:boardID/task/:taskID',verifyingAuthentication,taskController.readTask);
    router.post('/api/user/board/:boardID/task',verifyingAuthentication,taskController.createTask);
    router.put('/api/user/board/:boardID/task',verifyingAuthentication,taskController.updateTask);
    router.delete('/api/user/board/:boardID/task',verifyingAuthentication,taskController.deleteTask);
    return router;
}