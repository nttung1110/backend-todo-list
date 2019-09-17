"use strict";

//user API getprofile,register,update
var User = require('../../models/user').User;
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
var admin = require('firebase-admin');
module.exports = {
    list: function list(req, res) {
        return User.findAll({}).then(function (users) {
            return res.status(200).send(users);
        }).catch(function (error) {
            res.status(400).send(error);
        });
    },
    getProfileByID: function getProfileByID(req, res) {
        var tokenID = req.get('tokenID');
        console.log("id", tokenID);
        admin.auth().verifyIdToken(tokenID).then(function (decodedToken) {
            var uid = decodedToken.uid;
            console.log("idfirebase", tokenID);
            return User.findOne({
                where: { userID: uid },
                attribute: ['userID', 'email', 'firstName', 'lastName', 'userPhone', 'birthDay', 'avatarURL']
            }).then(function (user) {
                if (!user) {
                    return res.status(404).send({
                        message: 'User does not exist'
                    });
                }
                return res.status(200).send(user);
            }).catch(function (error) {
                return res.status(400).send(error);
            });
        }).catch(function (error) {
            res.send(error);
        });
        //console.log("userID",req.params.userID);
    },

    //findByPK
    register: function register(req, res) {
        console.log("run register");
        //const email=req.body.email;
        //console.log("email",req.body.email);
        //var password=req.body.password;
        var registerID;
        console.log(req.headers);
        var tokenID = req.get('tokenIDS');
        console.log('registerID', tokenID);
        admin.auth().verifyIdToken(tokenID).then(function (decodedToken) {
            var uid = decodedToken.uid;
            var email = decodedToken.email;
            console.log("User:", uid);
            console.log("Email", email);
            console.log("first name", req.body.firstName);
            return User.create({
                userID: uid,
                email: email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userPhone: req.body.userPhone,
                birthDay: req.body.birthDay,
                avatarURL: req.body.avatarURL,
                updatedAt: "",
                status: ""
            }).then(function (user) {
                return res.status(201).send(user);
            }).catch(function (error) {
                return res.status(400).send(error.message);
            });
        }).catch(function (error) {
            res.status(500).send(error.message);
        });
    },
    updateUserInfo: function updateUserInfo(req, res) {
        return User.findByID(req.params.userID, {}).then(function (user) {
            if (!user) {
                return res.status(404).send({
                    message: 'User does not exist'
                });
            }
            return user.update({
                userID: req.body.userID || user.userID
                //add here
            }).then(function () {
                return res.status(200).send(user);
            }).catch(function (error) {
                return res.status(400).send(error);
            });
        }).catch(function (error) {
            return res.status(400).send(error);
        });
    }
};