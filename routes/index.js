var express = require('express');
var router = express.Router();

router.get('/toscana', function(req, res, next) {
  res.render('index', { title: 'Toscana' });
});
router.get('/toscana/restaurant', function(req, res, next) {
  res.render('restaurant');
});
router.get('/toscana/menu', function(req, res, next) {
  res.render('menu');
});
router.get('/toscana/reservation', function(req, res, next) {
  res.render('reservation');
});
router.post('/toscana/reservation', function(req, res, next) {
  res.send('Your reserve ');
});
router.get('/toscana/contacts', function(req, res, next) {
  res.render('contacts');
});
module.exports = router;
