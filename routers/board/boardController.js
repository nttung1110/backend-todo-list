//API CRUD Board
const Board=require('..models').Board;
module.exports={
    createBoard(req,res)
    {
        return Board.create({
            boardId:req.body.boardId,
            //adding
        })
        .then((board)=>res.status(201).send(board))
        .catch((error)=>res.status(400).send(error));

    },
    readBoard(req,res)
    {
        return Board.findById(req.params.boardId,{

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
        return Board.findById(req.params.boardId,{

        })
        .then(board=>{
            if(!board){
                return res.status(404).send({
                    message:'Board does not exist',
                });
            }
            return board.
            update({
                boardId:req.body.boardId||board.boardId,
                //add here
            })
            .then(()=>res.status(200).send(board))
            .catch((error)=>res.status(400).send(error));
        })
        .catch((error)=>res.status(400).send(error));
    },
    deleteBoard(req,res)
    {
        return Board
        .findById(req.params.boardId)
        .then(board=>{
            if(!board){
                return res.status(400).send({
                    message:'Board does not exist',
                });
            }
            return board
            .destroy()
            .then(()=>res.status(204).send())
            .catch((error)=>res.status(400).send(error));
        })
        .catch((error)=>res.status(400).send(error));
    }
}
