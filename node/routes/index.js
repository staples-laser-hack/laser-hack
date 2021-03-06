var _ = require('lodash');
var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../../config');
var url = require('url');

var data = [
    {id: 1, led: 255, img: "images/i0.jpg"},
    {id: 2, led: 255, img: "images/i1.jpg"},
    {id: 3, led: 255, img: "images/i2.jpg"},
    {id: 4, led: 255, img: "images/i3.jpg"},
    {id: 5, led: 255, img: "images/i4.jpg"},
    {id: 6, led: 255, img: "images/i5.jpg"},
    {id: 7, led: 255, img: "images/i6.jpg"},
    {id: 8, led: 255, img: "images/i7.jpg"},
    {id: 9, led: 255, img: "images/i8.jpg"},
    {id: 16, led: 255}, // Start position
    {id: 17, led: 0} // Off position

];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Staples Laser Ink Finder',
      apiUrl: '/inkpicker/',
      data: data
  });
});


// calculate the laser server url
var laserUrl = url.format({protocol: 'http', host: config.laserServer, pathname: config.laserPath});
console.log('laser server url: ', laserUrl);

router.get('/inkpicker/:id', function(req, res, next) {
    // receive item id
    console.log('inkpicker id = ', req.params.id);

    // fetch item from data array
    var item = _.find(data, function(element) {
        return element.id == req.params.id;
    });

    // fire request to laser
    request({
        uri: laserUrl,
        method: 'GET',
        qs: {time: 50, led: item.led, preset: req.params.id},
        timeout: 500,
        time: true
    }, function(error, response, body) {
        if (error || res.statusCode != 200) {
            console.log('Error communicating with the LASER!', error);
            return res.status(500).send('error communicating with laser ' + error);
        }

        // now tell the client we're done
        res.send(JSON.stringify({"status": "OK", "elapsed-time": res.elapsedTime}));
    });
});

module.exports = router;
