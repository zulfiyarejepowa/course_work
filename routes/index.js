var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/toscana', function(req, res, next) {
  res.render('index', { title: 'Toscana' });
});

module.exports = router;
