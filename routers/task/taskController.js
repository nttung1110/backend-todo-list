//API CRUD Task
const Task=require('..models').Task;
module.exports={
    createTask(req,res)
    {
        return Task.create({
            taskId:req.body.taskId,
            //adding
        })
        .then((task)=>res.status(201).send(task))
        .catch((error)=>res.status(400).send(error))
    },
    readTask(req,res)
    {
        return Task.findByID(req.params.taskId,{

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
        return Task.findByID(req.params.taskId,{

        })
        .then(task=>{
            if(!task)
            {
                return res.status(404).send({
                    message:'Task does not exist',
                });
            }
            return task.update({
                taskId:req.body.taskId||task.taskId
                //add here
            })
            .then(()=>res.status(200).send(task))
            .catch((error)=>res.status(400).send(error));
        })
        .catch((error)=>res.status(400).send(error));
    },
    deleteTask(req,res){
        return Task.findByID(req.params.taskId)
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
}