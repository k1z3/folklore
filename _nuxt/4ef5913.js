(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{281:function(t,e,n){var o=n(3),d=n(282),r=n(109);o({target:"Array",proto:!0},{fill:d}),r("fill")},282:function(t,e,n){"use strict";var o=n(18),d=n(75),r=n(13);t.exports=function(t){for(var e=o(this),n=r(e.length),c=arguments.length,l=d(c>1?arguments[1]:void 0,n),m=c>2?arguments[2]:void 0,k=void 0===m?n:d(m,n);k>l;)e[l++]=t;return e}},298:function(t,e,n){t.exports=n.p+"img/earth_logo_gr.f2cc2d1.gif"},299:function(t,e,n){t.exports=n.p+"img/earth_logo_grl.e5008f2.gif"},300:function(t,e,n){t.exports=n.p+"img/earth_logo.fc1266b.gif"},301:function(t,e,n){t.exports=n.p+"img/earth_logo_pi.9771883.gif"},302:function(t,e,n){t.exports=n.p+"img/wave2.e141d2e.gif"},331:function(t,e,n){var content=n(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("0ebf3650",content,!0,{sourceMap:!1})},383:function(t,e,n){"use strict";n(331)},384:function(t,e,n){var o=n(30),d=n(80),r=n(302),c=n(385),l=o(!1),m=d(r),k=d(c);l.push([t.i,"html{width:100vw;height:100vh}body{overflow:hidden;margin:0}#iz-arkit-cover{z-index:1024}#iz-arkit-mouse{z-index:517}#iz-arkit-sidemenu-extend{z-index:516}#iz-arkit-debugmenu{z-index:515}#iz-arkit-sidemenu{z-index:514}#iz-arkit-debugbt{z-index:513}#iz-arkit-menubt{z-index:512}#iz-arkit-status{z-index:257}#iz-arkit-console{z-index:256}#iz-arkit-threejs{z-index:128}#iz-arkit-cover{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff;opacity:1;-webkit-clip-path:circle(300% at 50% 50%);clip-path:circle(300% at 50% 50%);transition:-webkit-clip-path 1s ease-out;transition:clip-path 1s ease-out;transition:clip-path 1s ease-out,-webkit-clip-path 1s ease-out;display:flex;flex-direction:column;justify-content:space-between;align-items:center}#iz-arkit-cover.off{-webkit-clip-path:circle(0 at 50% 50%);clip-path:circle(0 at 50% 50%)}#iz-arkit-cover .head{width:calc(100vw - 20px);margin-top:18px;color:#666;font-size:13px;font-weight:700}#iz-arkit-cover .head,#iz-arkit-cover .middle{display:flex;justify-content:center;align-items:center}#iz-arkit-cover .middle{width:100%;flex-direction:column}#iz-arkit-cover .middle .title{font-weight:300;font-size:36px;margin:20px 0;color:#000}#iz-arkit-cover .middle .image{width:100vw;height:min(40vh,50vw,260px);position:relative}#iz-arkit-cover .middle .earth1,#iz-arkit-cover .middle .earth2,#iz-arkit-cover .middle .earth3{width:50vw;max-width:min(260px,40vh);position:absolute;top:0;right:0;left:0;bottom:0;margin:auto}#iz-arkit-cover .middle .earth2,#iz-arkit-cover .middle .earth3{-webkit-mask-size:200% 100%;mask-size:auto auto;-webkit-mask-repeat:repeat-x;mask-repeat:repeat-x}#iz-arkit-cover .middle .earth2{-webkit-animation:earth-move2 6s linear infinite;animation:earth-move2 6s linear infinite;-webkit-mask-position:0 min(135.2px,26vw);mask-position:0 min(130px,25vw)}#iz-arkit-cover .middle .earth2,#iz-arkit-cover .middle .earth3{-webkit-mask-image:url("+m+");mask-image:url("+m+')}#iz-arkit-cover .middle .earth3{-webkit-animation:earth-move3 6s linear infinite;animation:earth-move3 6s linear infinite;-webkit-mask-position:0 min(117px,22.5vw);mask-position:0 min(117px,22.5vw)}@-webkit-keyframes earth-move2{0%{-webkit-mask-position:min(100vw,520px,80vh) min(102.96px,19.8vw,15.84vh);mask-position:min(100vw,520px,80vh) min(102.96px,19.8vw,15.84vh)}to{-webkit-mask-position:0 min(102.96px,19.8vw,15.84vh);mask-position:0 min(102.96px,19.8vw,15.84vh)}}@keyframes earth-move2{0%{-webkit-mask-position:min(100vw,520px,80vh) min(102.96px,19.8vw,15.84vh);mask-position:min(100vw,520px,80vh) min(102.96px,19.8vw,15.84vh)}to{-webkit-mask-position:0 min(102.96px,19.8vw,15.84vh);mask-position:0 min(102.96px,19.8vw,15.84vh)}}@-webkit-keyframes earth-move3{0%{-webkit-mask-position:min(100vw,520px,80vh) min(109.2px,21vw,16.8vh);mask-position:min(100vw,520px,80vh) min(109.2px,21vw,16.8vh)}to{-webkit-mask-position:0 min(109.2px,21vw,16.8vh);mask-position:0 min(109.2px,21vw,16.8vh)}}@keyframes earth-move3{0%{-webkit-mask-position:min(100vw,520px,80vh) min(109.2px,21vw,16.8vh);mask-position:min(100vw,520px,80vh) min(109.2px,21vw,16.8vh)}to{-webkit-mask-position:0 min(109.2px,21vw,16.8vh);mask-position:0 min(109.2px,21vw,16.8vh)}}#iz-arkit-cover .middle .state{font-weight:700;font-size:18px;margin:20px 0 50px}#iz-arkit-cover .foot{width:calc(100% - 20px);display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:6px;color:#aaa;font-size:13px;font-weight:700}@media (min-width:768px){#iz-arkit-cover .head{margin-top:12px;color:#555;font-size:16px;font-weight:700}#iz-arkit-cover .middle .title{font-size:44px;margin:20px 0}#iz-arkit-cover .middle .state{font-weight:700;font-size:20px}#iz-arkit-cover .foot{width:calc(100% - 20px);margin-bottom:8px;color:#aaa;font-size:16px;font-weight:700}}#iz-arkit-mouse{position:absolute;top:0;left:0;pointer-events:none;width:44px;height:44px;display:flex;justify-content:center;align-items:center}#iz-arkit-mouse-icon{border:0 solid #333;border-radius:50%;background:radial-gradient(circle,#333 4px,#999 0,#999 38px);opacity:.8;width:0;height:0;transition:all .1s}#iz-arkit-mouse-icon.on{border:3px solid #333;width:38px;height:38px}#iz-arkit-threejs{position:absolute;top:0;left:0;width:100%;height:100%}#iz-arkit-sidemenu .item{flex-direction:row-reverse}#iz-arkit-debugmenu .item,#iz-arkit-sidemenu .item{position:relative;display:flex;justify-content:flex-start;align-items:center;transition:opacity .2s ease-in-out}#iz-arkit-debugmenu .item span,#iz-arkit-sidemenu .item span{color:#fff;text-shadow:1px 1px 4px #888,-1px 1px 4px #888,1px -1px 4px #888,-1px -1px 4px #888,1px 0 4px #888,0 1px 4px #888,-1px 0 4px #888,0 -1px 4px #888;pointer-events:none;margin:0 5px}#iz-arkit-debugbt,#iz-arkit-debugmenu .button,#iz-arkit-menubt,#iz-arkit-sidemenu .button{width:56px;height:56px;display:flex;justify-content:center;align-items:center;border:1px solid #ccc;border-radius:12px;background:linear-gradient(145deg,#fff,#c6c6c6);margin:5px;transition:all .2s ease-in-out}#iz-arkit-debugbt:before,#iz-arkit-debugmenu .button:before,#iz-arkit-menubt:before,#iz-arkit-sidemenu .button:before{content:"";width:56px;height:56px;position:absolute;z-index:0;left:1;top:1;border:1px solid #019ac9;border-radius:12px;background:linear-gradient(145deg,#00afe4,#0085ad);opacity:0;transition:all .2s ease-in-out}#iz-arkit-debugmenu .button.once:before,#iz-arkit-sidemenu .button.once:before{border:1px solid #b6b6b6;background:linear-gradient(145deg,#d6d6d6,#b0b0b0);transition:all .1s ease-in-out}#iz-arkit-debugmenu .button.on.once:before,#iz-arkit-sidemenu .button.on.once:before{transition:none}#iz-arkit-debugbt.on:before,#iz-arkit-debugmenu .button.on:before,#iz-arkit-menubt.on:before,#iz-arkit-sidemenu .button.on:before{opacity:1}#iz-arkit-debugbt i,#iz-arkit-debugmenu .button i,#iz-arkit-menubt i,#iz-arkit-sidemenu .button i{z-index:1;transition:all .2s ease-in-out}#iz-arkit-debugbt.on i,#iz-arkit-debugmenu .button.on i,#iz-arkit-menubt.on i,#iz-arkit-sidemenu .button.on i{color:#fff}#iz-arkit-debugmenu .button.once i,#iz-arkit-sidemenu .button.once i{color:#333;transition:none}#iz-arkit-menubt{position:absolute;bottom:2px;right:2px}#iz-arkit-debugbt{position:absolute;bottom:2px;left:2px}#iz-arkit-debugmenu,#iz-arkit-sidemenu{position:absolute;bottom:67px;width:auto;height:auto;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:all .2s ease-in-out}#iz-arkit-sidemenu.open{right:2px;opacity:1}#iz-arkit-sidemenu.close{right:-65px;opacity:0}#iz-arkit-debugmenu.open{left:2px;opacity:1}#iz-arkit-debugmenu.close{left:-65px;opacity:0}#iz-arkit-debugbt i,#iz-arkit-debugmenu .button i,#iz-arkit-menubt i,#iz-arkit-sidemenu .button i{font-size:32px;color:#333;display:flex;flex-direction:column;justify-content:center;align-items:center}#iz-arkit-console{position:absolute;top:0;left:0;width:100%;padding-top:20px;font-size:14px;background:rgba(85,85,85,.66667);display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}#iz-arkit-console span{color:#fff;padding:1px 5px}#iz-arkit-status{top:4px;color:#fff;text-align:center;font-size:16px;text-shadow:1px 1px 4px #888,-1px 1px 4px #888,1px -1px 4px #888,-1px -1px 4px #888,1px 0 4px #888,0 1px 4px #888,-1px 0 4px #888,0 -1px 4px #888}#iz-arkit-camera,#iz-arkit-status{position:absolute;left:0;width:100%}#iz-arkit-camera{top:0;height:100%;background-image:url('+k+");background-repeat:no-repeat;background-size:cover;background-position:50%}",""]),t.exports=l},385:function(t,e,n){t.exports=n.p+"img/mt-fuji.832d84f.jpg"},413:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{attrs:{id:"iz-arkit-cover"}},[o("div",{staticClass:"head"},[t._v("\n      このアプリは"),o("span",{staticStyle:{color:"#F44"}},[t._v("カメラ")]),t._v("機能の"),o("span",{staticStyle:{color:"#F44"}},[t._v("許可")]),t._v("が必要です\n    ")]),t._v(" "),o("div",{staticClass:"middle"},[o("div",{staticClass:"title"},[t._v("izumiARKitTestUI")]),t._v(" "),o("div",{staticClass:"image"},[o("img",{staticClass:"earth1",attrs:{src:n(298)}}),t._v(" "),o("img",{staticClass:"earth2",attrs:{src:n(299)}}),t._v(" "),o("img",{staticClass:"earth3",attrs:{id:"earth",src:n(300)}})]),t._v(" "),o("div",{staticClass:"state"},[t._v("Loading...")])]),t._v(" "),o("div",{staticClass:"foot"},[o("div",[t._v("izumiARKit - v1.0.0"),o("br"),t._v("COJT SW 13th")]),t._v(" "),o("div",[t._v("KOiZUMi - 2021")])])]),t._v(" "),o("div",{staticStyle:{display:"none"},attrs:{id:"iz-arkit-mouse"}},[o("div",{staticClass:"on",attrs:{id:"iz-arkit-mouse-icon"}})]),t._v(" "),o("div",{attrs:{id:"iz-arkit-sidemenu-extend"}}),t._v(" "),o("div",{staticClass:"close",staticStyle:{display:"none"},attrs:{id:"iz-arkit-debugmenu"}},[o("div",{staticClass:"item"},[o("div",{staticClass:"button",attrs:{id:"iz-arkit-conbt"}},[o("i",{staticClass:"bi bi-terminal-fill"})]),t._v(" "),o("span",[t._v("コンソール")])]),t._v(" "),o("div",{staticClass:"item"},[o("div",{staticClass:"button",attrs:{id:"iz-arkit-pointer"}},[o("i",{staticClass:"bi bi-cursor-fill",staticStyle:{transform:"scale(-1, 1)"}})]),t._v(" "),o("span",[t._v("ポインターの表示")])])]),t._v(" "),o("div",{staticClass:"close",staticStyle:{display:"none"},attrs:{id:"iz-arkit-sidemenu"}},[o("div",{staticClass:"item"},[o("div",{staticClass:"button",attrs:{id:"iz-arkit-eyebt"}},[o("i",{staticClass:"bi bi-eye-slash-fill"})]),t._v(" "),o("span",[t._v("メニューの常時表示")])]),t._v(" "),o("div",{staticClass:"item"},[o("div",{staticClass:"button",attrs:{id:"iz-arkit-musicbt"}},[o("i",{staticClass:"bi bi-music-note-beamed"})]),t._v(" "),o("span",[t._v("楽曲設定")])]),t._v(" "),o("div",{staticClass:"item"},[o("div",{staticClass:"button once",attrs:{id:"iz-arkit-minusbt"}},[o("i",{staticClass:"bi bi-zoom-out"})]),t._v(" "),o("div",{staticClass:"button once",attrs:{id:"iz-arkit-plusbt"}},[o("i",{staticClass:"bi bi-zoom-in"})]),t._v(" "),o("span",[t._v("拡大 / 縮小")])])]),t._v(" "),o("div",{staticClass:"button",staticStyle:{display:"none"},attrs:{id:"iz-arkit-debugbt"}},[o("i",{staticClass:"bi bi-tools"})]),t._v(" "),o("div",{staticClass:"button",attrs:{id:"iz-arkit-menubt"}},[o("i",{staticClass:"bi bi-globe2"})]),t._v(" "),o("div",{attrs:{id:"iz-arkit-status"}},[t._v("MusicBoxAug.")]),t._v(" "),o("div",{staticStyle:{display:"none"},attrs:{id:"iz-arkit-console"}}),t._v(" "),o("canvas",{attrs:{id:"iz-arkit-threejs"}}),t._v(" "),o("div",{attrs:{id:"iz-arkit-camera"}})])}],d=(n(281),n(29),n(1).a.extend({layout:"ar",data:function(){return{tapEnable:!1,clickPoints:{x:-100,y:-100},deviceInfo:{os:"unknown",browser:"unknown"},debug:!1,displayMousePos:!1,displayConsole:!1,console:Array(6).fill("")}},created:function(){"true"==this.$route.query.debug&&(this.debug=!0)},mounted:function(){var t=this;void 0!==window.ontouchstart&&navigator.maxTouchPoints>0&&(this.tapEnable=!0),document.getElementById("iz-arkit-cover").addEventListener("click",(function(){document.getElementById("iz-arkit-cover").classList.add("off"),window.setTimeout((function(){document.getElementById("iz-arkit-cover").remove()}),1e3)})),document.getElementById("iz-arkit-menubt").addEventListener("click",(function(){document.getElementById("iz-arkit-sidemenu").classList.contains("close")?t.sideMenuOpen():t.sideMenuClose()})),window.addEventListener("resize",(function(){document.getElementById("iz-arkit-mouse").width=window.innerWidth,document.getElementById("iz-arkit-mouse").height=window.innerHeight})),this.tapEnable?window.addEventListener("touchend",(function(e){document.getElementById("iz-arkit-sidemenu").contains(e.target)||document.getElementById("iz-arkit-menubt").contains(e.target)||t.sideMenuClose(),document.getElementById("iz-arkit-debugmenu").contains(e.target)||document.getElementById("iz-arkit-debugbt").contains(e.target)||t.debugMenuClose()})):window.addEventListener("click",(function(e){document.getElementById("iz-arkit-sidemenu").contains(e.target)||document.getElementById("iz-arkit-menubt").contains(e.target)||t.sideMenuClose(),document.getElementById("iz-arkit-debugmenu").contains(e.target)||document.getElementById("iz-arkit-debugbt").contains(e.target)||t.debugMenuClose()})),this.getDeviceInfo(),this.debug&&this.initDebugMode(),document.getElementById("iz-arkit-minusbt").addEventListener("click",(function(){document.getElementById("iz-arkit-minusbt").classList.add("on"),window.setTimeout((function(){document.getElementById("iz-arkit-minusbt").classList.remove("on")}),70)})),document.getElementById("iz-arkit-plusbt").addEventListener("click",(function(){document.getElementById("iz-arkit-plusbt").classList.add("on"),window.setTimeout((function(){document.getElementById("iz-arkit-plusbt").classList.remove("on")}),70)}))},methods:{sideMenuOpen:function(){document.getElementById("iz-arkit-menubt").classList.add("on");var t=document.getElementById("iz-arkit-sidemenu");t.classList.contains("close")&&(t.style.display="block",window.setTimeout((function(){t.classList.add("open"),t.classList.remove("close")}),100))},sideMenuClose:function(){document.getElementById("iz-arkit-menubt").classList.remove("on");var t=document.getElementById("iz-arkit-sidemenu");t.classList.contains("open")&&(t.classList.add("close"),t.classList.remove("open"),window.setTimeout((function(){t.style.display="none"}),200))},getDeviceInfo:function(){var t=window.navigator.userAgent.toLowerCase();-1!==t.indexOf("windows nt")?this.deviceInfo.os="Windows":-1!==t.indexOf("android")?this.deviceInfo.os="Android":-1!==t.indexOf("iphone")||-1!==t.indexOf("ipad")?this.deviceInfo.os="iOS":-1!==t.indexOf("mac os x")||-1!==t.indexOf("Macintosh")?this.deviceInfo.os="macOS":-1!==t.indexOf("Linux")&&(this.deviceInfo.os="Linux"),-1!==t.indexOf("edge")||-1!==t.indexOf("edga")||-1!==t.indexOf("edgios")||-1!==t.indexOf("edg")?this.deviceInfo.browser="Microsoft Edge":-1!==t.indexOf("opera")||-1!==t.indexOf("opr")?this.deviceInfo.browser="Opera":-1!==t.indexOf("samsungbrowser")?this.deviceInfo.browser="Samsung Internet Browser":-1!==t.indexOf("ucbrowser")?this.deviceInfo.browser="UC Browser":-1!==t.indexOf("chrome")||-1!==t.indexOf("crios")?this.deviceInfo.browser="Google Chrome":-1!==t.indexOf("firefox")||-1!==t.indexOf("fxios")?this.deviceInfo.browser="Mozilla Firefox":-1!==t.indexOf("safari")?this.deviceInfo.browser="Safari":-1===t.indexOf("msie")&&-1===t.indexOf("trident")||(this.deviceInfo.browser="Internet Explorer")},initDebugMode:function(){var t=this;document.getElementById("earth").src=n(301),document.getElementById("iz-arkit-debugbt").removeAttribute("style"),document.getElementById("iz-arkit-debugmenu").style.display="none",document.getElementById("iz-arkit-debugbt").addEventListener("click",(function(){document.getElementById("iz-arkit-debugmenu").classList.contains("close")?t.debugMenuOpen():t.debugMenuClose()})),document.getElementById("iz-arkit-pointer").addEventListener("click",(function(){t.changeDisplayMousePos()})),document.getElementById("iz-arkit-conbt").addEventListener("click",(function(){t.changeDisplayConsole()})),this.tapEnable?(window.addEventListener("touchmove",(function(e){t.clickPoints={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY},t.displayMousePos&&(document.getElementById("iz-arkit-mouse").style.left=t.clickPoints.x-22+"px",document.getElementById("iz-arkit-mouse").style.top=t.clickPoints.y-22+"px")}),!1),window.addEventListener("touchstart",(function(e){t.clickPoints={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY},t.displayMousePos&&(document.getElementById("iz-arkit-mouse").style.left=t.clickPoints.x-22+"px",document.getElementById("iz-arkit-mouse").style.top=t.clickPoints.y-22+"px",document.getElementById("iz-arkit-mouse-icon").classList.add("on"))}),!1),window.addEventListener("touchend",(function(e){t.clickPoints={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY},t.displayMousePos&&(document.getElementById("iz-arkit-mouse").style.left=t.clickPoints.x-22+"px",document.getElementById("iz-arkit-mouse").style.top=t.clickPoints.y-22+"px",document.getElementById("iz-arkit-mouse-icon").classList.remove("on"))}),!1)):(window.addEventListener("mousemove",(function(e){t.clickPoints={x:e.clientX,y:e.clientY},t.displayMousePos&&(document.getElementById("iz-arkit-mouse").style.left=t.clickPoints.x-22+"px",document.getElementById("iz-arkit-mouse").style.top=t.clickPoints.y-22+"px")}),!1),window.addEventListener("mouseup",(function(e){t.clickPoints={x:e.clientX,y:e.clientY},t.displayMousePos&&document.getElementById("iz-arkit-mouse-icon").classList.add("on")}),!1),window.addEventListener("mousedown",(function(e){t.clickPoints={x:e.clientX,y:e.clientY},t.displayMousePos&&document.getElementById("iz-arkit-mouse-icon").classList.remove("on")}),!1)),setInterval((function(){document.getElementById("iz-arkit-mouse").width=window.innerWidth,document.getElementById("iz-arkit-mouse").height=window.innerHeight}),2e3),this.console[0]="[UserOS] "+this.deviceInfo.os,this.console[1]="[UserBrowser] "+this.deviceInfo.browser,this.console[3]="[TapEnable] "+this.tapEnable,this.reloadConsole()},reloadConsole:function(){var t=document.getElementById("iz-arkit-console");t.innerHTML="",this.console[2]="[WindowSize] Width:"+window.innerWidth+", Height:"+window.innerHeight,this.console[4]="[Position] X:"+this.clickPoints.x+", Y:"+this.clickPoints.y;for(var i=0;i<this.console.length;i++){var e=document.createElement("span");e.textContent=this.console[i],t.appendChild(e)}requestAnimationFrame(this.reloadConsole.bind(this))},testMousePos:function(){requestAnimationFrame(this.testMousePos.bind(this)),document.getElementById("iz-arkit-console").innerHTML="["+this.clickPoints.x+","+this.clickPoints.y+"]"},changeDisplayMousePos:function(){this.displayMousePos=!this.displayMousePos,this.displayMousePos?(document.getElementById("iz-arkit-pointer").classList.add("on"),document.getElementById("iz-arkit-mouse").style.display="flex"):(document.getElementById("iz-arkit-pointer").classList.remove("on"),document.getElementById("iz-arkit-mouse").style.display="none")},changeDisplayConsole:function(){this.displayConsole=!this.displayConsole,this.displayConsole?(document.getElementById("iz-arkit-conbt").classList.add("on"),document.getElementById("iz-arkit-console").style.display="flex"):(document.getElementById("iz-arkit-conbt").classList.remove("on"),document.getElementById("iz-arkit-console").style.display="none")},debugMenuOpen:function(){document.getElementById("iz-arkit-debugbt").classList.add("on");var t=document.getElementById("iz-arkit-debugmenu");t.classList.contains("close")&&(t.style.display="block",window.setTimeout((function(){t.classList.add("open"),t.classList.remove("close")}),100))},debugMenuClose:function(){document.getElementById("iz-arkit-debugbt").classList.remove("on");var t=document.getElementById("iz-arkit-debugmenu");t.classList.contains("open")&&(t.classList.add("close"),t.classList.remove("open"),window.setTimeout((function(){t.style.display="none"}),200))}}})),r=(n(383),n(12)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,null,null);e.default=component.exports}}]);