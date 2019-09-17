"use strict";

//API CRUD Task
var Task = require('../../models/task').Task;
module.exports = {
    createTask: function createTask(req, res) {
        //console.log("increating");
        return Task.create({
            taskID: req.body.taskID,
            taskName: req.body.taskName,
            createdBy: "",
            updatedBy: "",
            createdAt: "",
            updatedAt: "",
            status: "",
            boardID: req.params.boardID
            //adding
        }).then(function (task) {
            return res.status(201).send(task);
        }).catch(function (error) {
            return res.status(400).send(error);
        });
    },
    readTask: function readTask(req, res) {
        return Task.findOne({
            where: { taskID: req.params.taskID },
            attributes: ['taskID', 'taskName', 'status', 'boardID']
        }).then(function (task) {
            if (!task) {
                return res.status(404).send({
                    message: 'Task does not exist'
                });
            }
            return res.status(200).send(task);
        }).catch(function (error) {
            return res.status(400).send(error);
        });
    },
    updateTask: function updateTask(req, res) {
        return Task.findOne({
            where: { taskID: req.body.taskID }
        }).then(function (task) {
            if (!task) {
                return res.status(404).send({
                    message: 'Task does not exist'
                });
            }
            return task.update({
                taskID: req.body.taskID,
                taskName: req.body.taskName,
                status: req.body.status
                //add here
            }).then(function () {
                return res.status(200).send(task);
            }).catch(function (error) {
                return res.status(400).send(error);
            });
        }).catch(function (error) {
            return res.status(400).send(error);
        });
    },
    deleteTask: function deleteTask(req, res) {
        return Task.findOne({
            where: { taskID: req.body.taskID }
        }).then(function (task) {
            if (!task) {
                return res.status(400).send({
                    message: 'Task does not exist'
                });
            }
            return task.destroy().then(function () {
                return res.status(204).send();
            }).catch(function (error) {
                return res.status(400).send(error);
            });
        }).catch(function (error) {
            return res.status(400).send(error);
        });
    },
    getListTaskByBoard: function getListTaskByBoard(req, res) {
        console.log("here");
        return Task.findAll({
            where: { boardID: req.params.boardID }
        }).then(function (tasks) {
            return res.status(200).send(tasks);
        }).catch(function (error) {
            res.status(400).send(error);
        });
    }
};