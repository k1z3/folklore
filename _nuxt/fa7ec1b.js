(window.webpackJsonp=window.webpackJsonp||[]).push([[28,10],{287:function(t,e,o){"use strict";o.r(e),o.d(e,"ARmod",(function(){return r}));o(32),o(29);var n=o(280),r=function(){function t(){this.title="untitled",this.scale=30,this.maxScale=100,this.minScale=5,this.stepScale=5,this.mixers=[]}var e=t.prototype;return e.setARForm=function(t){this.arForm=t},e.setScene=function(){this.clock=new n.l,this.scene=new n.ib,this.totalTime=0,this.renderer=new n.ub({canvas:document.querySelector("#iz-arkit-threejs"),antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(new n.m("lightgrey"),0),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.outputEncoding=n.t;this.markerRoot=new n.u,this.markerRoot.name="marker",this.scene.add(this.markerRoot)},e.getCanvasRelativePosition=function(t){var e,o,rect=document.getElementById("iz-arkit-threejs").getBoundingClientRect(),n=parseInt(document.getElementById("iz-arkit-threejs").style.width,10),r=parseInt(document.getElementById("iz-arkit-threejs").style.height,10);return t instanceof MouseEvent?(e=(t.clientX-rect.left)*n/rect.width,o=(t.clientY-rect.top)*r/rect.height):t instanceof TouchEvent&&(e=(t.changedTouches[0].pageX-rect.left)*n/rect.width,o=(t.changedTouches[0].pageY-rect.top)*r/rect.height),[e,o]},e.setLight=function(){var t=new n.a(16777215,5);this.scene.add(t)},e.setCamera=function(){var t=this;this.camera=new n.Z,this.scene.add(this.camera),this.arToolkitContext=new THREEx.ArToolkitContext({cameraParametersUrl:"/media-exp-ts/camera_para.dat"}),this.arToolkitContext.init((function(){t.camera.projectionMatrix.copy(t.arToolkitContext.getProjectionMatrix())})),this.arToolkitSource=new THREEx.ArToolkitSource({sourceType:"webcam"}),this.arToolkitSource.init((function(){var t=0,e=setInterval((function(){++t>20&&clearInterval(e),o()}),100)}));var e=this;function o(){e.arToolkitSource.onResizeElement(),e.arToolkitSource.copyElementSizeTo(e.renderer.domElement),null!==e.arToolkitContext.arController&&e.arToolkitSource.copyElementSizeTo(e.arToolkitContext.arController.canvas)}window.addEventListener("resize",(function(){o()}));new THREEx.ArMarkerControls(this.arToolkitContext,this.markerRoot,{type:"pattern",patternUrl:"/media-exp-ts/3Dmarker/hiro.patt",changeMatrixMode:"modelViewMatrix"})},e.setMarker=function(){new THREEx.ArMarkerControls(this.arToolkitContext,this.markerRoot,{type:"pattern",patternUrl:"/media-exp-ts/3Dmarker/hiro.patt",changeMatrixMode:"modelViewMatrix"})},e.setObject=function(){},e.setSysObject=function(){var t=new n.f(1,1,1),e=new n.P;this.calcCube=new n.N(t,e),this.calcCube.scale.set(0,0,0),this.markerRoot.add(this.calcCube)},e.setEvent=function(){},e.update=function(){this.arToolkitSource.ready&&this.arToolkitContext.update(this.arToolkitSource.domElement)},e.render=function(){this.renderer.render(this.scene,this.camera)},e.animate=function(){requestAnimationFrame(this.animate.bind(this));var t=this.clock.getDelta();this.totalTime+=this.clock.getDelta(),this.update(),this.render();for(var i=0;i<this.mixers.length;i++)this.mixers[i].update(t)},e.world2screenPos=function(t,e,o){this.calcCube.position.set(t,e,o);var r=parseInt(document.getElementById("iz-arkit-threejs").style.width,10),c=parseInt(document.getElementById("iz-arkit-threejs").style.height,10),l=this.calcCube.getWorldPosition(new n.sb).project(this.camera),rect=document.getElementById("iz-arkit-threejs").getBoundingClientRect(),h=r*(l.x+1)/2,d=c*(1-l.y)/2;return{x:h=h*rect.width/r+rect.left,y:d=d*rect.height/c+rect.top}},e.screen2worldPos=function(t){var e=parseInt(document.getElementById("iz-arkit-threejs").style.width,10),o=parseInt(document.getElementById("iz-arkit-threejs").style.height,10),r=this.getCanvasRelativePosition(t),c=1.08*(r[0]/e*2-1),l=.81*(-r[1]/o*2+1);return c=Math.min(Math.max(c,-1),1),l=Math.min(Math.max(l,-1),1),new n.rb(c,l)},e.getObjName=function(t){var e=this.screen2worldPos(t),o="",r=new n.gb;r.setFromCamera(e,this.camera);for(var c,l=r.intersectObjects(this.scene.children,!0),i=0;i<l.length;i++){for(var h=(c=l[i].object).name;c.parent.name!==this.markerRoot.name;)c=c.parent;if(1==c.visible){o=h;break}}return o},e.getThreeObjName=function(t){var e=this.screen2worldPos(t),o="",r=new n.gb;r.setFromCamera(e,this.camera);for(var c,l=r.intersectObjects(this.scene.children,!0),i=0;i<l.length;i++){for(c=l[i].object;c.parent.name!==this.markerRoot.name;)c=c.parent;if(1==c.visible){o=c.name;break}}return o},e.act_zoomIn=function(){if(this.scale<this.maxScale){this.scale;this.scale=this.scale>=this.maxScale?this.maxScale:this.scale+this.stepScale;for(var i=0;i<this.scene.children.length;i++)if("Group"==this.scene.children[i].type)for(var t=0;t<this.scene.children[i].children.length;t++){this.scene.children[i].children[t].scale.set(this.scale/100,this.scale/100,this.scale/100)}this.calcCube.scale.set(0,0,0)}},e.act_zoomOut=function(){if(this.scale>=this.minScale){this.scale;this.scale=this.scale<=this.minScale?this.minScale:this.scale-this.stepScale;for(var i=0;i<this.scene.children.length;i++)if("Group"==this.scene.children[i].type)for(var t=0;t<this.scene.children[i].children.length;t++){this.scene.children[i].children[t].scale.set(this.scale/100,this.scale/100,this.scale/100)}this.calcCube.scale.set(0,0,0)}},t}()},291:function(t,e,o){"use strict";function n(t,p){return(n=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}o.d(e,"a",(function(){return r}))},323:function(t,e,o){var content=o(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("7b3eb65c",content,!0,{sourceMap:!1})},373:function(t,e,o){"use strict";o(323)},374:function(t,e,o){var n=o(30)(!1);n.push([t.i,"#display-rotate{position:absolute;top:0;left:0;z-index:255;width:100%;height:100%}",""]),t.exports=n},406:function(t,e,o){"use strict";o.r(e),o.d(e,"AR",(function(){return f}));var n=o(8),r=o(291),c=(o(45),o(281),o(32),o(29),o(1)),l=o(280),h=o(286),d=o(313),m=o(287),y=c.a.extend({layout:"ar",data:function(){return{ar:void 0}},components:{ARKit:d.default},created:function(){},mounted:function(){"ar"===this.$nuxt.layoutName&&this.init()},methods:{init:function(){var t=this.$refs.arkit;this.ar=new f,t.setAR(this.ar)}}}),f=function(t){function e(){var e;return(e=t.call(this)||this).title="untitled",e.lock=!1,e.audioReady=!1,e.bgm=new Audio("/media-exp-ts/audio/MusicBox8/passenger.mp3"),e.title="MusicBox8",e.scale=30,e.console=Array(5).fill(""),e.stickFlag=!1,e.rotateCount=0,e.rotatePos=0,e}Object(r.a)(e,t);var o=e.prototype;return o.setARFrom=function(t){this.arForm=t},o.setMarker=function(){new THREEx.ArMarkerControls(this.arToolkitContext,this.markerRoot,{type:"pattern",patternUrl:"/media-exp-ts/3Dmarker/tsukuba.patt",changeMatrixMode:"modelViewMatrix"})},o.setLight=function(){var t=new l.ab(16777215,1);t.position.set(-25,0,-20),this.scene.add(t),(t=new l.ab(16777215,1)).position.set(25,0,-20),this.scene.add(t),(t=new l.ab(16777215,1)).position.set(0,0,23.25),this.scene.add(t),(t=new l.ab(16777215,1)).position.set(0,20.4,-20),this.scene.add(t)},o.setObject=function(){var t=this,e=this.scale/100,o=new h.a;o.load("/media-exp-ts/3Dmodels/MusicBox8/handle.glb",(function(data){t.stick=data.scene,t.stick.name="*Stick",t.stick.scale.set(e,e,e),t.stick.position.set(0,0,.8),t.markerRoot.add(t.stick)})),o.load("/media-exp-ts/3Dmodels/MusicBox8/pipe.glb",(function(data){t.pipe=data.scene,t.pipe.name="*Pipe",t.pipe.scale.set(e,e,e),t.pipe.position.set(0,0,.8),t.markerRoot.add(t.pipe)})),o.load("/media-exp-ts/3Dmodels/MusicBox8/box.glb",(function(data){var o=data.scene;o.name="*Box",o.scale.set(e,e,e),o.position.set(0,0,.8),t.markerRoot.add(o)}))},o.setEvent=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var e,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this,document.addEventListener("mousedown",(function(t){var n=o.screen2worldPos(t),r=new l.gb;r.setFromCamera(n,o.camera);var c,h=r.intersectObjects(e.scene.children,!0);if(h[0]){for(c=h[0].object;c.parent.name!==o.markerRoot.name;)c=c.parent;o.console[0]="[Collision] "+c.name}else o.console[0]="[Collision] none"}),!1),document.addEventListener("touchstart",(function(t){o.audioReady||(o.bgm.play(),o.bgm.pause(),o.audioReady=!0),"*Stick"===o.getThreeObjName(t)&&(o.stickFlag=!0)})),document.addEventListener("touchend",(function(){o.stickFlag&&o.rotateCount>=3&&!o.lock?(o.bgm.currentTime=0,o.bgm.play(),o.lock=!0,o.resetLotate(19e3)):o.stickFlag&&(o.lock=!0,o.resetLotate(500)),o.stickFlag=!1})),document.addEventListener("touchmove",(function(t){if(o.stickFlag&&!o.lock){var n=o.world2screenPos(0,2*o.scale/100,.8),r=o.world2screenPos(1,2*o.scale/100,.8),c={x:r.x-n.x,y:r.y-n.y},l=Math.sqrt(Math.pow(c.x,2)+Math.pow(c.y,2));c={x:c.x/l,y:c.y/l};var h={x:(r=o.world2screenPos(0,2*o.scale/100,.8-1)).x-n.x,y:r.y-n.y};l=Math.sqrt(Math.pow(h.x,2)+Math.pow(h.y,2)),h={x:h.x/l,y:h.y/l};var d={x:t.changedTouches[0].pageX-n.x,y:t.changedTouches[0].pageY-n.y};l=Math.sqrt(Math.pow(d.x,2)+Math.pow(d.y,2)),d={x:d.x/l,y:d.y/l};var m,y=c.x*d.x+c.y*d.y,f=h.x*d.x+h.y*d.y,x=f<0?-Math.acos(y):Math.acos(y);o.console[2]="[Angle] "+x,o.stick.rotation.y=x,o.pipe.rotation.y=x,e.console[4]=String(x),0==(m=y>=0?f>=0?3:0:f>=0?2:1)&&3==o.rotatePos&&(o.rotateCount+=1),3==m&&0==o.rotatePos&&(o.rotateCount-=1),Math.abs(o.rotatePos-m),o.rotatePos=m,o.console[3]="[RotateCounter] "+o.rotateCount,o.rotateCount<0&&(o.console[3]="[RotateCounter] "+(o.rotateCount+1))}}));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),o.resetLotate=function(time){var t,e=this,o=this,n=Date.now(),r=n+time,c=0;if(this.rotateCount>=0){var l=this.stick.rotation.y<0?this.stick.rotation.y:-Math.PI-(Math.PI-this.stick.rotation.y);c=l-2*Math.PI*this.rotateCount}else{var h=this.stick.rotation.y>0?this.stick.rotation.y:Math.PI+(Math.PI+this.stick.rotation.y);c=h+2*Math.PI*(this.rotateCount+1)}!function e(){var l=Date.now(),h=c*Math.pow((r-l)/(r-n),1.5);(r-l)/(r-n)<0&&(h=0);o.stick.rotation.y=h,o.pipe.rotation.y=h,t=requestAnimationFrame(e)}(),window.setTimeout((function(){e.rotateCount=0,e.rotatePos=0,e.stick.rotation.y=0,e.pipe.rotation.y=0,e.lock=!1,cancelAnimationFrame(t)}),time,!1)},o.displayVector=function(){requestAnimationFrame(this.displayVector.bind(this));var t=document.getElementById("display-rotate").getContext("2d");t.clearRect(0,0,window.innerWidth,window.innerHeight);var e=this.world2screenPos(0,2*this.scale/100,0);this.console[1]="[OriginPosition] x:"+Math.floor(e.x)+"y:"+Math.floor(e.y),t.fillStyle="rgba(255,0,0,1)",t.beginPath(),t.arc(e.x,e.y,10,0,2*Math.PI),t.closePath(),t.fill();var o=this.world2screenPos(1,2*this.scale/100,0);t.fillStyle="rgba(0,0,255,1)",t.beginPath(),t.arc(o.x,o.y,10,0,2*Math.PI),t.closePath(),t.fill();var n={x:o.x-e.x,y:o.y-e.y},r=Math.sqrt(Math.pow(n.x,2)+Math.pow(n.y,2));n={x:n.x/r,y:n.y/r},o=this.world2screenPos(0,2*this.scale/100,-1),t.fillStyle="rgba(0,255,0,1)",t.beginPath(),t.arc(o.x,o.y,10,0,2*Math.PI),t.closePath(),t.fill();var c={x:o.x-e.x,y:o.y-e.y};r=Math.sqrt(Math.pow(c.x,2)+Math.pow(c.y,2)),c={x:c.x/r,y:c.y/r},t.strokeStyle="rgba(255,0,0,1)",t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(e.x+200*n.x,e.y+200*n.y),t.moveTo(e.x,e.y),t.lineTo(e.x+200*n.y,e.y-200*n.x),t.closePath(),t.stroke()},e}(m.ARmod),x=y,k=(o(373),o(12)),component=Object(k.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ARKit",{ref:"arkit",staticStyle:{"z-index":"1"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);