import requests
import json
def add_ebay():
        api_url = 'http://svcs.ebay.com/services/search/FindingService/v1'
        apikey = 'Alejandr-hello-PRD-c8dfd86bc-77e411ce'
        parameters = {
            'OPERATION-NAME':'findItemsByKeywords',
            'SERVICE-VERSION':'1.0.0',
            'SECURITY-APPNAME':apikey,
            'RESPONSE-DATA-FORMAT':'json',
            'keywords':'harry potter phoenix',
            'paginationInput.entriesPerPage':3
        }
        resp = requests.get(api_url, params=parameters)
        resp.raise_for_status()
        data = json.loads(resp.text)
        
        items = data['findItemsByKeywordsResponse'][0]['searchResult'][0]['item']

        print "\n\n"
        print data['findItemsByKeywordsResponse'][0]['searchResult'][0]['item'][0]['title']

add_ebay()