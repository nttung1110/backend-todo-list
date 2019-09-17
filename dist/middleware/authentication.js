"use strict";

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
var admin = require('firebase-admin');

var _require = require("../routers/board/boardController"),
    createBoard = _require.createBoard;

var _require2 = require("../routers/board/boardController"),
    updateBoard = _require2.updateBoard;

var _require3 = require("../routers/task/taskController"),
    createTask = _require3.createTask;

var User = require('../models/user').User;

var _require4 = require("../routers/task/taskController"),
    updateTask = _require4.updateTask;

exports.verifyingAuthentication = function (req, res, next) {
    var tokenID = req.get("tokenID");
    console.log("insidemiddleware", tokenID);
    admin.auth().verifyIdToken(tokenID).then(function (decodedToken) {
        var uid = decodedToken.uid;
        console.log("UID inside middleware", uid);
        return User.findOne({
            where: { userID: uid }
        }).then(function (user) {
            if (!user) {
                return res.status(404).send({
                    message: 'User does not exist'
                });
            }
            req.body.uid = uid;
            next();
        }).catch(function (error) {
            return res.status(400).send(error);
        });
    }).catch(function (error) {
        return res.send(error.message);
    });
};