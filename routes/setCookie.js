var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    console.log("********************");
    console.log(req.headers);
    console.log("********************");
    console.log(req.body);

    let freeUser = null;
    if (req.body['freeUser']) {
        // check the new cookie first
        freeUser = req.body['freeUser'];
    }
    res.cookie('3pcookie', 'value', {
        sameSite: 'none',
        secure: true,
        domain: '.siliconexpert.com',
        Path: '/',
        'Max-Age': 86400
    });

    // res.set('Set-cookie', 'freeUser=' + freeUser + ';  Secure;domain=.siliconexpert.com;Path=/; Max-Age=86400');
    res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.set('Access-Control-Allow-Credentials', 'true');
    res.send('{"token":"' + freeUser + '"}');
});


module.exports = router;
