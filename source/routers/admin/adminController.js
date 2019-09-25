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
        //const tokenID=req.get('tokenID');
        //console.log('New tokenID generated with admin:',tokenID);
        admin.auth().createUser({
            email: req.body.email,
            password: req.body.password,
          })
            .then((userRecord) =>{
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
        admin.auth().deleteUser(req.params.uid).then(()=>{
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
export function readListBoards(req,res){
        return Board.findAll({
            where:{userID: req.params.uid},
            attributes:['boardID','boardName','status','userID']
        }).then((boards) =>res.status(200).send(boards))
        .catch((error) =>res.status(400).send(error.message));
}
export function readBoard(req,res)
    {
        console.log("inside reading");
        const curuserID=req.body.user.userID;
        return Board.findOne({
            where:{boardID:req.params.boardID},
            attributes:['boardID','boardName','status','userID']
        }).then((board)=>{
            if(!board){
                return res.status(404).send({
                    message:'Board does not exist',
                });
            }
            return res.status(200).send(board);
        })
        .catch((error)=>res.status(400).send(error));
    }
export function createBoard(req,res){
        return Board.create({
            boardName:req.body.boardName,
            //boardColor:req.body.boardColor,
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
        .then(()=>res.status(200).send(board))
        .catch((error)=>res.status(400).send(error));
    })
    .catch((error)=>res.status(400).send(error));
    //
}


export function readListTasks(req,res){
    return Task.findAll({
        where:{boardID:req.params.boardID},
        attributes:['taskID','taskName','status','boardID','description'],
        order: [
            ['taskID', 'ASC'],
        ],
    })
    .then((tasks)=>{
        res.status(200).send(tasks)
    })
    .catch((error)=>{res.status(404).send(error)})
}
export function readTask(req,res){
    return Task.findOne({
        where:{taskID:req.params.taskID},
        attributes:['taskID','taskName','status','boardID','description']
    }).then((task)=>{
        if(!task)
        {
            res.status(400).send({
                message:"Task does not exist"
            })
        }
        else{
            res.status(200).send(task);
        }
    })
    .catch((error)=>res.status(400).send(error))
}
export function updateTask(req,res){
    return Task.findOne({
        where:{taskID:req.params.taskID},
    }).then(task=>{
        if(!task)
        {
            return res.status(404).send({
                message:'Task does not exist',
            });
        }
        if(task.boardID!=req.params.boardID)
        {
            return res.status(404).send({
                message:'This task does not belongs to this board,fail to access'
            })
        }
        return task.update({
            taskName:req.body.taskName,
            status:req.body.status,
            description:req.body.description
            //add here
        })
        .then(()=>res.status(200).send(task))
        .catch((error)=>res.status(400).send(error));
    })
    .catch((error)=>res.status(400).send(error));
}
export function createTask(req,res)
    {
        //console.log("increating");
        const boardID=req.params.boardID;
        //const description=req.body.description;
        const curUser =req.body.user;
        console.log("BoardID in creating Task",boardID);
        if(req.body.status==null || req.body.status==""){
            return res.status(400).send({
                message:"Task must have status to be created"
            });
        }
            return Task.create({
                taskName:req.body.taskName,
                description:req.body.description,
                createdBy:curUser.firstName+curUser.lastName,
                updatedBy:curUser.firstName+curUser.lastName,
                status:req.body.status,
                boardID:boardID,            
                //adding
            })
            .then((task)=>res.status(201).send(task))
            .catch((error)=>res.status(400).send(error))
    }
export function deleteTask(req,res){
        return Task.findOne({
            where:{taskID:req.params.taskID},
        })
        .then(task=>{
            if(!task){
                return res.status(400).send({
                    message:'Task does not exist',
                });
            }
            if(task.boardID!=req.params.boardID)
            {
                return res.status(404).send({
                    message:'This task does not belongs to this board,fail to access'
                })
            }
            return task
            .destroy()
            .then(()=>res.status(204).send())
            .catch((error)=>res.status(400).send(error));
        })
        .catch((error)=>res.status(400).send(error));
}



