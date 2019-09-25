import admin from "firebase-admin";

const {Router} = require("express");
const router=new Router();
const adminController=require("./adminController");
const {verifyAdmin}=require('../../middleware/checkAdmin');
const {validUser}=require('../../middleware/validation');
export function adminRouters(){
    //list view users
    router.get('/api/admin/users',verifyAdmin,adminController.listUsers);
    //router.get();
    //CRUD User
    router.get('/api/admin/:uid',verifyAdmin,adminController.readUser)
    router.post('/api/admin/user',verifyAdmin,adminController.createUser);
    router.put('/api/admin/:uid',verifyAdmin,adminController.updateUserInfo);
    router.delete('/api/admin/:uid',verifyAdmin,adminController.deleteUser);
    //login
    router.get('/api/admin/login',verifyAdmin,adminController.loginAdmin);
    //CRUD tables
    router.get('/api/admin/user/:uid/board/list',verifyAdmin,validUser,adminController.readListBoards);
    router.get('/api/admin/user/:uid/board/:boardID',verifyAdmin,validUser,adminController.readBoard);
    router.put('/api/admin/user/:uid/board/:boardID',verifyAdmin,validUser,adminController.updateBoard);
    router.post('/api/admin/user/:uid/board',verifyAdmin,validUser,adminController.createBoard);
    router.delete('/api/admin/user/:uid/board/:boardID',verifyAdmin,validUser,adminController.deleteBoard);
    //CRUD tasks
    router.get('/api/admin/user/:uid/board/:boardID/tasks',verifyAdmin,validUser,adminController.readListTasks);
    router.get('/api/admin/user/:uid/board/:boardID/task/:taskID',verifyAdmin,validUser,adminController.readTask);
    router.put('/api/admin/user/:uid/board/:boardID/task/:taskID',verifyAdmin,validUser,adminController.updateTask);
    router.post('/api/admin/user/:uid/board/:boardID/task',verifyAdmin,validUser,adminController.createTask);
    router.delete('/api/admin/user/:uid/board/:boardID/task/:taskID',verifyAdmin,validUser,adminController.deleteTask);
    return router;
}
