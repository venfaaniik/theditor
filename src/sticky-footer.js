!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.stickyFooter=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,o,i,c={},r="querySelector"in document&&"addEventListener"in e,l={selectorWrap:"[data-sticky-wrap]",selectorFooter:"[data-sticky-footer]",callback:function(){}},u=function(){var e={},t=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=u(!0,e[o],n[o]):e[o]=n[o])};n<o;n++){i(arguments[n])}return e},d=function(e,t,n){e.style.minHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0)-t.offsetHeight+"px",n.callback()};c.destroy=function(){t&&(document.documentElement.style.minHeight="",document.body.style.minHeight="",n.style.minHeight="",window.removeEventListener("resize",a,!1),t=null,n=null,o=null,i=null)};var a=function(){i||(i=setTimeout(function(){i=null,d(n,o,t)},66))};return c.init=function(e){r&&(c.destroy(),t=u(l,e||{}),n=document.querySelector(t.selectorWrap),o=document.querySelector(t.selectorFooter),n&&o&&(document.documentElement.style.minHeight="100%",document.body.style.minHeight="100%",d(n,o,t),window.addEventListener("resize",a,!1)))},c});