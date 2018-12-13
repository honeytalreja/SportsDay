
const express = require('express');
const router = express.Router();

const mongojs = require('mongojs');

// connecting to Database
const db = mongojs('mongodb://localhost/application');

router.post('/',(req,res) => {
  var person = req.body;
  if(!person.name) {
    res.send('err');
  } else {
    db.people.findOne({Name:person.name},function(err,task) {
      if(err) {res.render('user', {Greeting:'welcome Back', Name:req.body.name, City: req.body.city});}
    });
    db.people.save(person, function(err,person) {
      if(err) {
        res.send(err);
      }
      res.render('user', {Greeting:'Congratulations', Name:req.body.name, City: req.body.city});
    });

  }
});


module.exports = router;
