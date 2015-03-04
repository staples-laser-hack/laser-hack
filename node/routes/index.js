var express = require('express');
var router = express.Router();
var request = require('request');
var _ = require('lodash');

var data = [
    {id: 0, make: "hp", led: 255, locationx: 1960, locationy: 2260, img: "images/i0.jpg"},
    {id: 1, make: "hp", led: 255, locationx: 1960, locationy: 2200, img: "images/i1.jpg"},
    {id: 2, make: "hp", led: 255, locationx: 1935, locationy: 2150, img: "images/i2.jpg"},
    {id: 3, make: "hp", led: 255, locationx: 2040, locationy: 2250, img: "images/i3.jpg"},
    {id: 4, make: "hp", led: 255, locationx: 2040, locationy: 2200, img: "images/i4.jpg"},
    {id: 5, make: "hp", led: 255, locationx: 2040, locationy: 2150, img: "images/i5.jpg"},
    {id: 6, make: "hp", led: 255, locationx: 2150, locationy: 2250, img: "images/i6.jpg"},
    {id: 7, make: "hp", led: 255, locationx: 2150, locationy: 2200, img: "images/i7.jpg"},
    {id: 8, make: "hp", led: 255, locationx: 2150, locationy: 2150, img: "images/i8.jpg"},
    {id: 9, make: "hp", led: 255, locationx: 1800, locationy: 2200, img: ""}, // Start position
    {id: 10, make: "hp", led: 0, locationx: 1800, locationy: 2200, img: ""} // Off position
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Staples Laser Ink Finder',
      apiUrl: '/inkpicker/',
      data: data
  });
});

router.get('/inkpicker/:id', function(req, res, next) {
    // receive item id
    console.log('inkpicker id = ', req.params.id);

    // pass item id to laser
    var item = _.find(data, function(element) {
        return element.id == req.params.id;
    });

    request({
        uri: 'http://10.29.172.245/cgi-bin/laser.pl',
        method: 'GET',
        qs: {time: 50, led: item.led, chan1: item.locationx, chan2: item.locationy}
        
    }, function(error, response, body) {
        if (error || res.statusCode != 200) {
            console.log('Error communicating with laser server', error);
        }
        console.log('body', body);
        console.log('path', response.request.path)

        // now tell the client we're done
        res.send(JSON.stringify({"status": "OK"}));
    });
});

module.exports = router;
