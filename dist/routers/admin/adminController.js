"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listUsers = listUsers;
exports.readUser = readUser;
exports.loginAdmin = loginAdmin;
exports.createUser = createUser;
exports.updateUserInfo = updateUserInfo;
exports.deleteUser = deleteUser;

//CRUD user
const User = require('../../models/user').User;

require("firebase/auth");

require("firebase/firestore");

var admin = require('firebase-admin');

function listUsers(req, res) {
  return User.findAll({}).then(users => res.status(200).send(users)).catch(error => {
    res.status(400).send(error.message);
  });
}

function readUser(req, res) {
  console.log("Read 1 user");
  return User.findOne({
    where: {
      userID: req.body.uid
    },
    attributes: ['userID', 'firstName', 'lastName', 'userPhone']
  }).then(board => {
    if (!board) {
      return res.status(404).send({
        message: 'User does not exist'
      });
    }

    return res.status(200).send(board);
  }).catch(error => res.status(400).send(error));
}

function loginAdmin(req, res) {
  return User.findOne({
    where: {
      email: req.body.email
    },
    attributes: ['userID', 'firstName', 'lastName', 'userPhone', 'typeUser']
  }).then(user => {
    if (!user) {
      return res.status(404).send({
        message: 'Not valid'
      });
    }

    return res.status(200).send(user);
  }).catch(error => res.status(400).send(error));
}

function createUser(req, res) {
  const tokenID = req.get('tokenID');
  console.log('New tokenID generated with admin:', tokenID);
  admin.auth().createUser({
    email: req.body.email,
    password: req.body.password
  }).then(function (userRecord) {
    console.log('Successfully created new user with userID:', userRecord.uid);
    return User.create({
      userID: userRecord.uid,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userPhone: req.body.userPhone,
      birthDay: req.body.birthDay,
      typeUser: 'user',
      status: ""
    }).then(user => res.status(201).send(user)).catch(error => res.status(400).send(error));
  }).catch(function (error) {
    console.log('Error creating new user:', error);
    res.status(500).send(error.message);
  });
}

function updateUserInfo(req, res) {
  console.log(req.body.userID);
  return User.findOne({
    where: {
      userID: req.body.userID
    }
  }).then(user => {
    if (!user) {
      return res.status(404).send({
        message: 'User does not exist'
      });
    }

    return user.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userPhone: req.body.userPhone,
      birthday: req.body.birthday //add here

    }).then(() => res.status(200).send(user)).catch(error => res.status(400).send(error));
  }).catch(error => res.status(400).send(error.message)); //
}

function deleteUser(req, res) {
  admin.auth().deleteUser(req.body.uid).then(function () {
    console.log('Deleting user');
    return User.findOne({
      where: {
        userID: req.body.uid
      }
    }).then(user => {
      if (!user) {
        return res.status(400).send({
          message: 'User does not exist'
        });
      }

      return user.destroy().then(() => {
        res.status(204).send({
          message: 'Deleted user succesfully'
        });
      });
    }).catch(error => res.status(400).send(error.message));
  }).catch(function (error) {
    console.log('Error happened with deleting user in firebase');
  });
}