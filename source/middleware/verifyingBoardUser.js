const Board=require("../models/board").Board;
export function verifyingBoardUser(req,res,next)
{
    const curBoardID=req.params.boardID
    var curUser=req.body.user;
    Board.findOne({
        where:{boardID:curBoardID}
    }).then((board)=>{
        if(!board)
        {
            res.status(404).send({
                message:"Board does not exist"
            })
        }
        if(board.userID!=curUser.userID)
        {
            res.status(404).send({
                message:"This user is not the owner of this board,fail to access the board"
            })
        }
        req.body.user=curUser;
        req.params.boardID=curBoardID;
        next()
    })
}