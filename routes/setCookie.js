var express = require('express');
var router = express.Router();

router.post('/*', function(req, res, next) {
    let freeUser = "123";
    if (req.body['freeUser']) {
        // check the new cookie first
        freeUser = req.body['freeUser'];
    }
    res.set('Set-cookie', 'freeUser=' + freeUser + ';SameSite=None;Secure;Path=/;Max-Age=86400');
    res.send({ "freeUser": freeUser });
});


router.get('/*', function(req, res, next) {
    let freeUser = "123";
    if (req.body['freeUser']) {
        // check the new cookie first
        freeUser = req.body['freeUser'];
    }
    res.set('Set-cookie', 'freeUser=' + freeUser + ';SameSite=None;Secure;Path=/;Max-Age=86400');
    res.send({ "freeUser": freeUser });
});

module.exports = router;