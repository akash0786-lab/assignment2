var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('services', { 
    title: 'Services',
    userName: 'Akash Arora', 
    displayName: req.user ? req.user.displayName : ''
   });
});

module.exports = router;
