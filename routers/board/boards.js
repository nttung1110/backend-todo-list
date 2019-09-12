const {Router}=require("express");
const router=new Router();
const boardController=require('./boardController');
const taskController=require('../task/taskController');
exports.boardRouters=()=>{
    router.get('/api/user/:userID/board/boardID',boardController.readBoard);
    router.get('/api/user/:userID/board/:boardID/tasks',taskController.getListTaskByBoard);
    router.post('/api/user/:userID/board',boardController.createBoard);
    router.put('/api/user/:userID/board',boardController.updateBoard);
    router.delete('/api/user/:userID/board',boardController.deleteBoard);
    return router;
}