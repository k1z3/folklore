(window.webpackJsonp=window.webpackJsonp||[]).push([[31,13],{281:function(t,e,n){var r=n(3),o=n(282),c=n(109);r({target:"Array",proto:!0},{fill:o}),c("fill")},282:function(t,e,n){"use strict";var r=n(18),o=n(75),c=n(13);t.exports=function(t){for(var e=r(this),n=c(e.length),l=arguments.length,d=o(l>1?arguments[1]:void 0,n),v=l>2?arguments[2]:void 0,f=void 0===v?n:o(v,n);f>d;)e[d++]=t;return e}},292:function(t,e,n){"use strict";var r=n(11),o=n(5),c=n(77),l=n(15),d=n(10),v=n(34),f=n(169),h=n(52),m=n(6),_=n(54),N=n(53).f,S=n(33).f,y=n(14).f,x=n(303).trim,P="Number",I=o.Number,w=I.prototype,E=v(_(w))==P,M=function(t){var e,n,r,o,c,l,d,code,v=h(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=x(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+v}for(l=(c=v.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+v};if(c(P,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var A,z=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof z&&(E?m((function(){w.valueOf.call(n)})):v(n)!=P)?f(new I(M(e)),n,z):M(e)},G=r?N(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;G.length>k;k++)d(I,A=G[k])&&!d(z,A)&&y(z,A,S(I,A));z.prototype=w,w.constructor=z,l(o,P,z)}},303:function(t,e,n){var r=n(16),o="["+n(304)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},304:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},324:function(t,e,n){var content=n(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("78156b7c",content,!0,{sourceMap:!1})},340:function(t,e,n){"use strict";n.r(e);n(292);var r=n(1).a.extend({data:function(){return{value:1}},mounted:function(){},props:{min:{type:Number},max:{type:Number},step:{type:Number},init:{type:Number}},methods:{onChange:function(t){this.value=Number(t.target.value),this.$emit("value",t.target.value)}}}),o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("input",{attrs:{type:"range",min:t.min,max:t.max,step:t.step},on:{input:t.onChange}}),t._v(" ("+t._s(t.value)+")\n")])}),[],!1,null,null,null);e.default=component.exports},375:function(t,e,n){"use strict";n(324)},376:function(t,e,n){var r=n(30)(!1);r.push([t.i,".canvas-set{display:flex}#pattern{box-shadow:0 10px 25px 0 rgba(0,0,0,.5);width:400px}",""]),t.exports=r},408:function(t,e,n){"use strict";n.r(e);n(281),n(292);var r=n(1),o=n(340),c=r.a.extend({data:function(){return{params:{cSize:[1820,1820],stPos:[.5,.5],layout:0,figure:0,pNum:[12,12],pSize:[.7,.7],pRotate:0,grMode:0,grPos:[.5,.5,0,.5]}}},mounted:function(){window.addEventListener("load",(function(){document.getElementById("pattern").getContext("2d")})),this.canvas_draw()},components:{Slider:o.default},methods:{canvas_draw:function(){var t=document.getElementById("pattern"),e=this.params,n=t.getContext("2d");n.clearRect(0,0,e.cSize[0],e.cSize[1]);for(var r=2*e.pNum[0],o=2*e.pNum[1],c=e.pSize[0]*e.cSize[0]/e.pNum[0]/2,i=0;i<e.pNum[0];i++)for(var l=0;l<e.pNum[1];l++){var d=(2*i+1)/r,v=(2*l+1)/o,f=1;1==e.grMode&&(f=(f=Math.abs(d*Math.sin(e.grPos[2])-v*Math.cos(e.grPos[2])+e.grPos[1]*Math.cos(e.grPos[2])-e.grPos[0]*Math.sin(e.grPos[2])))<e.grPos[3]?(e.grPos[3]-f)/e.grPos[3]:0),n.beginPath(),n.arc(d*e.cSize[0],v*e.cSize[1],c*f,0,2*Math.PI),n.closePath(),n.fill()}},changePNum:function(t){var e=this.params;e.pNum[0]=t,e.pNum[1]=t,this.canvas_draw()},changePSize:function(t){var e=this.params;e.pSize[0]=t,e.pSize[1]=t,this.canvas_draw()},changeGrType:function(){this.params.grMode=Number(document.getElementById("grType").value),this.canvas_draw()},changeGrX:function(t){this.params.grPos[0]=t,this.canvas_draw()},changeGrY:function(t){this.params.grPos[1]=t,this.canvas_draw()},changeGrAngle:function(t){this.params.grPos[2]=t*Math.PI/180,this.canvas_draw()},changeGrSize:function(t){this.params.grPos[3]=t,this.canvas_draw()}}}),l=(n(375),n(12)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("PatternMaker")]),t._v(" "),n("div",{staticClass:"update-date mb"},[t._v("# 更新日: 2021年5月26日(水)")]),t._v(" "),n("div",{staticClass:"canvas-set"},[n("canvas",{staticStyle:{margin:"0 0.8rem"},attrs:{id:"pattern",width:"1820",height:"1820"}}),t._v(" "),n("div",[n("label",{staticStyle:{display:"block"}},[t._v("\n        パターン個数: "),n("Slider",{attrs:{min:1,max:280,step:1},on:{value:t.changePNum}})],1),t._v(" "),n("label",{staticStyle:{display:"block"}},[t._v("\n        パターン大きさ: "),n("Slider",{attrs:{min:0,max:3,step:.01},on:{value:t.changePSize}})],1),t._v("\n      グラデーション:\n      "),n("label",{staticStyle:{display:"block"}},[n("select",{attrs:{id:"grType"},on:{change:t.changeGrType}},[n("option",{attrs:{value:"0"}},[t._v("None")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("Gradation(Axis)")])])]),t._v(" "),n("label",{staticStyle:{display:"block"}},[t._v("\n        x: "),n("Slider",{attrs:{min:0,max:1,step:.01},on:{value:t.changeGrX}})],1),n("label",{staticStyle:{display:"block"}},[t._v("\n        y: "),n("Slider",{attrs:{min:0,max:1,step:.01},on:{value:t.changeGrY}})],1),n("label",{staticStyle:{display:"block"}},[t._v("\n        角度: "),n("Slider",{attrs:{min:0,max:360,step:1},on:{value:t.changeGrAngle}})],1),n("label",{staticStyle:{display:"block"}},[t._v("\n        大きさ: "),n("Slider",{attrs:{min:0,max:3,step:.01},on:{value:t.changeGrSize}})],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);