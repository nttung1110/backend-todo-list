var express = require('express');
var router = express.Router();

/* GET list listing. */
router.get('/', function(req, res, next) {
    Sequelize = require('sequelize');
    sequelize = new Sequelize("postgres://khue:123456@localhost:5432/users");/*'users', 'khue', '123456', {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            idle: 300000,
            acquire: 300000
        },
        port: '5432',
        logging: log => console.log('logging:', log)
    });*/
    class User extends Sequelize.Model {}
    User.init({
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'testuser',
        timestamps: false,
        freezeTableName: true,
    });
    User.sync();
    User.findAll().then(testuser => {
        res.send(JSON.stringify(testuser, null, 4));
    });

});

module.exports = router;
