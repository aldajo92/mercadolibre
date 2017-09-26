var meli = require('mercadolibre');
var request = require('request');

let ebay_url = 'http://svcs.ebay.com/services/search/FindingService/v1'
let apikey = 'Alejandr-hello-PRD-c8dfd86bc-77e411ce'

var parameters = {
    'OPERATION-NAME':'findItemsByKeywords',
    'SERVICE-VERSION':'1.0.0',
    'SECURITY-APPNAME':apikey,
    'RESPONSE-DATA-FORMAT':'json',
    keywords:'harry potter phoenix',
    'paginationInput.entriesPerPage':3
  };

console.log(parameters)

request({url:ebay_url, qs:parameters}, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    
    var jsonObject = JSON.parse(body);
    console.log(typeof jsonObject)
    handleBody(jsonObject);
  });

function handleBody(body){
  items = body.findItemsByKeywordsResponse[0].searchResult[0].item
  console.log(items)
}

// https://developer.ebay.com/Devzone/finding/HowTo/GettingStarted_JS_NV_JSON/GettingStarted_JS_NV_JSON.html
// https://developer.ebay.com/DevZone/finding/CallRef/index.html
// https://developer.ebay.com/devzone/guides/ebayfeatures/Basics/Call-SandboxTesting.html#CreatingaTestUser