(window.webpackJsonp=window.webpackJsonp||[]).push([[21,6],{285:function(t,e,r){var content=r(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("42802810",content,!0,{sourceMap:!1})},289:function(t,e,r){"use strict";r(285)},290:function(t,e,r){var n=r(30)(!1);n.push([t.i,'.accordion{border:1px solid #aaa;border-width:1px 0;margin-bottom:15px}.accordion .title{display:flex;flex-direction:row;align-items:center;background-color:#ebf9fd;color:#555;padding:10px 2px;font-size:20px;font-weight:700}.accordion .title:before{padding:0 15px 0 12px;font-weight:700;content:"＋"}.accordion .inner{padding:10px}',""]),t.exports=n},294:function(t,e,r){"use strict";r.r(e);r(29);var n=r(1).a.extend({props:{title:{type:String}},methods:{slideUp:function(t,e){void 0===e&&(e=300),t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.transitionTimingFunction="ease",t.style.overflow="hidden",t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0",t.style.marginTop="0",t.style.marginBottom="0",setTimeout((function(){t.style.display="none",t.style.removeProperty("height"),t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),t.style.removeProperty("transition-timing-function"),t.classList.remove("is-open")}),e)},slideDown:function(t,e){void 0===e&&(e=300),t.classList.add("is-open"),t.style.removeProperty("display");var r=window.getComputedStyle(t).display;"none"===r&&(r="block"),t.style.display=r;var n=t.offsetHeight;t.style.overflow="hidden",t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0",t.style.marginTop="0",t.style.marginBottom="0",t.offsetHeight,t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.transitionTimingFunction="ease",t.style.height=n+"px",t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),setTimeout((function(){t.style.removeProperty("height"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),t.style.removeProperty("transition-timing-function")}),e)},slideToggle:function(t,e){return void 0===e&&(e=300),"none"===window.getComputedStyle(t).display?this.slideDown(t,e):this.slideUp(t,e)},click:function(t){for(var e=t.target;"DT"!=e.nodeName;)e=e.parentNode;var r=e.nextElementSibling;this.slideToggle(r)}}}),o=(r(289),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dl",{staticClass:"accordion"},[r("dt",{staticClass:"title",on:{click:t.click}},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),r("dd",{staticClass:"inner",staticStyle:{display:"none"}},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(294),l=n.a.extend({layout:"default",components:{Alist:o.default},mounted:function(){}}),m=r(12),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("ARデモ置き場")]),t._v(" "),r("div",{staticClass:"update-date mb"},[t._v("# 更新日: 2021年6月17日(木)")]),t._v(" "),t._m(0),t._v(" "),r("p",{staticClass:"mb"},[t._v("Three.js と AR.js で作ったものを置いておきます。")]),t._v(" "),r("h2",[t._v("概要")]),t._v(" "),r("p",{staticClass:"mb"},[t._v("AR はカメラを利用し全画面に表示されます。「デモ(水色背景)」をクリックすると実際に遊べます。")]),t._v(" "),r("h3",[t._v("マーカーターゲット")]),t._v(" "),r("p",{staticClass:"mb"},[t._v("ARを行うには、目印となるマーカーが必要です(無くてもできますが、ここではマーカーを使います)。")]),t._v(" "),r("p",[t._v("”A-Frame”ではHiroマーカーがプリセットとして最初から登録されているので、わざわざマーカーの設定をしなくても簡単に使うことができます。")]),t._v(" "),r("p",{staticClass:"mb"},[t._v("”Three.js”で使うには、Hiroマーカーに限らず全てのマーカーを自前で設定する必要があります。")]),t._v(" "),r("p",[t._v("ここでは特段の断りがなければ、以下のHiroマーカーを使用します。")]),t._v(" "),t._m(1),t._v(" "),r("h3",[t._v("推奨環境")]),t._v(" "),t._m(2),t._v(" "),r("h2",[t._v("デモコンテンツ")]),t._v(" "),r("h3",[t._v("easyTest")]),t._v(" "),r("p",[t._v("超基礎的なコードのみで構成し、Three.jsとAR.jsの動作を確認するためのページです。")]),t._v(" "),r("p",[t._v("Hiroマーカーにカラフルな立方体が表示されます。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("h3",[t._v("gltfTest")]),t._v(" "),r("p",[t._v("gltf / glb 形式のモデルを使った表示を行います。 gltf に付随する簡易なアニメーション付きです。")]),t._v(" "),r("p",[t._v("Hiroマーカーに地球が表示されます。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("h3",[t._v("eventTest")]),t._v(" "),r("p",[t._v("ギアのモデルをクリックやタップすることで、アニメーションが起動します(ギアが回ります)。")]),t._v(" "),r("p",[t._v("Hiroマーカーにギアが表示されます。金属マテリアルのテストも兼ねています。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("h3",[t._v("rotateTest")]),t._v(" "),r("p",[t._v("回転のテストです。")]),t._v(" "),t._m(9),t._v(" "),r("Alist",{attrs:{title:"システム関連"}},[r("h3",[t._v("mouseCollisionTest")]),t._v(" "),r("p",[t._v("画面上に立方体を表示し、当たり判定座標とオブジェクト座標のズレを表示します。Rayを大量に飛ばすので"),r("b",[t._v("デバイスによっては動作が非常に重い可能性があります。")])]),t._v(" "),r("p",[t._v("上部のバーをタップすると、自動補正のオン(緑)/オフ(灰)を切り替えることができます(精度は改善予定)。")]),t._v(" "),r("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",margin:"10px 0"}},[r("img",{staticStyle:{width:"48%","max-width":"240px",margin:"0 3px"},attrs:{src:"/images/ARdemo/mouseCollisionTest-001.PNG"}}),t._v(" "),r("img",{staticStyle:{width:"48%","max-width":"240px",margin:"0 3px"},attrs:{src:"/images/ARdemo/mouseCollisionTest-002.PNG"}})]),t._v(" "),r("div",{staticClass:"mb"},[r("a",{staticClass:"link-box",attrs:{href:"ARdemo/mouseCollisionTest",target:"_blank",rel:"noopener noreferrer"}},[t._v("mouseCollisionTest デモ")])]),t._v(" "),r("h3",[t._v("izumiARKitTest(開発中)")]),t._v(" "),r("p",[t._v("私の自作ARKitです。主にUIを提供します。ちなみに”いずみ”は私の高校の時のあだ名です。")]),t._v(" "),r("div",[r("a",{staticClass:"link-box",attrs:{href:"ARdemo/izumiARKitTest",target:"_blank",rel:"noopener noreferrer"}},[t._v("izumiARKitTest デモ")]),t._v(" "),r("a",{staticClass:"link-box",attrs:{href:"ARdemo/izumiARKitTestUI",target:"_blank",rel:"noopener noreferrer"}},[t._v("izumiARKitTestUI デモ")])])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"attention-box"},[r("div",{staticClass:"attention-box-title"},[t._v("A-Frame での制作中止について")]),t._v("\n    諸事情により、AR制作は ”A-Frame” から ”Three.js” に切り替えることになりました。"),r("br"),t._v("\n    そのため A-Frame に関する記事は一部を残し、デモページは削除します。\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb",staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[e("img",{staticStyle:{"max-width":"280px"},attrs:{src:"/images/ARdemo/Hiro.png"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"mb"},[t._v("\n    AR.jsの推奨環境が"),r("b",[t._v("スマホ版ブラウザのSafariやChrome")]),t._v("のようなので、もしうまく行かない場合はそちらで試してください。\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",margin:"10px 0"}},[e("img",{staticStyle:{"max-width":"240px"},attrs:{src:"/images/ARdemo/easyTest-001.PNG"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb"},[r("a",{staticClass:"link-box",attrs:{href:"ARdemo/easyTest",target:"_blank",rel:"noopener noreferrer"}},[t._v("easyTest デモ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",margin:"10px 0"}},[r("img",{staticStyle:{width:"48%","max-width":"240px",margin:"0 3px"},attrs:{src:"/images/ARdemo/gltfTest-001.PNG"}}),t._v(" "),r("img",{staticStyle:{width:"48%","max-width":"240px",margin:"0 3px"},attrs:{src:"/images/ARdemo/gltfTest-002.PNG"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb"},[r("a",{staticClass:"link-box",attrs:{href:"ARdemo/gltfTest",target:"_blank",rel:"noopener noreferrer"}},[t._v("gltfTest デモ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",margin:"10px 0"}},[e("img",{staticStyle:{"max-width":"240px"},attrs:{src:"/images/ARdemo/eventTest-002.PNG"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb"},[r("a",{staticClass:"link-box",attrs:{href:"ARdemo/eventTest",target:"_blank",rel:"noopener noreferrer"}},[t._v("eventTest デモ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb"},[r("a",{staticClass:"link-box",attrs:{href:"ARdemo/rotateTest",target:"_blank",rel:"noopener noreferrer"}},[t._v("rotateTest デモ")])])}],!1,null,null,null);e.default=component.exports}}]);