var meli = require('mercadolibre');
var request = require('request');

let ebay_url = 'http://svcs.ebay.com/services/search/FindingService/v1'
let apikey = ''

var parameters = {
    'OPERATION-NAME':'findItemsByKeywords',
    'SERVICE-VERSION':'1.0.0',
    'SECURITY-APPNAME':apikey,
    'RESPONSE-DATA-FORMAT':'json',
    keywords:'harry potter phoenix'
  };

console.log(datamodel)

request({url:ebay_url, qs:parameters}, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });