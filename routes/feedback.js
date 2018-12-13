
const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
// const config = require('config');

// connecting to Database
const db = mongojs('mongodb://localhost/application');

router.post('/',(req,res) => {
  res.render('feedback');
});

module.exports = router;
