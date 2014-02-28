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
<script type="text/javascript" language="javascript" src="http://yetToBeDecide.com"> 
```

```html
<!--On website footer:-->
    <script>
        growish.renderButton(
            "<your-partner-code>",
            "<product-code>",
            "<product-title>",
            "<product-description>",
            "<product-image-url>",
            "<product-price>",
            "<product-page>"
        );
    </script>  
```

* <b>*partner-code:</b> An alphanumeric code given to all our partner, serve to identify you site as a valid partner site.
* <b>*code:</b> This is the code of your product, you can use up to 50 characters to identify it.
* <b>*title:</b> Title or name of your product, you can use up to 150 charaters.
* <b>description: </b> Description of your product, you can use up to 300 charaters.
* <b>*image-url:</b> The url of the main image of your product.
* <b>*price:</b> The product price (+ shipping!), you can use up to two decimal spaces, point separated. (XXX.XX)
* <b>*page:</b> The url of the product page, you can also use document.URL.

<b>[*] mandatory field.</b>

```html
<!--Any where you like the button to be-->
<div id="growishButton"></div>
```

