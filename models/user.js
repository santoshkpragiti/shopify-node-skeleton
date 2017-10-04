var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  dob: Date,
  gender: String
});

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;
