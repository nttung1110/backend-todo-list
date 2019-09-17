"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var admin = require('firebase-admin');
exports.initFirebaseConnection = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(firebase) {
        var firebaseConfig;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        firebaseConfig = {
                            apiKey: "AIzaSyBfaoj7A7Pv3iWduetQsmZAyLada3a_Uk4",
                            authDomain: "todolist-dev-3e715.firebaseapp.com",
                            databaseURL: "https://todolist-dev-3e715.firebaseio.com",
                            projectId: "todolist-dev-3e715",
                            storageBucket: "",
                            messagingSenderId: "424824951267",
                            appId: "1:424824951267:web:76c082cc77ee0989b910d6"
                        };
                        //testing

                        firebase.initializeApp(firebaseConfig);
                        /*
                        firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
                            var errorCode=error.Code;
                            var errorMessage=error.message;
                            console.log('errorCodecreate',errorCode);
                            console.log('errorMessagecreate',errorMessage);
                          });
                          */
                        _context.next = 8;
                        break;

                    case 5:
                        _context.prev = 5;
                        _context.t0 = _context["catch"](0);
                        throw _context.t0;

                    case 8:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 5]]);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();
exports.initAdmin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    admin.initializeApp({
                        credential: admin.credential.applicationDefault(),
                        databaseURL: 'https://todolist-dev-3e715.firebaseio.com/'
                    });

                case 1:
                case "end":
                    return _context2.stop();
            }
        }
    }, _callee2, undefined);
}));
exports.admin = admin;