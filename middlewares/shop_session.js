var Shop = require('../models/shop')

var shopSession = function(req, res, next) {
  if (!req.session.shop && req.query.shop) {
    Shop.findOne({domain: req.query.shop}, function(err, shop) {
      if (shop) req.session.shop = shop;
      next();
    });
  }
  else next();
}

module.exports = shopSession;
