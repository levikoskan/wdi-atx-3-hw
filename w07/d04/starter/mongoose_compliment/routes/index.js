var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');

function randomColor() {
  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
  return colors[Math.floor(Math.random()*colors.length)];
}

function randomCompliment(complimentArray) {
  var documents = complimentArray;
  return documents[Math.floor(Math.random()*documents.length)];
}

/* GET compliment form. */
router.get('/compliment_form', function(req, res, next) {
  var color = randomColor();
  res.render('compliment_form', { title: 'WDI Emergency Compliment', color: color });
});

/* GET home page with queried name. */
router.get('/(:name)?', function(req, res, next) {
  name = req.params.name || "Friend";
  var color = randomColor();

  // USE MONGOOSE TO GET A RANDOM COMPLIMENT FROM THE DATABASE, THEN RENDER THE VIEW IN THE DATABASE CALLBACK

  Compliment.find({}, 'compliment', function(err, data) {
    if (err) console.log(err);
    var random = randomCompliment(data);
    console.log(random.compliment);
    res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: random.compliment });
  });
});

/* POST compliment. */
router.post('/', function(req, res, next) {
  var newCompliment = req.body.compliment;

  var newCompliment = Compliment({
    compliment: newCompliment
  });

  newCompliment.save(function(err){
    if (err) console.log(err);

    res.redirect('/');
  })

  // USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL
});
module.exports = router;
