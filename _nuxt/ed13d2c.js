(window.webpackJsonp=window.webpackJsonp||[]).push([[22,10],{287:function(e,t,n){"use strict";n.r(t),n.d(t,"ARmod",(function(){return o}));n(32),n(29);var r=n(280),o=function(){function e(){this.title="untitled",this.scale=30,this.maxScale=100,this.minScale=5,this.stepScale=5,this.mixers=[]}var t=e.prototype;return t.setARForm=function(e){this.arForm=e},t.setScene=function(){this.clock=new r.l,this.scene=new r.ib,this.totalTime=0,this.renderer=new r.ub({canvas:document.querySelector("#iz-arkit-threejs"),antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(new r.m("lightgrey"),0),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.outputEncoding=r.t;this.markerRoot=new r.u,this.markerRoot.name="marker",this.scene.add(this.markerRoot)},t.getCanvasRelativePosition=function(e){var t,n,rect=document.getElementById("iz-arkit-threejs").getBoundingClientRect(),r=parseInt(document.getElementById("iz-arkit-threejs").style.width,10),o=parseInt(document.getElementById("iz-arkit-threejs").style.height,10);return e instanceof MouseEvent?(t=(e.clientX-rect.left)*r/rect.width,n=(e.clientY-rect.top)*o/rect.height):e instanceof TouchEvent&&(t=(e.changedTouches[0].pageX-rect.left)*r/rect.width,n=(e.changedTouches[0].pageY-rect.top)*o/rect.height),[t,n]},t.setLight=function(){var e=new r.a(16777215,5);this.scene.add(e)},t.setCamera=function(){var e=this;this.camera=new r.Z,this.scene.add(this.camera),this.arToolkitContext=new THREEx.ArToolkitContext({cameraParametersUrl:"/media-exp-ts/camera_para.dat"}),this.arToolkitContext.init((function(){e.camera.projectionMatrix.copy(e.arToolkitContext.getProjectionMatrix())})),this.arToolkitSource=new THREEx.ArToolkitSource({sourceType:"webcam"}),this.arToolkitSource.init((function(){var e=0,t=setInterval((function(){++e>20&&clearInterval(t),n()}),100)}));var t=this;function n(){t.arToolkitSource.onResizeElement(),t.arToolkitSource.copyElementSizeTo(t.renderer.domElement),null!==t.arToolkitContext.arController&&t.arToolkitSource.copyElementSizeTo(t.arToolkitContext.arController.canvas)}window.addEventListener("resize",(function(){n()}));new THREEx.ArMarkerControls(this.arToolkitContext,this.markerRoot,{type:"pattern",patternUrl:"/media-exp-ts/3Dmarker/hiro.patt",changeMatrixMode:"modelViewMatrix"})},t.setMarker=function(){new THREEx.ArMarkerControls(this.arToolkitContext,this.markerRoot,{type:"pattern",patternUrl:"/media-exp-ts/3Dmarker/hiro.patt",changeMatrixMode:"modelViewMatrix"})},t.setObject=function(){},t.setSysObject=function(){var e=new r.f(1,1,1),t=new r.P;this.calcCube=new r.N(e,t),this.calcCube.scale.set(0,0,0),this.markerRoot.add(this.calcCube)},t.setEvent=function(){},t.update=function(){this.arToolkitSource.ready&&this.arToolkitContext.update(this.arToolkitSource.domElement)},t.render=function(){this.renderer.render(this.scene,this.camera)},t.animate=function(){requestAnimationFrame(this.animate.bind(this));var e=this.clock.getDelta();this.totalTime+=this.clock.getDelta(),this.update(),this.render();for(var i=0;i<this.mixers.length;i++)this.mixers[i].update(e)},t.world2screenPos=function(e,t,n){this.calcCube.position.set(e,t,n);var o=parseInt(document.getElementById("iz-arkit-threejs").style.width,10),c=parseInt(document.getElementById("iz-arkit-threejs").style.height,10),h=this.calcCube.getWorldPosition(new r.sb).project(this.camera),rect=document.getElementById("iz-arkit-threejs").getBoundingClientRect(),l=o*(h.x+1)/2,d=c*(1-h.y)/2;return{x:l=l*rect.width/o+rect.left,y:d=d*rect.height/c+rect.top}},t.screen2worldPos=function(e){var t=parseInt(document.getElementById("iz-arkit-threejs").style.width,10),n=parseInt(document.getElementById("iz-arkit-threejs").style.height,10),o=this.getCanvasRelativePosition(e),c=1.08*(o[0]/t*2-1),h=.81*(-o[1]/n*2+1);return c=Math.min(Math.max(c,-1),1),h=Math.min(Math.max(h,-1),1),new r.rb(c,h)},t.getObjName=function(e){var t=this.screen2worldPos(e),n="",o=new r.gb;o.setFromCamera(t,this.camera);for(var c,h=o.intersectObjects(this.scene.children,!0),i=0;i<h.length;i++){for(var l=(c=h[i].object).name;c.parent.name!==this.markerRoot.name;)c=c.parent;if(1==c.visible){n=l;break}}return n},t.getThreeObjName=function(e){var t=this.screen2worldPos(e),n="",o=new r.gb;o.setFromCamera(t,this.camera);for(var c,h=o.intersectObjects(this.scene.children,!0),i=0;i<h.length;i++){for(c=h[i].object;c.parent.name!==this.markerRoot.name;)c=c.parent;if(1==c.visible){n=c.name;break}}return n},t.act_zoomIn=function(){if(this.scale<this.maxScale){this.scale;this.scale=this.scale>=this.maxScale?this.maxScale:this.scale+this.stepScale;for(var i=0;i<this.scene.children.length;i++)if("Group"==this.scene.children[i].type)for(var e=0;e<this.scene.children[i].children.length;e++){this.scene.children[i].children[e].scale.set(this.scale/100,this.scale/100,this.scale/100)}this.calcCube.scale.set(0,0,0)}},t.act_zoomOut=function(){if(this.scale>=this.minScale){this.scale;this.scale=this.scale<=this.minScale?this.minScale:this.scale-this.stepScale;for(var i=0;i<this.scene.children.length;i++)if("Group"==this.scene.children[i].type)for(var e=0;e<this.scene.children[i].children.length;e++){this.scene.children[i].children[e].scale.set(this.scale/100,this.scale/100,this.scale/100)}this.calcCube.scale.set(0,0,0)}},e}()},291:function(e,t,n){"use strict";function r(e,p){return(r=Object.setPrototypeOf||function(e,p){return e.__proto__=p,e})(e,p)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,"a",(function(){return o}))},412:function(e,t,n){"use strict";n.r(t),n.d(t,"AR",(function(){return m}));var r=n(291),o=n(1),c=n(280),h=n(313),l=n(287),d=o.a.extend({layout:"ar",data:function(){return{ar:void 0}},components:{ARKit:h.default},mounted:function(){"ar"===this.$nuxt.layoutName&&this.init()},methods:{init:function(){var e=this.$refs.arkit;this.ar=new m,this.ar.title="izumiARKitTest",e.setAR(this.ar)}}}),m=function(e){function t(){var t;return(t=e.call(this)||this).scale=100,t}return Object(r.a)(t,e),t.prototype.setObject=function(){var e=new c.f(1,1,1),t=new c.P({transparent:!1,opacity:.5}),n=new c.N(e,t);n.position.y=.5,this.markerRoot.add(n)},t}(l.ARmod),f=d,k=n(12),component=Object(k.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("ARKit",{ref:"arkit"})],1)}),[],!1,null,null,null);t.default=component.exports}}]);