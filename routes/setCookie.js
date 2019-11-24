var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  let freeUser = null;
  if (req.body['freeUser']) {
    // check the new cookie first
    freeUser = req.body['freeUser'];
  }
  res.set('Set-cookie', 'freeUser=' + freeUser + ';SameSite=None;Secure;domain=.siliconexpert.com;Path=/;Max-Age=86400');
  // res.header('Set-cookie', 'freeUser=123; sameSite:none ;Secure;domain=.siliconexpert.com;Path=/; Max-Age=86400');
  res.send('{"token":"123"}');
});


module.exports = router;
