"use strict";

//CRUD user
const User = require('../../models/user').User;

require("firebase/auth");

require("firebase/firestore");

var admin = require('firebase-admin');

module.exports = {
  listUsers(res) {
    return User.findAll({}).then(users => res.status(200).send(users)).catch(error => {
      res.status(400).send(error.message);
    });
  },

  /*getUserID(req,res)
  {
      return User.findOne({
          where:{userID:req.params.uid},
          attributes:['userID','firstName','lastName','userPhone','birthDay','avatarURL']
      }).then((user)=>{
          if(!user){
              return res.status(404).send({
                  message: 'User does not exist',
              });
          }
          return res.status(200).send(user);
      })
      .catch((error)=>res.status(400).send(error));
  },
  //findByPK
  createUser(req,res)
  {
      //const email=req.body.email;
      //console.log("email",req.body.email);
      //var password=req.body.password;
      console.log(req.headers);
      const tokenID=req.get('tokenIDS')
      console.log('registerID inside register new user in admin role:',tokenID);
      admin.auth().verifyIdToken(tokenID).then(function(decodedToken){
          let uid=decodedToken.uid;
          const email=decodedToken.email;
          console.log("Verifying Successfully");
          console.log("User:",uid);
          console.log("Email",email)
          console.log("first name",req.body.firstName);
          return User.create({
              userID:uid,
              email:email,
              firstName:req.body.firstName,
              lastName:req.body.lastName,
              userPhone:req.body.userPhone,
              birthDay:req.body.birthDay,
              avatarURL:req.body.avatarURL,
              status:"",
          })
          .then((user)=>res.status(201).send(user))
          .catch((error)=>res.status(400).send(error.message));
      }).catch(function(error){
          res.status(500).send(error.message);
      });
  },
  updateUserInfo(req,res)
  {
      return User.findByID(req.params.uid,{
      })
      .then(user=>{
          if(!user){
              return res.status(404).send({
                  message:'User does not exist',
              });
          }
          return user
          .update({
              userID:req.body.userID||user.userID,
              //add here
          })
          .then(()=>res.status(200).send(user))
          .catch((error)=>res.status(400).send(error));
      })
      .catch((error)=>res.status(400).send(error));
  },*/
  deleteUser(req, res) {
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
      console.log('Error happened with deleting user');
    });
  }

};