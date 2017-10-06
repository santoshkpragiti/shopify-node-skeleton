var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopSchema = new mongoose.Schema({
  domain: String,
  access_token: String
});

var shopModel = mongoose.model('Shop', shopSchema);

module.exports = shopModel;
