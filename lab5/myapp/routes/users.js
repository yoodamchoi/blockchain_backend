var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/post', (req, res) => {
    res.send('First name: ' + req.body.firstname);
    res.send('Last name: ' + req.body.lastname);
    res.send('POST received!')
});

module.exports = router;