# import requests
import json
def add_ebay():
    api_url = 'http://svcs.ebay.com/services/search/FindingService/v1'
    apikey = '<your api key goes here>'
    parameters = {
        'OPERATION-NAME':'findItemsByKeywords',
        'SERVICE-VERSION':'1.0.0',
        'SECURITY-APPNAME':apikey,
        'RESPONSE-DATA-FORMAT':'json',
        'keywords':'harry potter phoenix'
    }

    print json.dumps(parameters, sort_keys=True, indent=4, separators=(',',' : '))

add_ebay()