var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  await req.getAuth();
  res.render('index', { title: 'Express', auth: JSON.stringify(req.auth) });
});

module.exports = router;
