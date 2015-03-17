var _ = require('lodash');
var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../../config');
var url = require('url');

var data = [
    {id: 0, make: "hp", led: 255, preset: 0, img: "images/i0.jpg"},
    {id: 1, make: "hp", led: 255, preset: 1, img: "images/i1.jpg"},
    {id: 2, make: "hp", led: 255, preset: 2, img: "images/i2.jpg"},
    {id: 3, make: "hp", led: 255, preset: 3, img: "images/i3.jpg"},
    {id: 4, make: "hp", led: 255, preset: 4, img: "images/i4.jpg"},
    {id: 5, make: "hp", led: 255, preset: 5, img: "images/i5.jpg"},
    {id: 6, make: "hp", led: 255, preset: 6, img: "images/i6.jpg"},
    {id: 7, make: "hp", led: 255, preset: 7, img: "images/i7.jpg"},
    {id: 8, make: "hp", led: 255, preset: 8, img: "images/i8.jpg"},
    {id: 9, make: "hp", led: 255, preset: 9, img: ""}, // Start position
    {id: 10, make: "hp", led: 0, preset: 10, img: ""} // Off position
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
console.log(laserUrl)

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
        qs: {time: 50, led: item.led, preset: item.preset},
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
