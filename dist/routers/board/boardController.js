"use strict";

//API CRUD Board
const Board = require('../../models/board').Board;

module.exports = {
  listBoardByUser(req, res) {
    const user = req.body.user;
    console.log("User ID for listing board:", user.userID);
    return Board.findAll({
      where: {
        userID: user.userID
      },
      attributes: ['boardID', 'boardName', 'status', 'userID']
    }).then(boards => {
      console.log("List of Boards founded");
      res.status(200).send(boards);
    }).catch(error => {
      res.status(400).send(error.message);
    });
  },

  createBoard(req, res) {
    const user = req.body.user;
    console.log("User:", user);
    console.log("name:", req.body.boardName);
    console.log("firstname", user.firstName); //console.log("userid:",req.body.userID);

    return Board.create({
      boardName: req.body.boardName,
      createdBy: user.firstName + user.lastName,
      updatedBy: user.firstName + user.lastName,
      status: req.body.status,
      userID: user.userID
    }).then(board => {
      res.status(200).send(board);
    }).catch(error => res.status(400).send(error.message));
  },

  readBoard(req, res) {
    console.log("inside reading");
    return Board.findOne({
      where: {
        boardID: req.params.boardID
      },
      attributes: ['boardID', 'boardName', 'status', 'userID']
    }).then(board => {
      if (!board) {
        return res.status(404).send({
          message: 'Board does not exist'
        });
      }

      return res.status(200).send(board);
    }).catch(error => res.status(400).send(error));
  },

  updateBoard(req, res) {
    console.log("insideupdating");
    return Board.findOne({
      where: {
        boardID: req.body.boardID
      }
    }).then(board => {
      if (!board) {
        return res.status(404).send({
          message: 'Board does not exist'
        });
      }

      return board.update({
        boardName: req.body.boardName,
        status: req.body.status //add here

      }).then(() => res.status(200).send(board)).catch(error => res.status(400).send(error));
    }).catch(error => res.status(400).send(error.message));
  },

  deleteBoard(req, res) {
    console.log("id", req.body.boardID);
    return Board.findOne({
      where: {
        boardID: req.body.boardID
      }
    }).then(board => {
      if (!board) {
        return res.status(400).send({
          message: 'Board does not exist'
        });
      }

      return board.destroy().then(() => {
        res.status(204).send({
          message: 'Deleting Board successfully'
        });
      }).catch(error => res.status(400).send(error.message));
    }).catch(error => res.status(400).send(error.message));
  }

};