"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyingAdmin = verifyingAdmin;

const firebase = require("firebase/app");

require("firebase/auth");

require("firebase/firestore");

var admin = require('firebase-admin');

const User = require('../models/user').User;

function verifyingAdmin(req, res, next) {
  const tokenID = req.get("tokenID");
  console.log("Inside Middleware Check Admin", tokenID);

  if (req.body.isAdmin == true) {
    next();
  } else {
    res.status(400).send({
      message: "You are not admin"
    });
  }
}