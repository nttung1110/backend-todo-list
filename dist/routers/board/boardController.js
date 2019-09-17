'use strict';

//API CRUD Board
var Board = require('../../models/board').Board;
var Task = require('../../models/task').Task;
module.exports = {
    createBoard: function createBoard(req, res) {
        var uid = req.body.uid;
        console.log("id:", uid);
        console.log("name:", req.body.boardName);
        //console.log("userid:",req.body.userID);
        return Board.create({
            boardID: req.body.boardID,
            boardName: req.body.boardName,
            createdBy: "",
            updatedBy: "",
            createdAt: "",
            updatedAt: "",
            status: req.body.status,
            userID: uid
        }).then(function (board) {
            res.status(201).send(board);
        }).catch(function (error) {
            return res.status(400).send(error.message);
        });
    },
    readBoard: function readBoard(req, res) {
        console.log("inside reading");
        return Board.findOne({
            where: { boardID: req.params.boardID },
            attributes: ['boardID', 'boardName', 'status', 'userID']
        }).then(function (board) {
            if (!board) {
                return res.status(404).send({
                    message: 'Board does not exist'
                });
            }
            return res.status(200).send(board);
        }).catch(function (error) {
            return res.status(400).send(error);
        });
    },
    updateBoard: function updateBoard(req, res) {
        console.log("insideupdating");
        return Board.findOne({
            where: { boardID: req.body.boardID }
        }).then(function (board) {
            if (!board) {
                return res.status(404).send({
                    message: 'Board does not exist'
                });
            }
            return board.update({
                boardID: board.boardID,
                boardName: req.body.boardName,
                status: req.body.status
                //add here
            }).then(function () {
                return res.status(200).send(board);
            }).catch(function (error) {
                return res.status(400).send(error);
            });
        }).catch(function (error) {
            return res.status(400).send(error.message);
        });
    },
    deleteBoard: function deleteBoard(req, res) {
        console.log("id", req.body.boardID);
        return Board.findOne({
            where: { boardID: req.body.boardID }
        }).then(function (board) {
            if (!board) {
                return res.status(400).send({
                    message: 'Board does not exist'
                });
            }
            return board.destroy().then(function () {
                res.status(204).send({
                    message: 'Deleting Board successfully'
                });
            }).catch(function (error) {
                return res.status(400).send(error);
            });
        }).catch(function (error) {
            return res.status(400).send(error);
        });
    }
};