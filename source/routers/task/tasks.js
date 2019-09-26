const {Router}=require("express");
const router=new Router();
const taskController=require("./taskController");
const {verifyingAuthentication}=require('../../middleware/authentication');
const {verifyingBoardUser}=require('../../middleware/verifyingBoardUser');
export function taskRouters(){
    router.get('/api/user/board/:boardID/task/:taskID',verifyingAuthentication,verifyingBoardUser,taskController.readTask);
    router.post('/api/user/board/:boardID/task',verifyingAuthentication,verifyingBoardUser,taskController.createTask);
    router.put('/api/user/board/:boardID/task/:taskID',verifyingAuthentication,verifyingBoardUser,taskController.updateTask);
    router.delete('/api/user/board/:boardID/task/:taskID',verifyingAuthentication,verifyingBoardUser,taskController.deleteTask);
    //API for Mobile
    router.put('/api/user/board/:boardID/task',verifyingAuthentication,verifyingBoardUser,taskController.updateTaskMobile);
    router.delete('/api/user/board/:boardID/task',verifyingAuthentication,verifyingBoardUser,taskController.deleteTaskMobile);
    return router;
}