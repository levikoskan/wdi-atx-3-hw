
// var mongoose = require('mongoose');
// ​
// // var Schema = mongoose.Schema;
// ​
// var complimentSchema = new mongoose.Schema({
//   compliment: { type: String, required: true }
// });
// ​
// var Compliment = mongoose.model('Compliment', complimentSchema);
// // Make this available to our other files
// module.exports = Compliment;

var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

var complimentSchema = new mongoose.Schema({
 compliment: { type: String, required: true }
});

var Compliment = mongoose.model('Compliment', complimentSchema);
// Make this available to our other files
module.exports = Compliment;
