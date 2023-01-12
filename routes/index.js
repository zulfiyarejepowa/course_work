let express = require('express');
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
  res.render('reservation');
});
router.get('/toscana/contacts', function(req, res, next) {
  console.log(req.cookies);
  res.render('contacts');
});
router.post('/toscana/contacts', function(req, res, next) {
  if(DatabaseManager.hasUser(req.body.username, req.body.email))
  {
    let userCookies = [];
    let cookie = Helpers.makeid(10);
    res.cookie("users", cookie)
    userCookies.push({username:req.body.username, cookie:cookie});
    console.log(userCookies);
  }
  res.send('Your letter has been sent, you will be answered within a day');
  console.log(req.body);
});

module.exports = router;
