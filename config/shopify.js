var ShopifyToken = require('shopify-token');

var shopifyToken = new ShopifyToken({
  apiKey: process.env.API_KEY,
  sharedSecret: process.env.SECRET_KEY,
  redirectUri: `${process.env.APP_URL}/auth/shopify/callback`,
  scope: 'write_script_tags'
});

module.exports = shopifyToken;
