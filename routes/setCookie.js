var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  let freeUser = null;
  if (req.body['freeUser']) {
    // check the new cookie first
    freeUser = req.body['freeUser'];
  }
  res.set('Set-cookie', 'freeUser=' + freeUser + ';SameSite=None;Secure;domain=.siliconexpert.com;Path=/;Max-Age=86400');
  // res.header('Set-cookie', 'freeUser=123; sameSite:none ;Secure;domain=.siliconexpert.com;Path=/; Max-Age=86400');
  res.send({"freeUser":freeUser});
});


module.exports = router;
