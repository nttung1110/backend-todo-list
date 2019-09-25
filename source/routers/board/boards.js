const {Router}=require("express");
const router=new Router();
const boardController=require('./boardController');
const taskController=require('../task/taskController');
const {verifyingAuthentication}=require('../../middleware/authentication');
const {verifyingBoardUser}=require('../../middleware/verifyingBoardUser');
export function boardRouters(){
    router.get('/api/user/boards',verifyingAuthentication,boardController.listBoardByUser);
    router.get('/api/user/board/:boardID',verifyingAuthentication,boardController.readBoard);
    router.get('/api/user/board/:boardID/tasks',verifyingAuthentication,verifyingBoardUser,taskController.getListTaskByBoard);
    router.post('/api/user/board',verifyingAuthentication,boardController.createBoard);
    router.put('/api/user/board/:boardID',verifyingAuthentication,boardController.updateBoard);
    router.delete('/api/user/board/:boardID',verifyingAuthentication,boardController.deleteBoard);
    return router;
}