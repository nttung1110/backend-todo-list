const firebase=require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

var admin=require('firebase-admin');
const {createBoard}=require("../routers/board/boardController");
const {updateBoard}=require("../routers/board/boardController");
const {createTask}=require("../routers/task/taskController");
const User=require('../models/user').User;
const {updateTask}=require("../routers/task/taskController");
export function verifyingAuthentication(req,res,next){
    const tokenID=req.get("tokenID");
    console.log("insidemiddleware",tokenID);
    admin.auth().verifyIdToken(tokenID)
    .then(function(decodedToken){
       let uid=decodedToken.uid;
       console.log("UID inside middleware",uid);
       return User.findOne({
           where:{userID:uid},
       }).then((user)=>{
           if(!user)
           {
               return res.status(404).send({
                   message:'User does not exist',
               })
           }
           req.body.uid=uid;
           next();
       })
       .catch((error)=>res.status(400).send(error));
    })
    .catch((error)=>res.send(error.message));
}
