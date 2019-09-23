//API CRUD Board
const Sequelize = require('sequelize');
const sequelize=require('../../models/index').sequelize;
const Board=require('../../models/board').Board;
const Task=require('../../models/task').Task;
export function listBoardByUser(req,res)
    {
        const user=req.body.user;
        console.log("User ID for listing board:",user.userID);        
        return Board.findAll({
            where:{userID:user.userID},
            attributes:['boardID','boardName','status','userID']
        }).then((boards)=>{
            if(boards.length!=0)
            {
                boards.forEach(function(value,i){
                const curboardID=boards[i].boardID;
                console.log("BoardID",curboardID);
                var details=[] 
                Task.findAll({
                    where:{boardID:curboardID},
                }).then((tasks)=>{
                    var dict=new Object();
                    var count=0;
                    for(var task of tasks)
                    {
                        const taskStatus=task.status;
                        if(dict.hasOwnProperty(taskStatus))
                            {
                                dict[taskStatus]=dict[taskStatus]+1;
                            }
                        else
                            {
                                dict[taskStatus]=1;

                            }
                        count=count+1;
                    }
                    for(var statusType in dict)
                    {
                        if (dict.hasOwnProperty(statusType)) {           
                            var statusAndCount=new Object();
                            statusAndCount.status=statusType;
                            statusAndCount.count=dict[statusType];
                            details.push(statusAndCount);
                        }
                    }
                    console.log(details);
                    this[i].dataValues.details=details;
                    this[i].dataValues.totalTasks=count;
                    if(i==boards.length-1)
                        res.send(boards);
                }).catch((error)=>{console.log(error.message)})
            },boards);
            }
            else
                res.send(boards);   
        })
        .catch((error)=>{
            res.status(400).send(error.message);
        })
    }
export function createBoard(req,res)
    {
        const user = req.body.user;
        console.log("User:",user );
        console.log("name:",req.body.boardName);
        console.log("firstname",user.firstName);
        //console.log("userid:",req.body.userID);
        return Board.create({
            boardName: req.body.boardName,
            createdBy:user.firstName+user.lastName,
            updatedBy:user.firstName+user.lastName,
            status:req.body.status,
            userID:user.userID,
        })
        .then((board)=>{ res.status(200).send(board);})
        .catch((error)=>res.status(400).send(error.message));

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
            if(board.userID!=curuserID)
            {
                return res.status(404).send({
                    message:'You are not the owner of this board,fail to read the board'
                })
            }
            return res.status(200).send(board);
        })
        .catch((error)=>res.status(400).send(error));
    }
export function updateBoard(req,res)
    {
        console.log("insideupdating");
        const curuserID=req.body.user.userID;
        return Board.findOne({
            where:{boardID:req.body.boardID},
        })
        .then(board=>{
            if(!board){
                return res.status(404).send({
                    message:'Board does not exist',
                });
            }
            if(board.userID!=curuserID)
            {
                return res.status(404).send({
                    message:'You are not the owner of this board,fail to update the board'
                })
            }
            return board.
            update({
                boardName:req.body.boardName,
                status:req.body.status
                //add here
            })
            .then(()=>res.status(200).send(board))
            .catch((error)=>res.status(400).send(error));
        })
        .catch((error)=>res.status(400).send(error.message));
    }
export function deleteBoard(req,res)
    {
        console.log("id",req.body.boardID);
        const curuserID=req.body.user.userID;
        return Board.findOne({
            where:{boardID:req.body.boardID},
        })
        .then(board=>{
            if(!board){
                return res.status(400).send({
                    message:'Board does not exist',
                });
            }
            if(board.userID!=curuserID)
            {
                return res.status(404).send({
                    message:'You are not the owner of this board,fail to delete the board'
                })
            }
            return board
            .destroy()
            .then(()=>{
                res.status(204).send({
                    message:'Deleting Board successfully',
                })
            })
            .catch((error)=>res.status(400).send(error.message));
        })
        .catch((error)=>res.status(400).send(error.message));
    }
