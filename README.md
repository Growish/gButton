Growish Button
=========

Technical documentation (work in progress...)


The gButton is a pure javascript implementation of the [Growish] services. Including a remote JS library or your pages and an initialization code, the button is render into a target div you can place any where in your site.




Current Version
----

1.0.1 Beta, First public release

Advantages
----

* Pure javascript, no jQuery or any other external libraries.  
* Lightweight
* No need for backend development

Usage
--------------

```html
<!--On website header:-->
<script type="text/javascript" language="javascript" src="https://b70a0da9b58b4dd5f85b-aba7ce2dbb3121f457ae706f7c576a08.ssl.cf3.rackcdn.com/gbutton.min.js"></script>
```

```html
<!--On website footer:-->
    <script>
        growish.load( { 
            partnerId: "<your-partner-code>",
            productCode: "<product-code>",
            productName: "<product-title>",
            productDescription: "<product-description>",
            productImageUrl: "<product-image-url>",
            productPrice: "<product-price>",
            productUrl: "<product-page>",
            productShippingCostIncluded: true
        });
    </script>  
```

* <b>*partnerId:</b> An alphanumeric code given to all our partner, serve to identify you site as a valid partner site.
* <b>*productCode:</b> This is the code of your product, you can use up to 50 characters to identify it.
* <b>*productName:</b> Title or name of your product, you can use up to 150 charaters.
* <b>productDescription: </b> Description of your product, you can use up to 300 charaters.
* <b>*productImageUrl:</b> The url of the main image of your product.
* <b>*productPrice:</b> The product price (+ shipping!), you can use up to two decimal spaces, point separated. (XXX.XX)
* <b>*productUrl:</b> The url of the product page, you can also use document.URL.
* <b>*productShippingCostIncluded:</b> Boolean value to define is shipping cost is already included in productPrice.

<b>[*] mandatory field.</b>

```html
<!--Any where you like the button to be-->
<div id="growishButton"></div>
```

