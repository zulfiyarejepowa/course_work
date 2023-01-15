let express = require('express');
const { append } = require('../controllers/DatabaseManager');
const DatabaseManager = require('../controllers/DatabaseManager');
const Helpers = require('../controllers/Helpers');
let router = express.Router();

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
  console.log(req.cookies);
  res.render('reservation');
});
router.post('/toscana/reservation', function(req, res, next) {
  console.log(req.body);
  res.redirect('/toscana/reservation');
});
router.get('/toscana/contacts', function(req, res, next) {
  console.log(req.cookies);
  res.render('contacts');
});
router.post('/toscana/contacts', function(req, res, next) {
  console.log(req.body);
  DatabaseManager.append(req.body);
  if(DatabaseManager.hasUser(req.body.username, req.body.email))
  {
    let userCookies = [];
    let cookie = Helpers.makeid(10);
    res.cookie("user", cookie)
    userCookies.push({username:req.body.username, cookie:cookie});
    console.log(userCookies);
  }
  res.redirect('/toscana/contacts');
});

module.exports = router;
