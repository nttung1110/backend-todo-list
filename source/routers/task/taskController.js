//API CRUD Task
const Task=require('../../models/task').Task;
module.exports={
    createTask(req,res)
    {
        //console.log("increating");
        return Task.create({
            taskID:req.body.taskID,
            taskName:req.body.taskName,
            createdBy:"",
            updatedBy:"",
            createdAt:"",
            updatedAt:"",
            status:"",
            boardID:req.params.boardID,            
            //adding
        })
        .then((task)=>res.status(201).send(task))
        .catch((error)=>res.status(400).send(error))
    },
    readTask(req,res)
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
    },
    updateTask(req,res)
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
                taskID:req.body.taskID,
                taskName:req.body.taskName,
                status:req.body.status,
                //add here
            })
            .then(()=>res.status(200).send(task))
            .catch((error)=>res.status(400).send(error));
        })
        .catch((error)=>res.status(400).send(error));
    },
    deleteTask(req,res){
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
    },
    getListTaskByBoard(req,res)
    {
        console.log("here");
        return Task.findAll({
            where:{boardID:req.params.boardID},
        }).then((tasks)=>res.status(200).send(tasks))
        .catch((error)=>{res.status(400).send(error);});
    }
}