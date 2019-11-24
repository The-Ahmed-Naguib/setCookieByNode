var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.cookie('3pcookie', 'token', { sameSite: 'none', secure: true , path : '/'});
  res.set('Set-cookie', 'theCookie=token; SameSite=None; Secure; domain=10.68.24.27;Path=/; Max-Age=86400');
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.send('{"token":"Token"}');
});

module.exports = router;
