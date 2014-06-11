/*
 Connects to the Paypal SDK, and shows an example of adding a credit card to the system.
 @param params.card : JSON object representing the card being created - expects type, number, expire_month, expire_year, cvv2, first_name, last_name
 */
exports.paypal = function(params, cb) {
  var paypal_sdk = require('paypal-rest-sdk');
  paypal_sdk.configure({
    'host': process.env.PAYPAL_HOST || 'api.paypal.com',
    'port': '443',
    'client_id': process.env.PAYPAL_CLIENT_ID,
    'client_secret': process.env.PAYPAL_CLIENT_SECRET
  });

  return paypal_sdk.credit_card.create(params.card, cb);
};