var express = require('express');
var router = express.Router();
var shopifyToken = require('../config/shopify');
var Shop = require('../models/shop');

router.get('/', function(req, res, next) {
  res.redirect(shopifyToken.generateAuthUrl(req.query.shop, "write_script_tags"));
});

router.get('/callback', function(req, res, next) {
  if (shopifyToken.verifyHmac(req.query)) {
    const code = req.query.code;
    const shop = req.query.shop;

    shopifyToken.getAccessToken(shop, code).then((token) => {
      Shop.create({
        domain: shop,
        access_token: token
      }, function(err, shop) {
        if (err) return next(err);
        req.session.shop = shop;
        res.redirect('/');
      });
    }).catch((err) => next(err));
  }
  else {
    res.redirect('/');
  }
});

module.exports = router;
