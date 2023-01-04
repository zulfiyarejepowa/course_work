var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/toscana', function(req, res, next) {
  res.render('index', { title: 'Toscana' });
});
router.get('/toscana/restaurant', function(req, res, next) {
  res.render('restaurant');
});
router.get('/toscana/menu', function(req, res, next) {
  res.render('menu');
});
module.exports = router;
