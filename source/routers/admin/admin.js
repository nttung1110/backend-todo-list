const {Router} = require("express");
const router=new Router();
const adminController=require("./adminController");
const {verifyAdmin}=require('../../middleware/checkadmin');
exports.adminRouters=()=>{
    //list view users
    router.get('/api/admin/users',verifyAdmin,adminController.listUsers);
    //CRUD 
    router.get('/api/admin/user',verifyAdmin,adminController.readUser)
    router.post('/api/admin/user',verifyAdmin,adminController.createUser);
    router.put('/api/admin/user',verifyAdmin,adminController.updateUserInfo);
    router.delete('/api/admin/user',verifyAdmin,adminController.deleteUser);
    //login
    router.post('/api/admin/login',verifyAdmin,adminController.loginAdmin);
    return router;
}
