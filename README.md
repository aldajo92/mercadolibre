# mercadolibre

## Get application ID:
https://developers.mercadolibre.com.co

## Get access token:
http://developers.mercadolibre.com/authentication-and-authorization/

## Publish item:
http://developers-forum.mercadolibre.com/topic/52-crear-publicacion-con-la-api/
```
{
	"title":"Anteojos Ray Ban Wayfare",
	"category_id":"MCO118109",
	"price":10000,
	"currency_id":"COP",
	"available_quantity":1,
	"buying_mode":"buy_it_now",
	"listing_type_id":"bronze",
	"condition":"new",
	"description": "Item:, <strong> Ray-Ban WAYFARER Gloss Black RB2140 901 </strong> Model: RB2140. Size: 50mm. Name: WAYFARER. Color: Gloss Black. Includes Ray-Ban Carrying Case and Cleaning Cloth. New in Box",
	"video_id": "https://www.youtube.com/watch?v=mlfwp3e8lgk",
	"warranty": "12 months by Ray Ban",
	"pictures":
	[
		{"source":"http://upload.wikimedia.org/wikipedia/commons/f/fd/Ray_Ban_Original_Wayfarer.jpg"},
		{"source":"http://en.wikipedia.org/wiki/File:Teashades.gif"}
	]
}
```

## Category attributes example: 
https://api.mercadolibre.com/categories/MCO118105/attributes

## Error category attributes example:
```
{
    "message": "Validation error",
    "error": "validation_error",
    "status": 400,
    "cause": [
        {
            "code": "item.attributes.missing_required",
            "message": "The attributes [11000] are required for category MCO118109. Check the attribute is present in the attributes list or in all variations attributes_combination or attributes."
        }
    ]
}
```