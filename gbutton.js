var growish = (function () {

    var gw_popup_url = "https://pay.growish.com/bframe";
    var loadedFlag = false;
    var allowed_origin = "https://pay.growish.com";
    var product = { "cmd":"setInfo", "partner_id":"", "product_code":"", "name":"", "description":"", "img_url":"", "price":"", "product_url":"" };
    var gButton_img;
    var gPopup;

    return {

        setBmode: function(mode){
            switch(mode) {

                case 'black-flat':
                    gButton_img = "https://b70a0da9b58b4dd5f85b-aba7ce2dbb3121f457ae706f7c576a08.ssl.cf3.rackcdn.com/gButton-black.jpg";
                    break;
                case 'blue-flat':
                    gButton_img = "https://b70a0da9b58b4dd5f85b-aba7ce2dbb3121f457ae706f7c576a08.ssl.cf3.rackcdn.com/gButton-blue.jpg";
                    break;
                case 'blue':
                    gButton_img = "https://b70a0da9b58b4dd5f85b-aba7ce2dbb3121f457ae706f7c576a08.ssl.cf3.rackcdn.com/gButtonRnd-blue.png";
                    break;
                case 'black':
                    gButton_img = "https://b70a0da9b58b4dd5f85b-aba7ce2dbb3121f457ae706f7c576a08.ssl.cf3.rackcdn.com/gButtonRnd-black.png";
                    break;
                default:
                    gButton_img = "https://b70a0da9b58b4dd5f85b-aba7ce2dbb3121f457ae706f7c576a08.ssl.cf3.rackcdn.com/gButton-black.png";
            }
        },

        firePopup: function(url, title, w, h) {
            var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
            var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

            var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
            var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

            var left = ((width / 2) - (w / 2)) + dualScreenLeft;
            var top = ((height / 2) - (h / 2)) + dualScreenTop;
            gPopup = window.open(url, title, 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

            if (window.focus) {
                gPopup.focus();
            }
        },
        load: function(options, debug) {
            var cPrice = parseFloat(options['productPrice']);
            if(cPrice <=5000 && cPrice > 49) {
                product["partner_id"] = options['partnerId'];
                product["product_code"] = options['productCode'];
                product["name"] = options['productName'];
                product["description"] = options['productDescription'];
                product["img_url"] = options['productImageUrl'];
                product["price"] = cPrice;
                product["product_url"] = options['productUrl'];
                product["shipping_included"] = options['productShippingCostIncluded'];

                if(!loadedFlag)
                    window.addEventListener("message", growish.receiver, false);

                loadedFlag = true;
                document.getElementById('growishButton').innerHTML = '<a href="#" onClick="growish.firePopup(\'' + gw_popup_url + '/' + product['partner_id'] + '\' ,\'Growish\',620,400); return false;"><img src="' + gButton_img + '" /></a>';
            } else if((cPrice>999 || cPrice<50) && typeof debug != "undefined" && debug) {
                growish.debugOutput("Product price over the allowed range");
            }
        },
        debugOutput: function(msg) {
            console.log("*** (GROWISH API) DEBUG MSG: " + msg);
        },
        receiver: function(event) {
            if(event.origin === allowed_origin) {
                try
                {
                    var data = JSON.parse(event.data);
                    if(data.cmd === "getInfo")
                        gPopup.postMessage(JSON.stringify(product), allowed_origin);
                    if(data.cmd === "closeMe")
                        gPopup.close();
                }
                catch(e)
                {
                    return false;
                }
            }
        }
    }

}());
growish.setBmode('black');
