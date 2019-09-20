"use strict";

const {
  Router
} = require('express');

const router = new Router();

const adminController = require("./adminController");

const {
  verifyingAdmin
} = require("../../middleware/checkadmin");

exports.adminRouters = function () {
  router.get('api/admin/users/list', verifyingAdmin, adminController.listUsers); //router.get('api/admin/users',verifyingAdmin,adminController.getUserID);
  //router.post('api/admin/user',verifyingAdmin,adminController.createUser);
  //router.put('api/admin/user',verifyingAdmin,adminController.updateUserInfo);

  router.delete('api/admin/user', verifyingAdmin, adminController.deleteUser);
  return router;
};