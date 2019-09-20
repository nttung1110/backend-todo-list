//API CRUD Task
const Task=require('../../models/task').Task;
const Board=require('../../models/board').Board;
export function createTask(req,res)
    {
        //console.log("increating");
        const boardID=req.params.boardID;
        const curUser =req.body.user;
        console.log("BoardID in creating Task",boardID);
        if(req.body.status==null || req.body.status==""){
            return res.status(400).send({
                message:"Task must have status to be created"
            });
        }
            return Task.create({
                taskName:req.body.taskName,
                createdBy:curUser.firstName+curUser.lastName,
                updatedBy:curUser.firstName+curUser.lastName,
                status:req.body.status,
                boardID:boardID,            
                //adding
            })
            .then((task)=>res.status(201).send(task))
            .catch((error)=>res.status(400).send(error))
    }
export function readTask(req,res)
    {
            return Task.findOne({
                where:{taskID:req.params.taskID},
                attributes:['taskID','taskName','status','boardID']
            }).then((task)=>{
                if(!task){
                    return res.status(404).send({
                        message:'Task does not exist',
                    });
                }
                return res.status(200).send(task);
            })
            .catch((error)=>res.status(400).send(error));
    }
export function updateTask(req,res)
    {
            return Task.findOne({
                where:{taskID:req.body.taskID},
            })
            .then(task=>{
                if(!task)
                {
                    return res.status(404).send({
                        message:'Task does not exist',
                    });
                }
                return task.update({
                    taskName:req.body.taskName,
                    status:req.body.status,
                    //add here
                })
                .then(()=>res.status(200).send(task))
                .catch((error)=>res.status(400).send(error));
            })
            .catch((error)=>res.status(400).send(error));
    }
export function deleteTask(req,res){
            return Task.findOne({
                where:{taskID:req.body.taskID},
            })
            .then(task=>{
                if(!task){
                    return res.status(400).send({
                        message:'Task does not exist',
                    });
                }
                return task
                .destroy()
                .then(()=>res.status(204).send())
                .catch((error)=>res.status(400).send(error));
            })
            .catch((error)=>res.status(400).send(error));
    }
export function getListTaskByBoard(req,res)
    {
        console.log("Get List Task By Board");
        return Task.findAll({
            where:{boardID:req.params.boardID},
        }).then((tasks)=>res.status(200).send(tasks))
        .catch((error)=>{res.status(400).send(error);});
    }
