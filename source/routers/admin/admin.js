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
    router.get('/api/admin/u/:uid/b/list',verifyAdmin,validUser,adminController.readBoards);
    router.put('/api/admin/u/:uid/b/:boardID',verifyAdmin,validUser,adminController.updateBoard);
    router.post('/api/admin/u/:uid/b',verifyAdmin,validUser,adminController.createBoard);
    router.delete('/api/admin/u/:uid/b/:boardID',verifyAdmin,validUser,adminController.deleteBoard);
    return router;
}
