parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
function t(t){var e=document.querySelectorAll(t);return Array.prototype.slice.call(e)}var e=t(".slide"),c=t("[data-action='slideLeft']"),r=t("[data-action='slideRight']"),s=t(".nav-dot"),n=0,a=function(){e[n].classList.remove("current"),s[n].classList.remove("currentDot"),n===e.length-1?n=0:n++,e[n].classList.add("current"),s[n].classList.add("currentDot")},i=function(){e[n].classList.remove("current"),s[n].classList.remove("currentDot"),0===n?n=e.length-1:n--,e[n].classList.add("current"),s[n].classList.add("currentDot")};c.forEach(function(t){t.addEventListener("click",i)}),r.forEach(function(t){t.addEventListener("click",a)}),s.forEach(function(t){t.addEventListener("click",function(){e[n].classList.remove("current"),s[n].classList.remove("currentDot");var t=s.indexOf(this);e[n=t].classList.add("current"),s[n].classList.add("currentDot")})});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.666619bc.js.map