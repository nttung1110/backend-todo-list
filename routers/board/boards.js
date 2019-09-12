const {Router}=require("express");
const router=new Router();
const boardController=require('./boardController');
const taskController=require('../task/taskController');
exports.boardRouters=()=>{
    router.get('/api/board/:boardID',boardController.readBoard);
    router.get('/api/board/:boardID/tasks',taskController.getListTaskByBoard);
    router.post('/api/board',boardController.createBoard);
    router.put('/api/board',boardController.updateBoard);
    router.delete('/api/board',boardController.deleteBoard);
    return router;
}