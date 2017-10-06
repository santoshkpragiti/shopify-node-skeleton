var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.session.shop) {
    res.render('install');
  }
  else {
    res.render('index', { shop_url: 'https://' + req.session.shop.domain });
  }
});

router.post('/', function(req, res, next) {
  res.redirect(`/auth/shopify?shop=${req.body.shop}`);
});

module.exports = router;
