var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.model('User').find({}, function(err, users) {
    if (err) {
      return console.err(err);
    }
    else {
      res.send(users);
    }
  });
});

module.exports = router;
