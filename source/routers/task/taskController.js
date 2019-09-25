//API CRUD Task
const Task=require('../../models/task').Task;
const Board=require('../../models/board').Board;
export function createTask(req,res)
    {
        //console.log("increating");
        const boardID=req.params.boardID;
        const description=req.body.description;
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
export function readTask(req,res)
    {
            return Task.findOne({
                where:{taskID:req.params.taskID},
                attributes:['taskID','taskName','status','description','boardID']
            }).then((task)=>{
                if(!task){
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
                return res.status(200).send(task);
            })
            .catch((error)=>res.status(400).send(error.message));
    }
export function updateTask(req,res)
    {
            return Task.findOne({
                where:{taskID:req.params.taskID},
            })
            .then(task=>{
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
export function getListTaskByBoard(req,res)
    {
        console.log("Get List Task By Board");
        return Task.findAll({
            where:{boardID:req.params.boardID},
            order: [
                ['taskID', 'ASC'],
            ],
        }).then((tasks)=>res.status(200).send(tasks))
        .catch((error)=>{res.status(400).send(error);});
    }
