/**
 * @author  Erick Song
 * @date    2012-07-11
 * @email   ahschl0322@gmail.com
 * @info    page error handler
 *
 */

;(function(win, doc){

    var env = 'development', //development|production
        encode = encodeURIComponent,
        //decode = decodeURIComponent,
        pe = {
        'serviceUrl' : 'http://xxx.com/',
        'newImg' : new Image(),
        'imgs' : doc.images,
        'adr'  : win.location.href,
        'sadr' : '',
        'et' : '',
        'n' : ''
    };

    if(env == 'production' && pe.adr.indexOf('debug=1')<0){
        each(pe.imgs,function(a, b){
            addevent(a,'error',function(ev){
                pe.et = 'img'; pe.n = a.src;
                pe.newImg.src = pe.serviceUrl + 'pe/1.html?et='+ pe.et + '&adr=' + encode(pe.adr) + '&n=' + encode(pe.n);
                a.src = pe.serviceUrl + '/no.gif';
            });
        },this);

        win.onerror = function(message, url, line){
            pe.et = 'js'; pe.sadr = url; pe.n = message;
            pe.newImg.src = pe.serviceUrl + 'pe/1.html?et='+ pe.et + '&adr=' + encode(pe.adr) + '&sadr=' + encode(pe.sadr) +'&n=' + encode(pe.n)  + '&line=' + line + '&agent=' + navigator.userAgent.toLowerCase();
            return true;
        };
    }

    function each(arr, callbcak, scope) {
        var ss = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            if (callbcak.apply(scope, [arr[i], i, ss]) === true) {
                break;
            }
        }
        return ss;
    }

    function addevent(el, eventName, callback) {
        if (el.addEventListener) {
            el.addEventListener(eventName, callback, false);
        } else if (el.attachEvent) {
            el.attachEvent('on' + eventName, callback);
        }
    }

}(this, document));
