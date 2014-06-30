var growish = (function () {

    var gw_popup_url = "https://growish.com/bframe";
    var allowed_origin = "*";
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

        renderButton: function(partner_id, product_code, name, description, img_url, price, product_url) {
            if(parseFloat(price)<=999) {
                product["partner_id"] = partner_id;
                product["product_code"] = product_code;
                product["name"] = name;
                product["description"] = description;
                product["img_url"] = img_url;
                product["price"] = price;
                product["product_url"] = product_url;
                product["partner_id"] = partner_id;
                window.addEventListener("message", growish.receiver, false);
                document.getElementById('growishButton').innerHTML = '<a href="#" onClick="growish.firePopup(\'' + gw_popup_url + '\' ,\'Growish\',620,400); return false;"><img src="' + gButton_img + '" /></a>';
            }
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
growish.setBmode('blue');