(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var _this=void 0;navigator.clipboard?document.querySelectorAll("[data-clipboard]").forEach(function(a){var b=document.createElement("button");b.className="fa fa-clipboard full",a.parentNode.append(b),b.addEventListener("click",copyToClipboard.bind(_this,a,b))}):console.warn("No clipboard support");function copyToClipboard(a,b){//console.log('Click !');
navigator.clipboard.writeText(a.getAttribute("data-clipboard")).then(function(){b.className="fa fa-clipboard",setTimeout(function(){return b.className="fa fa-clipboard"},2e3)})["catch"](function(a){return console.warn(a)})}

},{}],2:[function(require,module,exports){
"use strict";"undefined"==typeof party?console.log("undefined"):console.log(party);

},{}],3:[function(require,module,exports){
"use strict";navigator.share?document.querySelectorAll("[data-share-url]").forEach(function(a){var b=document.createElement("button");b.innerHTML="Partager",a.parentNode.append(b),navigator.share({title:a.getAttribute("data-share-title"),text:a.getAttribute("data-share-text"),url:a.getAttribute("data-share-url")}).then(function(){return console.log("Partage r\xE9ussi")})["catch"](function(a){return console.warn("Erreur de partage \xE0 cause de",a)})}):console.warn("No sharing support");

},{}]},{},[1,2,3]);
