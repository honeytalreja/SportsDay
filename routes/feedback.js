
const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
// const config = require('config');

// connecting to Database
const db = mongojs('mongodb://localhost/application');

router.post('/',(req,res) => {
  console.log('feedback');
  res.sendFile(__dirname+'../views/somefile.pdf');
});

module.exports = router;
