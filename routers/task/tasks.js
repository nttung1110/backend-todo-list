const {Router}=require("express");
const router=new Router();
const taskController=require("./taskController");
exports.taskRouters=()=>{
    router.get('/api/user/:userID/board/:boardID/task/:taskID',taskController.readTask);
    router.post('/api/user/:userID/board/:boardID/task',taskController.createTask);
    router.put('/api/user/:userID/board/:boardID/task',taskController.updateTask);
    router.delete('/api/user/:userID/board/:boardID/task',taskController.deleteTask);
    return router;
}