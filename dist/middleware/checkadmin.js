"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyAdmin = verifyAdmin;

const firebase = require("firebase/app");

require("firebase/auth");

require("firebase/firestore");

var admin = require('firebase-admin');

const User = require('../models/user').User;

function verifyAdmin(req, res, next) {
  const tokenID = req.get("tokenID");
  console.log("Inside Middleware Authentication of Admin", tokenID);
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

      if (user.dataValues.typeUser == "admin") {
        next();
      } else {
        return res.status(403).send({
          message: 'This user is not admin'
        });
      }
    }).catch(error => res.status(400).send(error));
  }).catch(error => res.send(error.message));
}