!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=function(e,t,n){var a=/#/.test(e),o=void 0!==t&&void 0!==n,i=Array.isArray(e),s="#ffffff",l=0;if(a)l=r(e.substr(1,2)),t=r(e.substr(3,2)),n=r(e.substr(5,2));else if(o)l=parseInt(e),t=parseInt(t),n=parseInt(n);else{if(!i)return s;l=parseInt(e[0]),t=parseInt(e[1]),n=parseInt(e[2])}return Math.sqrt(l*l*.241+t*t*.691+n*n*.068)>130&&(s="#000000"),s};var r=function(e){var t=e.replace(/[^a-f0-9]/gi,"");return parseInt(t,16)}},function(e,t,r){"use strict";r.r(t);var n={0:["tractor","plactor"],1:["able","above","afraid","afternoon","again","age","air","airplane","almost","alone","along","already","also","always","animal","another","anything","around","art","aunt","balloon","bark","barn","basket","beach","bear","because","become","began","begin","behind","believe","below","belt","better","birthday","body","bones","born","bought","bread","bright","broke","brought","busy","cabin","cage","camp","can't","care","carry","catch","cattle","cave","children*","class","close*","cloth","coal","color","corner","cotton","cover","dark","desert","didn't","dinner","dishes","does","done","don't","dragon","draw","dream","drink","early","earth","east","eight","even","ever","every","everyone","everything","eyes","face","family","feeling","felt","few","fight","fishing","flower","flying","follow","forest","forgot","form","found","fourth","free","Friday","friend","front","getting","given","grandmother","great","grew","ground","guess","hair","half","having","head","heard","he's","heat","hello","high","himself","hour","hundred","hurry","hurt","I'd","I'll","I'm","inches","isn't","it's","I've","kept","kids","kind","kitten","knew","knife","lady","large","largest","later","learn","leave","let's","letter","life","list","living","lovely","loving","lunch","mail","making","maybe","mean","merry","might","mind","money","month","morning","mouse","mouth","Mr.","Mrs.","Ms.","music","near","nearly","never","news","noise","nothing","number","o'clock","often","oil","once","orange","order","own","pair","paint","paper","party","pass","past","penny","people","person","picture","place","plan","plane","please","pocket","point","poor","race","reach","reading","ready","real","rich","right","river","rocket","rode","round","rule","running","salt","says","sending","sent","seventh","sew","shall","short","shot","should","sight","sister","sitting","sixth","sled","smoke","soap","someone","something","sometime","song","sorry","sound","south","space","spelling","spent","sport","spring","stairs","stand","state","step","stick","stood","stopped","stove","street","strong","study","such","sugar","summer","Sunday","supper","table","taken","taking","talking","teacher","team","teeth","tenth","that's","their","these","thinking","third","those","thought","throw","tonight","trade","trick","trip","trying","turn","twelve","twenty","uncle","under","upon","wagon","wait","walking","wasn't","watch","water","weather","we're","west","wheat","where","which","wife","wild","win","window","winter","without","woman","won","won't","wool","word","working","world","would","write","wrong","yard","year","yesterday","you're"]},a=["#fed330","#fd9644","#26de81","#2bcbba","#eb3b5a","#f7b731","#20bf6b","#45aaf2","#a55eea","#d1d8e0","#2d98da","#26de81","#2bcbba","#eb3b5a","#fa8231","#f7b731","#20bf6b","#45aaf2","#a55eea","#d1d8e0","#2d98da","#fa9644","#26de81","#2bcbba","#eb3b5a","#fa8231","#f7b731","#20bf6b","#45aaf2","#a55eea","#d1d8e0","#2d98da"],o=r(0),i=r.n(o),s=document.getElementById("word"),l=document.querySelector(".background");function d(e,t){return Math.floor(Math.random()*(t+1-e))+e}function u(e){return Math.round(Math.random())?e:""}document.getElementById("newWord").addEventListener("click",function(){var e,t=function(e=1){var t=n[e];return t[d(0,t.length-1)]}(),r=a[Math.floor(Math.random()*a.length)],o=[i()(r),r],h=Math.round(Math.random());e=0===h?1:0,function(e,t){s.innerHTML=e;var r="translateX("+u("-")+d(0,15)+"vw)",n="translateY("+u("-")+d(0,15)+"vh)";s.style="transform: "+r+" "+n,s.style.fontSize=d(10,25)+"vw",s.style.color=t}(t,o[h]),function(e){l.style.backgroundColor=e}(o[e])})}]);