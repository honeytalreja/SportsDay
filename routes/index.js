
const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
  res.render('index', {title:'Sports Day', Heading:'Welcome to Oeia Sports Day'});
});



module.exports = router;
