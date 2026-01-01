var express = require('express');
var { redirect } = require('@hellocoop/express');

var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  await req.getAuth();
  res.render('index', { title: 'Express', auth: JSON.stringify(req.auth) });
});

router.get('/login', function(req, res, next) {
  res.redirect('/api/hellocoop?op=login');
});

router.get('/logout', function(req, res, next) {
  res.clearAuth();
  res.redirect('/');
});

router.get('/protected', redirect('/login'), function(req, res, next) {
  res.send('Protected route');
});

module.exports = router;
