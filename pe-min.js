/**
 * @author  Erick Song
 * @date    2012-07-11
 * @email   ahschl0322@gmail.com
 * @info    page error handler
 *
 */
!function(a,b){function c(a,b,c){for(var d=[],e=0,f=a.length;f>e&&b.apply(c,[a[e],e,d])!==!0;e++);return d}function d(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}var e="development",f=encodeURIComponent,g={serviceUrl:"http://xxx.com/",newImg:new Image,imgs:b.images,adr:a.location.href,sadr:"",et:"",n:""};"production"==e&&g.adr.indexOf("debug=1")<0&&(c(g.imgs,function(a){d(a,"error",function(){g.et="img",g.n=a.src,g.newImg.src=g.serviceUrl+"pe/1.html?et="+g.et+"&adr="+f(g.adr)+"&n="+f(g.n),a.src=g.serviceUrl+"/no.gif"})},this),a.onerror=function(a,b,c){return g.et="js",g.sadr=b,g.n=a,g.newImg.src=g.serviceUrl+"pe/1.html?et="+g.et+"&adr="+f(g.adr)+"&sadr="+f(g.sadr)+"&n="+f(g.n)+"&line="+c+"&agent="+navigator.userAgent.toLowerCase(),!0})}(this,document);
