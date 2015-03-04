var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/inkpicker/:id', function(req, res, next) {
    // receive item id

    // pass item id to laser
    res.send(200);
})

module.exports = router;
