//user API getprofile,register,update
const User=require('../models').User;
module.exports={
    list(req,res){
        return User.findAll({
            
        }).then((users)=>res.status(200).send(users))
        .catch((error)=>{res.status(400).send(error);});
    },
    getProfileByID(req,res)
    {
        return User.findByID(req.params.id,{

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
        return User.create({
            userID:req.body.userID,
        })
        .then((user)=>res.status(201).send(user))
        .catch((error)=>res.status(400).send(error));
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
