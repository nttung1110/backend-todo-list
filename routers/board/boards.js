const {Router}=require("express");
const router=new Router();
const boardController=require('./boardController');
const taskController=require('../task/taskController');
const {verifyingAuthentication}=require(global.base_dir+'/middleware/authentication');
exports.boardRouters=(app)=>{
    router.get('/api/user/board/:boardID',verifyingAuthentication,boardController.readBoard);
    router.get('/api/user/board/:boardID/tasks',verifyingAuthentication,taskController.getListTaskByBoard);
    router.post('/api/user/board',verifyingAuthentication,boardController.createBoard);
    router.put('/api/user/board',verifyingAuthentication,boardController.updateBoard);
    router.delete('/api/user/board',verifyingAuthentication,boardController.deleteBoard);
    return router;
}