"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyingBoardUser = verifyingBoardUser;

const Board = require("../models/board").Board;

function verifyingBoardUser(req, res, next) {
  const curBoardID = req.params.boardID;
  var curUser = req.body.user;
  Board.findOne({
    where: {
      boardID: curBoardID
    }
  }).then(board => {
    if (!board) {
      res.status(404).send({
        message: "Board does not exist"
      });
    } else if (board.userID != curUser.userID) {
      res.status(404).send({
        message: "This user is not the owner of this board,fail to access the board"
      });
    } else {
      req.body.user = curUser;
      req.params.boardID = curBoardID;
      next();
    }
  }).catch(error => {
    res.status(404).send(error.message);
  });
}