parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L/DU":[function(require,module,exports) {

},{"./../assets/barcelona.svg":[["barcelona.69e873af.svg","Hzox"],"Hzox"],"./../assets/stroke.svg":[["stroke.83fcf0dc.svg","phjT"],"phjT"],"./../assets/arrow_left.svg":[["arrow_left.278052e0.svg","wf9H"],"wf9H"],"./../assets/arrow_right.svg":[["arrow_right.f03ce987.svg","yTrm"],"yTrm"],"./../assets/github.svg":[["github.a77f7ca7.svg","IUhS"],"IUhS"],"./../assets/react.svg":[["react.c8b2db89.svg","aOGc"],"aOGc"],"./../assets/css.svg":[["css.3af5b254.svg","rrdv"],"rrdv"],"./../assets/js.svg":[["js.84513789.svg","XsDT"],"XsDT"],"./../assets/figma.png":[["figma.720e431b.png","tGho"],"tGho"],"./../assets/csharp.svg":[["csharp.abf7566e.svg","Jg3z"],"Jg3z"],"./../assets/unity.svg":[["unity.156db48e.svg","xFyY"],"xFyY"],"./../assets/gamedesign.png":[["gamedesign.f5358d47.png","89mE"],"89mE"],"./../assets/interaction.png":[["interaction.b93ee337.png","6iAH"],"6iAH"],"./../assets/project.png":[["project.eb18f5e8.png","N+Vh"],"N+Vh"],"./../assets/research.png":[["research.1afc1de0.png","8T/P"],"8T/P"],"./../assets/mail.svg":[["mail.730c73a0.svg","s+jc"],"s+jc"],"./../assets/linkedin.svg":[["linkedin.1be18448.svg","K2dx"],"K2dx"],"./../assets/github_nofill.svg":[["github_nofill.d85205f5.svg","alpj"],"alpj"],"./../assets/arrow_up.svg":[["arrow_up.f6201d1c.svg","H/9h"],"H/9h"]}],"epB2":[function(require,module,exports) {
"use strict";function t(t){var e=document.querySelectorAll(t);return Array.prototype.slice.call(e)}require("./styles/main.scss");var e=t(".slide"),s=t("[data-action='slideLeft']"),r=t("[data-action='slideRight']"),c=t(".nav-dot"),n=0,a=function(){e[n].classList.remove("current"),c[n].classList.remove("currentDot"),n===e.length-1?n=0:n++,e[n].classList.add("current"),c[n].classList.add("currentDot")},i=function(){e[n].classList.remove("current"),c[n].classList.remove("currentDot"),0===n?n=e.length-1:n--,e[n].classList.add("current"),c[n].classList.add("currentDot")};s.forEach(function(t){t.addEventListener("click",i)}),r.forEach(function(t){t.addEventListener("click",a)}),c.forEach(function(t){t.addEventListener("click",function(){e[n].classList.remove("current"),c[n].classList.remove("currentDot");var t=c.indexOf(this);e[n=t].classList.add("current"),c[n].classList.add("currentDot")})});
},{"./styles/main.scss":"L/DU"}]},{},["epB2"], null)
//# sourceMappingURL=main.666aea56.js.map