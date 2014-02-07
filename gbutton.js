var growish = (function () {

    var lcc, ifrm;
    var gw_iframe_url = "https://pay-growish.digitalmagicslab.com/bframe";
    var allowed_origin = "https://pay-growish.digitalmagicslab.com";
	var gw_cssfile = "http://127.0.0.1:81/Growish/button%20plugin/css/gbutton.css";
    var product = { "cmd":"setInfo", "partner_id":"", "product_code":"", "name":"", "description":"", "img_url":"", "price":"", "product_url":"" };
    var btnmode = "default";
    var gButton_img = "http://127.0.0.1:81/ecommerceDemo/gButtonDemo1.png";
    var gwModal = function () {
    var c = {}, a = {}, d = document.createElement("div"),
        b = document.createElement("div"),
        f = document.createElement("div"),
        h = document.createElement("div"),
        k = document.createElement("div"),
        l, p;
    c.open = function (e) {
        a.width = e.width || "auto";
        a.height = e.height || "auto";
        a.lock = e.lock || !1;
        a.hideClose = e.hideClose || !1;
        a.draggable = e.draggable || !1;
        a.closeAfter = e.closeAfter || 0;
        a.closeCallback = e.closeCallback || !1;
        a.openCallback = e.openCallback || !1;
        a.hideOverlay = e.hideOverlay || !1;
        l = function () {
            c.center({})
        };
        e.content && !e.ajaxContent ? h.innerHTML = e.content : e.ajaxContent && !e.content ? (b.className = "modal-loading", c.ajax(e.ajaxContent, function (a) {
            h.innerHTML = a
        })) : h.innerHTML = "";
        b.style.width = a.width;
        b.style.height = a.height;
        c.center({});
        if (a.lock || a.hideClose) k.style.visibility = "hidden";
        a.hideOverlay || (d.style.visibility = "visible");
        b.style.visibility = "visible";
        document.onkeypress = function (b) {
            27 === b.keyCode && !0 !== a.lock && c.close()
        };
        k.onclick = function () {
            if (a.hideClose) return !1;
            c.close()
        };
        d.onclick = function () {
            if (a.lock) return !1;
            c.close()
        };
        window.addEventListener ? window.addEventListener("resize", l, !1) : window.attachEvent && window.attachEvent("onresize", l);
        a.draggable ? (f.style.cursor = "move", f.onmousedown = function (a) {
            c.drag(a);
            return !1
        }) : f.onmousedown = function () {
            return !1
        };
        0 < a.closeAfter && (p = window.setTimeout(function () {
            c.close()
        }, 1E3 * a.closeAfter));
        a.openCallback && a.openCallback()
    };
    c.drag = function (a) {
        var c = void 0 !== window.event ? window.event.clientX : a.clientX,
            m = void 0 !== window.event ? window.event.clientY : a.clientY,
            g = c - b.offsetLeft,
            d = m - b.offsetTop;
        document.onmousemove = function (a) {
            c = void 0 !== window.event ? window.event.clientX : a.clientX;
            m = void 0 !== window.event ? window.event.clientY : a.clientY;
            b.style.left = 0 < c - g ? c - g + "px" : 0;
            b.style.top = 0 < m - d ? m - d + "px" : 0;
            document.onmouseup = function () {
                window.document.onmousemove = null
            }
        }
    };
    c.ajax = function (a, c) {
        var d, g = !1,
            f = [
                function () {
                    return new window.XMLHttpRequest
                },
                function () {
                    return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
                },
                function () {
                    return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
                },
                function () {
                    return new window.ActiveXObject("Msxml2.XMLHTTP")
                }
            ];
        for (d = 0; d < f.length; d += 1) {
            try {
                g = f[d]()
            } catch (h) {}
            if (!1 !== g) break
        }
        g.open("GET", a, !0);
        g.onreadystatechange = function () {
            4 === g.readyState && (c(g.responseText), b.removeAttribute("class"))
        };
        g.send(null)
    };
    c.close = function () {
        h.innerHTML = "";
        d.setAttribute("style", "");
        d.style.cssText = "";
        d.style.visibility = "hidden";
        b.setAttribute("style", "");
        b.style.cssText = "";
        b.style.visibility = "hidden";
        f.style.cursor = "default";
        k.setAttribute("style", "");
        k.style.cssText = "";
        p && window.clearTimeout(p);
        a.closeCallback && a.closeCallback();
        window.removeEventListener ? window.removeEventListener("resize", l, !1) : window.detachEvent && window.detachEvent("onresize", l)
    };
    c.center = function (a) {
        var c = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
            f = Math.max(b.clientWidth, b.offsetWidth),
            g = Math.max(b.clientHeight, b.offsetHeight),
            h = 0,
            k = 0,
            l = 0,
            n = 0;
        "number" === typeof window.innerWidth ? (h = window.innerWidth, k = window.innerHeight) : document.documentElement && document.documentElement.clientWidth && (h = document.documentElement.clientWidth, k = document.documentElement.clientHeight);
        "number" === typeof window.pageYOffset ? (n = window.pageYOffset, l = window.pageXOffset) : document.body && document.body.scrollLeft ? (n = document.body.scrollTop, l = document.body.scrollLeft) : document.documentElement && document.documentElement.scrollLeft && (n = document.documentElement.scrollTop, l = document.documentElement.scrollLeft);
        a.horizontalOnly || (b.style.top = n + k / 2 - g / 2 + "px");
        b.style.left = l + h / 2 - f / 2 + "px";
        d.style.height = c + "px";
        d.style.width = "100%"
    };
    d.setAttribute("id", "pctmodal-overlay");
    b.setAttribute("id", "pctmodal-container");
    f.setAttribute("id", "pctmodal-header");
    h.setAttribute("id", "pctmodal-content");
    k.setAttribute("id", "pctmodal-close");
    f.appendChild(k);
    b.appendChild(f);
    b.appendChild(h);
    d.style.visibility = "hidden";
    b.style.visibility = "hidden";
    window.addEventListener ? window.addEventListener("load", function () {
        document.body.appendChild(d);
        document.body.appendChild(b)
    }, !1) : window.attachEvent && window.attachEvent("onload", function () {
        document.body.appendChild(d);
        document.body.appendChild(b)
    });
    return c
}();

		
    return {

        setBmode: function(mode){
            switch(mode) {

                case 'default':
                    gButton_img = "http://127.0.0.1:81/ecommerceDemo/gButtonDemo1.png";
                break;
                case 'minimal':
                    gButton_img = "http://127.0.0.1:81/ecommerceDemo/gButtonDemo1.png";
                break;
                case 'extended':
                    gButton_img = "http://127.0.0.1:81/ecommerceDemo/gButtonDemo1.png";
                break;
                default:
                    gButton_img = "http://127.0.0.1:81/ecommerceDemo/gButtonDemo1.png";
                }
        },

        renderButton: function(partner_id, product_code, name, description, img_url, price, product_url) {
            
            product["partner_id"] = partner_id;
            product["product_code"] = product_code;
            product["name"] = name;
            product["description"] = description;
            product["img_url"] = img_url;
            product["price"] = price;
            product["product_url"] = product_url;
            product["partner_id"] = partner_id;
            
            document.getElementById('growishButton').innerHTML = '<a href="#" onClick="growish.showModal(); return false;"><img src="' + gButton_img + '" /></a>';
        },
        gw_loadCSS: function() {
            var fileref=document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", gw_cssfile);
            if (typeof fileref!="undefined")
                document.getElementsByTagName("head")[0].appendChild(fileref);
        },
        loadXDM: function() { //DEPRECATED
            var h = "600", n = "400";
            lcc = new easyXDM.Socket({
                remote: gw_iframe_url,
                container: document.getElementById("growish_remote"),
                props: {
                    style: {
                        width: h + "px",
                        height: n + "px"
                    }
                },
                onReady: function () {},
                onMessage: function (b, c) {
                    console.log("G->  " + b);
                    var data = JSON.parse(b);
                    if(data.cmd === "getInfo") {
                        data = JSON.stringify(product);
                        lcc.postMessage(data);
                    }
                }
            });
        },
        comLayer: function() {
            window.addEventListener("message", growish.receiver, false);
            ifrm = document.createElement("IFRAME");
            ifrm.setAttribute("src", gw_iframe_url);
            ifrm.setAttribute("id", "growish_com_iframe");
            ifrm.setAttribute("style", "border: 0px none transparent; padding: 0px; overflow: hidden;");
            ifrm.style.width = 600+"px";
            ifrm.style.height = 400+"px";
            document.getElementById("growish_remote").appendChild(ifrm);
        },
        receiver: function(event) {
            if(event.origin === allowed_origin) {
                try
                {
                   var data = JSON.parse(event.data);
                   if(data.cmd === "getInfo")
                        document.getElementById("growish_com_iframe").contentWindow.postMessage(JSON.stringify(product), allowed_origin);
                }
                catch(e)
                {
                   return false;
                }
            }
        },
        showModal: function() {
            var w = "600"; var h = "400";
            gwModal.open({
                content: '<div id="growish_remote"></div>',
                draggable: true,
                width: w + 'px',
                height: h + 'px',
                openCallback: function () {
                    //growish.loadXDM();
                    growish.comLayer();
                }
            });
        }
    }
}());

growish.gw_loadCSS();
