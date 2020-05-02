var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname+'index.html');
  console.log(__dirname);
});

module.exports = router;
