import { equal } from 'assert';

//CRUD user
const User=require('../../models/user').User;
const Board=require('../../models/board').Board;
const Task=require('../../models/task').Task;
require("firebase/auth");
require("firebase/firestore");
var admin=require('firebase-admin');

export function listUsers(req,res){
        return User.findAll({
        }).then((users)=>res.status(200).send(users))
        .catch((error)=>{res.status(400).send(error.message);});
    }

 export function readUser(req,res){
        console.log("Read 1 user");
        return User.findOne({
            where:{userID:req.params.uid},
            attributes:['userID','firstName','lastName','userPhone',]
        }).then((board)=>{
            if(!board){
                return res.status(404).send({
                    message:'User does not exist',
                });
            }
            return res.status(200).send(board);
        })
        .catch((error)=>res.status(400).send(error));
    }

export function loginAdmin(req,res){
        return User.findOne({
            where:{email:req.body.email},
            attributes:['userID','firstName','lastName','userPhone','typeUser']
        }).then((user)=>{
            if(!user){
            return res.status(404).send({
                message:'Not valid',
            });
        }
        return res.status(200).send(user);
        })
        .catch((error)=>res.status(400).send(error));
    }

export function  createUser(req,res){
        const tokenID=req.get('tokenID');
        console.log('New tokenID generated with admin:',tokenID);
        admin.auth().createUser({
            email: req.body.email,
            password: req.body.password,
          })
            .then(function(userRecord) {
                console.log('Successfully created new user with userID:', userRecord.uid);
                return User.create({
                    userID:userRecord.uid,
                    email:req.body.email,
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    userPhone:req.body.userPhone,
                    birthDay:req.body.birthDay,
                    typeUser:'user',
                    status:"",
                })
                .then((user)=>res.status(201).send(user))
                .catch((error)=>res.status(400).send(error));
            })
            .catch(function(error) {
                console.log('Error creating new user:', error);
                res.status(500).send(error.message);
            })
    }

export function updateUserInfo(req,res)
    {
        console.log(req.params.uid);
        return User.findOne({
            where:{userID:req.params.uid},
        })
        .then(user=>{
            if(!user){
                return res.status(404).send({
                    message:'User does not exist',
                });
            }
            return user
            .update({
                firstName:req.body.firstName,
                lastName: req.body.lastName,
                userPhone: req.body.userPhone,
                birthday: req.body.birthday,

                //add here
            })
            .then(()=>res.status(200).send(user))
            .catch((error)=>res.status(400).send(error));
        })
        .catch((error)=>res.status(400).send(error.message)); //
    }

export function deleteUser(req, res){
        admin.auth().deleteUser(req.params.uid).then(function(){
            console.log('Deleting user');
            return User.findOne({
                where:{userID:req.params.uid},
            })
        .then(user=>{
                if(!user){
                    return res.status(400).send({
                        message:'User does not exist',
                    });
                }
                return user
                .destroy()
                .then(()=>{
                    res.status(204).send({
                        message:'Deleted user succesfully',
                    })
                })
            })
            .catch((error)=>res.status(400).send(error.message));
       })
        .catch(function(error){
                console.log('Error happened with deleting user in firebase');
       })
}

//advanced
export function readBoards(req,res){
        return Board.findAll({
            where:{userID: req.params.uid},
            attributes:['boardID','boardName','status','userID','boardColor']
        }).then((boards) =>res.status(200).send(boards))
        .catch((error) =>res.status(400).send(error.message));
}

export function createBoard(req,res){
        return Board.create({
            boardName:req.body.boardName,
            boardColor:req.body.boardColor,
            userID:req.params.uid,
        })
        .then((board)=>{res.status(200).send(board);})
        .catch((error)=>res.status(400).send(error.message));
}

export function deleteBoard(req,res){
    return Board.findOne({
        where:{boardID:req.params.boardID},
    })
    .then(board=>{
        if(!board){
            return res.status(400).send({
                message:'Board does not exist',
            });
        }
        return board
        .destroy()
        .then(()=>{
            res.status(204).send({
                message:'Deleteing board succesfully',
            })
        .catch((error)=>res.status(400).send(error));
    })
    .catch((error)=>res.status(400).send(error));
    })
}


export function updateBoard(req,res){
    return Board.findOne({
        where:{boardID:req.params.boardID},
    })
    .then(board=>{
        if(!board){
            return res.status(404).send({
                message:'Board does not exist',
            });
        }
        return board.update({
            boardName:req.body.boardName,
            status:req.body.status,
        })
        .then(()=>res.status(200).send(task))
        .catch((error)=>res.status(400).send(error));
    })
    .catch((error)=>res.status(400).send(error));
    //
}


export function readTasks(req,res){
    return Task.findAll({
        where:{taskID:req.params.taskID},
        attributes:['taskID','taskName','status','boardID','description']
    })
    .then()
}


