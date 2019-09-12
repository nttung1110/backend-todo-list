//user API getprofile,register,update
const User=require(global.base_dir+'/models/user').User;
const {initFirebaseConnection}=require(global.base_dir+'/middleware/firebase');
const firebase=require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
module.exports={
    list(req,res){
        return User.findAll({
            
        }).then((users)=>res.status(200).send(users))
        .catch((error)=>{res.status(400).send(error);});
    },
    getProfileByID(req,res)
    {
        console.log("userID",req.params.userID);
        return User.findOne({
            where:{userID:req.params.userID},
            attribute:['userID','firstName','lastName','userPhone','birthDay','avatarURL']
        }).then((user)=>{
            if(!user){
                return res.status(404).send({
                    message:'User does not exist',
                });
            }
            return res.status(200).send(user);
        })
        .catch((error)=>res.status(400).send(error));
    },
    //findByPK
    register(req,res)
    {
        if (!firebase.apps.length) {
            initFirebaseConnection(firebase);
        }
        const email=req.body.email;
        console.log("email",req.body.email);
        var password=req.body.password;
        var registerID;
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(function(){
            var curUser = firebase.auth().currentUser;
            console.log("User:"+curUser.uid);
            return User.create({
                userID:curUser.uid,
                email:curUser.email,
                firstName:"",
                lastName:"",
                userPhone:"",
                birthDay:"",
                avatarURL:"",
                updatedAt:"",
                status:"",
            })
            .then((user)=>res.status(201).send(user))
            .catch((error)=>res.status(400).send(error.message));
        }).catch(function(error){
            //res.end("OK register");
            var errorCode=error.Code;
            var errorMessage=error.message;
            console.log('errorCodecreate',errorCode);
            console.log('errorMessagecreate',errorMessage);
        });
    },
    updateUserInfo(req,res)
    {
        return User.findByID(req.params.userID,{

        })
        .then(user=>{
            if(!user){
                return res.status(404).send({
                    message:'User does not exist',
                });
            }
            return user
            .update({
                userID:req.body.userID||user.userID,
                //add here
            })
            .then(()=>res.status(200).send(user))
            .catch((error)=>res.status(400).send(error));
        })
        .catch((error)=>res.status(400).send(error));
    }
}
