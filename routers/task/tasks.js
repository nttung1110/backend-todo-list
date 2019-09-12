const {Router}=require("express");
const router=new Router();
const taskController=require("./taskController");
exports.taskRouters=()=>{
    router.get('/api/task/:taskID',taskController.readTask);
    router.post('/api/task',taskController.createTask);
    router.put('/api/task',taskController.updateTask);
    router.delete('/api/task',taskController.deleteTask);
    return router;
}