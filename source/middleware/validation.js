const User = require("../models/user").User;

export function validUser(req,res,next){
    console.log ('Check userID if it is avaliable',req.params.uid);
    User.findOne({
        where:{userID:req.params.uid}
    }).then((User)=>{
        if(!User){
            return res.status(404).send({
                message: 'User does not exist',
            });
        }
        next()
    })
}

