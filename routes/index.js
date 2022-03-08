var express = require('express');
const { Feed } = require('feed');
var router = express.Router();
let Parser = require("rss-parser");
let parser = new Parser();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' } );
});

module.exports = router;
