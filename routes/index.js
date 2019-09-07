var express = require('express');
var router = express.Router();
/* GET home page. */
//repairing sequelize components
const Sequelize = require('sequelize');
const sequelize = new Sequelize('TEST1', 'postgres', 'tung546012', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});
//
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  /*sequelize.authenticate().then(() => {
    console.log("Success!");
    var Person = sequelize.define('person4', {
      pname: {
        type: Sequelize.STRING
      },
      pphone: {
        type: Sequelize.STRING
      },
      page:{
        type:Sequelize.STRING
      },
    }, {
      freezeTableName: true
    })
    Person.findAll({attributes:['pname','pphone','page']}).then((data) => {
      console.log("aa",data.pphone);
    }).catch((err) => {
      console.log(err);
    });
  }).catch((err) => {
    console.log(err);
  });*/
  sequelize.query("SELECT * FROM person4", { type:Sequelize.QueryTypes.SELECT})
   .then(function(properties) {
      console.log(properties);
      //res.render('index', { title: 'Express' });
      res.json(properties);
  })
  //res.render('index', { title: 'Express' });
});


module.exports = router;
