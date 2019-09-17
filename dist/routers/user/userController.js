"use strict";

//user API getprofile,register,update
const User = require('../../models/user').User;

const firebase = require("firebase/app");

const Sequelize = require('sequelize');

require("firebase/auth");

require("firebase/firestore");

var admin = require('firebase-admin');

module.exports = {
  list(req, res) {
    return User.findAll({}).then(users => res.status(200).send(users)).catch(error => {
      res.status(400).send(error.message);
    });
  },

  getProfileByID(req, res) {
    const tokenID = req.get('tokenID');
    console.log("tokenID inside get Profile of User:", tokenID);
    admin.auth().verifyIdToken(tokenID).then(function (decodedToken) {
      let uid = decodedToken.uid;
      console.log("Verify Successfully", tokenID);
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

        return res.status(200).send(user);
      }).catch(error => res.status(400).send(error));
    }).catch(function (error) {
      res.send(error);
    }); //console.log("userID",req.params.userID);
  },

  //findByPK
  register(req, res) {
    //const email=req.body.email;
    //console.log("email",req.body.email);
    //var password=req.body.password;
    var registerID;
    console.log(req.headers);
    const tokenID = req.get('tokenIDS');
    console.log('registerID inside register new User:', tokenID);
    admin.auth().verifyIdToken(tokenID).then(function (decodedToken) {
      let uid = decodedToken.uid;
      const email = decodedToken.email;
      console.log("Verifying Successfully");
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
        status: ""
      }).then(user => res.status(201).send(user)).catch(error => res.status(400).send(error.message));
    }).catch(function (error) {
      res.status(500).send(error.message);
    });
  },

  updateUserInfo(req, res) {
    return User.findByID(req.params.userID, {}).then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User does not exist'
        });
      }

      return user.update({
        userID: req.body.userID || user.userID //add here

      }).then(() => res.status(200).send(user)).catch(error => res.status(400).send(error));
    }).catch(error => res.status(400).send(error));
  }

};