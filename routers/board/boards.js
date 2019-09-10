const {Router}=require("express");
const router=new Router();
const boardController=require("../controllers").board;
exports.boardRouters=()=>{
    router.get('/api/board/:id',boardController.readBoard);
    router.post('/api/board',boardController.createBoard);
    router.put('/api/board/:id',boardController.updateBoard);
    router.delete('/api/board/:id',boardController.deleteBoard);
    return router;
}