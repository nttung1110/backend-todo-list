//API CRUD Board
const Board=require(global.base_dir+'/models/board').Board;
const Task=require(global.base_dir+'/models/task').Task;
module.exports={
    createBoard(req,res)
    {
        const uid=req.body.uid;
        console.log("id:",uid);
        console.log("name:",req.body.boardName);
        //console.log("userid:",req.body.userID);
        return Board.create({
            boardID:req.body.boardID,
            boardName:req.body.boardName,
            createdBy:"",
            updatedBy:"",
            createdAt:"",
            updatedAt:"",
            status:req.body.status,
            userID:uid,
        })
        .then((board)=>{ res.status(201).send(board);})
        .catch((error)=>res.status(400).send(error.message));

    },
    readBoard(req,res)
    {
        console.log("inside reading");
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
    },
    updateBoard(req,res)
    {
        console.log("insideupdating");
        return Board.findOne({
            where:{boardID:req.body.boardID},
        })
        .then(board=>{
            if(!board){
                return res.status(404).send({
                    message:'Board does not exist',
                });
            }
            return board.
            update({
                boardID:board.boardID,
                boardName:req.body.boardName,
                status:req.body.status
                //add here
            })
            .then(()=>res.status(200).send(board))
            .catch((error)=>res.status(400).send(error));
        })
        .catch((error)=>res.status(400).send(error.message));
    },
    deleteBoard(req,res)
    {
        console.log("id",req.body.boardID);
        return Board.findOne({
            where:{boardID:req.body.boardID},
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
                    message:'Deleting Board successfully',
                })
            })
            .catch((error)=>res.status(400).send(error));
        })
        .catch((error)=>res.status(400).send(error));
    },
}
