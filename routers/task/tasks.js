const {Router}=require("express");
const router=new Router();
const taskController=require("../controllers").task;
exports.taskRouters=()=>{
    router.get('/api/task/:id',taskController.readTask);
    router.post('/api/task',taskController.createTask);
    router.put('/api/task/:id',taskController.updateTask);
    router.delete('/api/task/:id',taskController.delete);
    return router;
}