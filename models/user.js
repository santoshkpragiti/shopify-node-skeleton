var mongoose = require('mongoose');
mongoose.model('User', new mongoose.Schema({
  email: String,
  name: String,
  dob: Date,
  gender: String
}));
