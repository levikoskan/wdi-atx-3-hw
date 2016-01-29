var express = require('express');
var router = express.Router();
var compliments = [
"Your instructors love you",
"High five = ^5",
"Is it Ruby Tuesday yet?",
"It's almost beer o'clock",
"The Force is strong with you"
];
colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080", "#FF0000"];
var num = 5;

function random(){
  return Math.floor((Math.random() * num));
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome', compliment: compliments[random()], color: colors[random()] });
});

router.get('/:name', function(req, res, next){
  var name = req.params.name;
  // now this allows us to have a url like users/mike
  res.render('index', { title: 'Welcome', compliment: (name + ', ' + compliments[random()]), color: colors[random()] });
})

router.post('/', function(req,res, next){
  var newCompliment = req.body.compliment;
  num += 1;
  console.log(compliments);
  compliments.push(newCompliment);


})

module.exports = router;
