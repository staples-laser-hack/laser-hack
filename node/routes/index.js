var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Staples Laser Ink Finder',
      apiUrl: '/inkpicker/',
      data: [
        {id: 1, make: "hp", model: "hp-101w", locationx: 44, locationy: 44, img: "images/i0.jpg"},
        {id: 2, make: "hp", model: "hp-101w", locationx: 44, locationy: 44, img: "images/i1.jpg"},
        {id: 3, make: "hp", model: "hp-101w", locationx: 44, locationy: 44, img: "images/i2.jpg"},
        {id: 4, make: "hp", model: "hp-101w", locationx: 44, locationy: 44, img: "images/i3.jpg"},
        {id: 5, make: "hp", model: "hp-101w", locationx: 44, locationy: 44, img: "images/i4.jpg"},
        {id: 6, make: "hp", model: "hp-101w", locationx: 44, locationy: 44, img: "images/i5.jpg"},
        {id: 7, make: "hp", model: "hp-101w", locationx: 44, locationy: 44, img: "images/i6.jpg"},
        {id: 8, make: "hp", model: "hp-101w", locationx: 44, locationy: 44, img: "images/i7.jpg"},
        {id: 9, make: "hp", model: "hp-101w", locationx: 44, locationy: 44, img: "images/i8.jpg"},
    ]
  });
});

router.get('/inkpicker/:id', function(req, res, next) {
    // receive item id
    console.log('inkpicker id = ', req.params.id);

    // pass item id to laser

    request('http://www.google.com', function(error, response, body) {
        if (error || res.statusCode != 200) {
            console.log('Error communicating with laser server', error);
        }
        console.log('body', body);

        // now tell the client we're done
        res.send(JSON.stringify({"status": "OK"}));
    })
});

module.exports = router;
