"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyingAuthentication = verifyingAuthentication;

const firebase = require("firebase/app");

require("firebase/auth");

require("firebase/firestore");

var admin = require('firebase-admin');

const User = require('../models/user').User;

function verifyingAuthentication(req, res, next) {
  const tokenID = req.get("tokenID");
  console.log("Inside Middleware Authentication", tokenID);
  admin.auth().verifyIdToken(tokenID).then(function (decodedToken) {
    let uid = decodedToken.uid;
    console.log("UID inside middleware", uid);
    return User.findOne({
      where: {
        userID: uid
      },
      attribute: ['userID', 'email', 'firstName', 'lastName', 'userPhone', 'birthDay', 'avatarURL']
    }).then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User does not exist'
        });
      }

      req.body.user = user.dataValues;
      next();
    }).catch(error => res.status(400).send(error));
  }).catch(error => res.status(400).send(error.message));
}