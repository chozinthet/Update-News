(function(e){function t(t){for(var n,l,o=t[0],i=t[1],s=t[2],u=0,b=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&b.push(c[l][0]),c[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==c[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},c={app:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/Update-News/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var d=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),c=(r("a4d3"),r("e01a"),{class:"py-20 space-y-4"});function a(e,t,r,a,l,o){var i=Object(n["i"])("Header"),s=Object(n["i"])("Card");return Object(n["g"])(),Object(n["c"])(n["a"],null,[Object(n["f"])(i),Object(n["d"])("div",c,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(l.articles,(function(e){return Object(n["g"])(),Object(n["c"])("div",{key:e.id},[Object(n["f"])(s,{date:e.publishedAt,title:e.title,author:e.author,link:e.url,imgUrl:e.urlToImage,description:e.description},null,8,["date","title","author","link","imgUrl","description"])])})),128))])],64)}r("d3b7");var l={class:"background_image_header bg-center w-full h-80 relative"},o=Object(n["d"])("div",{class:"bg-light-gray w-full h-full opacity-70 absolute top-0 left-0"},null,-1),i=Object(n["d"])("div",{class:"absolute w-full top-2/4 transform -translate-y-2/4 space-y-4 text-center"},[Object(n["d"])("h1",{class:"text-3xl md:text-5xl text-white font-bold"},"Update News"),Object(n["d"])("p",{class:"text-4xl text-dark-cyan font-semibold"},"...")],-1),s=[o,i];function d(e,t,r,c,a,o){return Object(n["g"])(),Object(n["c"])("header",l,s)}var u={name:"Header"},b=r("6b0d"),f=r.n(b);const p=f()(u,[["render",d]]);var j=p,O=(r("ac1f"),r("1276"),r("9911"),{class:"border-2 border-lighter-gray rounded-lg w-11/12 lg:w-1/2 flex flex-col md:flex-row m-auto"}),h={class:"w-full md:w-1/3 h-min-40 overflow-hidden"},g=["src"],v={class:"w-full md:w-2/3 p-4 space-y-4"},y={class:"text-right text-xs text-gray font-semibold"},m={class:"text-lg text-dark-gray font-semibold"},x={class:"text-xs text-light-gray font-semibold"},w={class:"text-sm text-gray font-semibold"},k=["href"],_=Object(n["e"])("` ");function P(e,t,r,c,a,l){return Object(n["g"])(),Object(n["c"])(n["a"],null,[Object(n["d"])("div",O,[Object(n["d"])("div",h,[Object(n["d"])("img",{class:"object-cover w-full h-full",src:r.imgUrl,alt:""},null,8,g)]),Object(n["d"])("div",v,[Object(n["d"])("p",y,Object(n["j"])(r.date.split("T")[0]),1),Object(n["d"])("div",null,[Object(n["d"])("h1",m,Object(n["j"])(r.title),1),Object(n["d"])("h2",x,Object(n["j"])(r.author),1)]),Object(n["d"])("p",w,Object(n["j"])(r.description),1),Object(n["d"])("a",{href:r.link,class:"block text-sm text-cyan underline font-semibold"}," see details ",8,k)])]),_],64)}var S={name:"Card",props:["title","author","description","link","imgUrl","date"]};const U=f()(S,[["render",P]]);var M=U,T="a06c1c6a973e4eb8a2dbf19b2bba3ad5",C=T,H={name:"App",data:function(){return{articles:[]}},components:{Header:j,Card:M},created:function(){var e=this;fetch("https://newsapi.org/v2/top-headlines?country=us&pageSize=30&apiKey="+C).then((function(e){return e.json()})).then((function(t){e.articles=t.articles}))}};const A=f()(H,[["render",a]]);var J=A;r("a766");Object(n["b"])(J).mount("#app")},a766:function(e,t,r){}});
//# sourceMappingURL=app.1705244a.js.map