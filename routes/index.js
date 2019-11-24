var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let cookieVal = null;
  if (req.cookies['theCookie']) {
    // check the new style cookie first
    cookieVal = req.cookies['theCookie'];
  }
  console.log(cookieVal);
  res.set('Set-cookie', 'theCookie=token; SameSite=None; Secure; Domain=dev.siliconexpert.com');
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.send('{"token":"Token"}');
});

module.exports = router;
