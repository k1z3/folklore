(window.webpackJsonp=window.webpackJsonp||[]).push([[3,7,8],{283:function(t,e,r){var n=r(16),o=/"/g;t.exports=function(t,e,r,l){var c=String(n(t)),h="<"+e;return""!==r&&(h+=" "+r+'="'+String(l).replace(o,"&quot;")+'"'),h+">"+c+"</"+e+">"}},284:function(t,e,r){var n=r(6);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},293:function(t,e,r){"use strict";r.r(e),r.d(e,"MatchType",(function(){return n})),r.d(e,"MdResult",(function(){return o})),r.d(e,"MdRule",(function(){return l}));var n={UNIVERSAL:1,LINE:2,BLOCK:4,BLOCK_EXCLUDE:8},o=function(){function t(t,e,embed){void 0===e&&(e=""),void 0===embed&&(embed=""),this.index=-1,1!==e.length?(this.index=this.diff_index(e,t),this.result=e,this.embed=embed):(this.index=-1,this.result=t)}return t.prototype.diff_index=function(t,e){for(var r=0,n=0;;){var o=t.indexOf("",r),l=e.indexOf("",r);if(-1===o&&-1===l)break;if(o===l&&(r=o+1,n++),o!==l)return n}return-1},t}(),l=function(t,e,r,o){void 0===r&&(r=n.UNIVERSAL),this.regex=t,this.callback=e,this.type=r,this.mdrule_match=o,this.index=0}},305:function(t,e,r){"use strict";var n=r(3),o=r(283);n({target:"String",proto:!0,forced:r(284)("bold")},{bold:function(){return o(this,"b","","")}})},306:function(t,e,r){"use strict";var n=r(3),o=r(283);n({target:"String",proto:!0,forced:r(284)("italics")},{italics:function(){return o(this,"i","","")}})},307:function(t,e,r){"use strict";var n=r(3),o=r(283);n({target:"String",proto:!0,forced:r(284)("sup")},{sup:function(){return o(this,"sup","","")}})},308:function(t,e,r){"use strict";var n=r(3),o=r(283);n({target:"String",proto:!0,forced:r(284)("sub")},{sub:function(){return o(this,"sub","","")}})},309:function(t,e,r){r(310)},310:function(t,e,r){"use strict";var n=r(3),o=r(16),l=r(78),c=r(79),h=r(168),d=r(4),f=r(20),m=d("replace"),v=RegExp.prototype,y=Math.max,_=function(t,e,r){return r>t.length?-1:""===e?r:t.indexOf(e,r)};n({target:"String",proto:!0},{replaceAll:function(t,e){var r,n,d,E,L,T,x,S,k=o(this),N=0,w=0,M="";if(null!=t){if((r=l(t))&&!~String(o("flags"in v?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(n=t[m]))return n.call(t,k,e);if(f&&r)return String(k).replace(t,e)}for(d=String(k),E=String(t),(L="function"==typeof e)||(e=String(e)),T=E.length,x=y(1,T),N=_(d,E,0);-1!==N;)S=L?String(e(E,N,d)):h(E,d,N,[],void 0,e),M+=d.slice(w,N)+S,w=N+T,N=_(d,E,N+x);return w<d.length&&(M+=d.slice(w)),M}})},335:function(t,e,r){"use strict";r.r(e),r.d(e,"MdParser",(function(){return c}));r(51),r(50),r(167),r(305),r(306),r(307),r(308),r(40),r(166),r(110),r(309),r(76),r(17),r(32),r(41),r(24),r(42),r(43),r(44),r(28);var n=r(293);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var c=function(){function t(t){var e=this;void 0===t&&(t=""),this.priority_mdrule=[],this.mdrule=[],this.mdrule_universal=[],this.mdrule_match=function(t,r,o,l){void 0===o&&(o=null),void 0===l&&(l=!1);var c=!1,h=null;return o||(o=e.mdrule),o.forEach((function(e){if(!c&&t[r].match(e.regex[0]))if(e.type!==n.MatchType.BLOCK||l)if(e.type!==n.MatchType.BLOCK_EXCLUDE||l)e.type!==n.MatchType.LINE||l?e.type===n.MatchType.UNIVERSAL&&(h=e,c=!0):(h=e,c=!0);else{(h=e).index=t.length,c=!0;for(var o=r+1;o<t.length;o++)if(!t[o].match(e.regex[1])){h.index=o;break}}else{(h=e).index=t.length,c=!0;for(var i=r+1;i<t.length;i++)if(t[i].match(e.regex[1])){h.index=i+1;break}}})),h},this.reset_mdrule()}var e=t.prototype;return e.render=function(input){var t=input;return"string"!=typeof t&&(t=this.vnode2string(t)),t=this.parse(t)},e.reset_mdrule=function(){this.add_mdrule([/\/./],this.escape,n.MatchType.UNIVERSAL),this.add_mdrule([/^```/,/^```$/],this.code_block,n.MatchType.BLOCK),this.add_mdrule([/^ *(\* *\* *\* *(\*| )*|_ *_ *_ *(_| )*|- *- *- *(-| )*)$/],this.hr,n.MatchType.LINE),this.add_mdrule([/^[-\+\*] .*/,/(^([-\+\*] |  ).*|^ *$)/],this.ulist,n.MatchType.BLOCK_EXCLUDE),this.add_mdrule([/^    /,/^    /],this.code_block,n.MatchType.BLOCK),this.add_mdrule([/^###### .*/],this.h6,n.MatchType.LINE),this.add_mdrule([/^##### .*/],this.h5,n.MatchType.LINE),this.add_mdrule([/^#### .*/],this.h4,n.MatchType.LINE),this.add_mdrule([/^### .*/],this.h3,n.MatchType.LINE),this.add_mdrule([/^## .*/],this.h2,n.MatchType.LINE),this.add_mdrule([/^# .*/],this.h1,n.MatchType.LINE),this.add_mdrule([/`.+?`/],this.code,n.MatchType.UNIVERSAL),this.add_mdrule([/\!\[.+?\]\(.+?\)/],this.image,n.MatchType.UNIVERSAL),this.add_mdrule([/\[.+?\]\(.+?\)/],this.alink,n.MatchType.UNIVERSAL),this.add_mdrule([/\*\*.+?\*\*|__.+?__/],this.bold,n.MatchType.UNIVERSAL),this.add_mdrule([/~~.+?~~/],this.strikethrough,n.MatchType.UNIVERSAL),this.add_mdrule([/\+\+.+?\+\+/],this.insert,n.MatchType.UNIVERSAL),this.add_mdrule([/==.+?==/],this.mark,n.MatchType.UNIVERSAL),this.add_mdrule([/\*.+?\*|_.+?_/],this.italic,n.MatchType.UNIVERSAL),this.add_mdrule([/\^.+?\^/],this.sup,n.MatchType.UNIVERSAL),this.add_mdrule([/~.+?~/],this.sub,n.MatchType.UNIVERSAL)},e.add_mdrule=function(t,e,r){void 0===r&&(r=n.MatchType.UNIVERSAL);var o=new n.MdRule(t,e,r,this.mdrule_match);this.mdrule.push(o)},e.vnode2string=function(t){for(var e,r="",n=o(t);!(e=n()).done;){var l=e.value,c="";if(l.text)c=l.text;else if("br"==l.tag)c="<br>";else{var h=l.tag,d="",style="";if(l.data){for(var f in d=l.data.staticClass?'class="'+l.data.staticClass+'"':"",style='style="',l.data.staticStyle)style+=f+":"+l.data.staticStyle[f]+";";style+='"'}l.children&&(c+=this.vnode2string(l.children)),c="<"+h+" "+style+" "+d+">"+c+"</"+h+">"}r+=c}return r="\n"==r[0]?r.slice(1):r},e.parse=function(t){for(var e=t.split("\n"),r=-1,o=!1,a=0;a<e.length;a++)if(e[a].match(/^( |　|\t)*$/))e[a]="";else{-1==r&&(r=e[a].match(/^( )*/)[0].length);for(var i=0;i<r;i++)e[a]=" "==e[a][0]?e[a].slice(1):e[a]}for(var l=0;l<e.length;l++){var c=this.mdrule_match(e,l),h=!1,d=!1;if(c){for(var f=c.index;c;){if(c.type===n.MatchType.BLOCK||c.type===n.MatchType.BLOCK_EXCLUDE){for(var m=c.callback(e.slice(l,f)),v=l;v<f;v++)e[v]="";m&&(e[f-1]="string"==typeof m?m:m.result,h=!0,d=!0)}else if(c.type===n.MatchType.LINE){var y=c.callback([e[l]]);e[l]="string"==typeof y?y:y.result,d=!0}else if(c.type===n.MatchType.UNIVERSAL){var _=c.callback([e[l]]);e[l]="string"==typeof _?_:_.result}c=d?this.mdrule_match(e,l,null,!0):this.mdrule_match(e,l),console.log(c)}o&&(e[l-1]=e[l-1]+"</p>",o=!1),h&&(l=f-1)}d||(0==l?""!==e[l]&&(e[l]="<p>"+e[l],o=!0):""===e[l-1]?""===e[l]?e[l-1]="<br>":(e[l]="<p>"+e[l],o=!0):o&&""===e[l]?(e[l-1]=e[l-1]+"</p>",o=!1):o&&""!==e[l]?e[l-1]=e[l-1]+"<br>":o||""===e[l]||(e[l]="<p>"+e[l],o=!0))}o&&(e[e.length-1]=e[e.length-1]+"</p>");var E=e.join("\n");return E=(E=(E=(E=E.replaceAll("\t","")).replace(/<script[\s\S]*<\/script>/,"")).replace(/<script[\s\S]*?>/,"")).replace(/<style[\s\S]*<\/style>/,"")},e.escape=function(t){return t[0].replace(/\/./,(function(t){return t.slice(1)}))},e.code_block=function(t){for(var e=t[t.length-1].match("```")?1:0,i=1;i<t.length-e;i++)t[i]="<li>"+t[i]+"</li>";return"<div class='code-block'><code><ol>"+t.slice(1,t.length-e).join("\n")+"</ol></code></div>"},e.ulist=function(t){for(var e=!1,i=0;i<t.length;i++)if(t[i].match(/^(\* *\* *\* *(\*| )*|_ *_ *_ *(_| )*|- *- *- *(-| )*)$/))t[i]="</ul>"+t[i].replace(/^(\* *\* *\* *(\*| )*|_ *_ *_ *(_| )*|- *- *- *(-| )*)$/,"<hr>")+"<ul>",e=!1;else if(t[i].match(/^[-\+\*] /)){0!==i&&(t[i-1]+="</li>"),e=!1;for(var r=[],a=i+1;a<t.length;a++)if(!t[a].match(/(^  |^ *$)/)){r=t.slice(i,a);break}0===r.length&&(r=t.slice(i,t.length));for(var o=0;o<r.length;o++)r[o]=r[o].slice(2,r[o].length);for(var l=0;l<r.length;l++){var c=this.mdrule_match(r,l,null);if(c)if(c.type===n.MatchType.BLOCK||c.type===n.MatchType.BLOCK_EXCLUDE){var h=c.index,d=c.callback(r.slice(l,h));if(d){for(var f=l;f<h;f++)r[f]="";r[h-1]="string"==typeof d?d:d.result,e=!1,l=h-1}}else{var m=c.callback([r[l]]);r[l]="string"==typeof m?m:m.result,e=!1}else e&&(r[l]="<br>"+r[l]),e=!0}for(var v=i;v<i+r.length;v++)t[v]="";t[i+r.length-1]="<li>"+r.join(""),i+=r.length-1}return t[t.length-1]+="</li>","<ul>"+t.join("")+"</ul>"},e.h1=function(t){var e=t[0];return e=e.replace(/^# +/,"<h1>"),e+="</h1>",new n.MdResult("A\tBC","A\tB\t"),e},e.h2=function(t){var e=t[0];return e=e.replace(/^## +/,"<h2>"),e+="</h2>"},e.h3=function(t){var e=t[0];return e=e.replace(/^### +/,"<h3>"),e+="</h3>"},e.h4=function(t){var e=t[0];return e=e.replace(/^#### +/,"<h4>"),e+="</h4>"},e.h5=function(t){var e=t[0];return e=e.replace(/^##### +/,"<h5>"),e+="</h5>"},e.h6=function(t){var e=t[0];return e=e.replace(/^###### +/,"<h6>"),e+="</h6>"},e.hr=function(t){var e=t[0];return e=e.replace(/^ *(\* *\* *\* *(\*| )*|_ *_ *_ *(_| )*|- *- *- *(-| )*)$/,"<hr>")},e.italic=function(t){var e=t[0],r=e.match(/\*.+?\*|_.+?_/);return e=e.replace(r[0],"<i>"+r[0].slice(1,r[0].length-1)+"</i>")},e.bold=function(t){var e=t[0],r=e.match(/\*\*.+?\*\*|__.+?__/);return e=e.replace(r[0],"<b>"+r[0].slice(2,r[0].length-2)+"</b>")},e.strikethrough=function(t){var e=t[0],r=e.match(/~~.+?~~/);return e=e.replace(r[0],"<s>"+r[0].slice(2,r[0].length-2)+"</s>")},e.insert=function(t){var e=t[0],r=e.match(/\+\+.+?\+\+/);return e=e.replace(r[0],"<ins>"+r[0].slice(2,r[0].length-2)+"</ins>")},e.mark=function(t){var e=t[0],r=e.match(/==.+?==/);return e=e.replace(r[0],"<mark>"+r[0].slice(2,r[0].length-2)+"</mark>")},e.code=function(t){var e=t[0],r=e.match(/`.+?`/);return e=e.replace(r[0],"<code>"+r[0].slice(1,r[0].length-1)+"</code>")},e.image=function(t){var e=t[0],r=e.match(/\!\[.+?\]\(.+?\)/)[0],n=r.match(/\!\[.+?\]/)[0],o=r.match(/\(.+?\)/)[0];return e=e.replace(r,"<img src='"+o.slice(1,o.length-1)+"' alt='"+n.slice(2,n.length-1)+"'>")},e.alink=function(t){var e=t[0],r=e.match(/\[.+?\]\(.+?\)/)[0],n=r.match(/\[.+?\]/)[0],o=r.match(/\(.+?\)/)[0];return e=e.replace(r,"<a href='"+o.slice(1,o.length-1)+"'>"+n.slice(1,n.length-1)+"</a>")},e.sup=function(t){var e=t[0],r=e.match(/\^.+?\^/);return e=e.replace(r[0],"<sup>"+r[0].slice(1,r[0].length-1)+"</sup>")},e.sub=function(t){var e=t[0],r=e.match(/~.+?~/);return e=e.replace(r[0],"<sub>"+r[0].slice(1,r[0].length-1)+"</sub>")},e.rmTN=function(t){return"\n"==t[0]?t.slice(1):t},t}()},398:function(t,e,r){"use strict";r.r(e);r(40),r(50),r(167),r(166),r(110),r(76),r(29),r(17),r(32),r(41),r(24),r(42),r(43),r(44),r(28);var n=r(1),o=r(335);function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var h=n.a.extend({data:function(){return{html:"",parse:new o.MdParser,footnotes:[],footnote_no:0,closePause:!1}},created:function(){this.$slots.default&&this.render(this.$slots.default)},mounted:function(){this.addAnkerProcess(),this.addFootnoteProcess()},methods:{render:function(t){var html=this.parse.render(t);this.html=html},node2html:function(t){var e="";if(t.text)e=this.$md.render(this.rmTN(t.text)).slice(0,-1),"\n"!=t.text[t.text.length-1]&&(e+="TAG_IGNORE");else if("br"==t.tag)e="<br>";else{var r=t.tag,n="",style="";if(t.data){for(var o in n=t.data.staticClass?'class="'+t.data.staticClass+'"':"",style='style="',t.data.staticStyle)style+=o+":"+t.data.staticStyle[o]+";";style+='"'}if(t.children)for(var c,h=l(t.children);!(c=h()).done;){var d=c.value;e+=this.node2html(d)}e="<"+r+" "+style+" "+n+">"+e+"</"+r+">"}return e},convertCode:function(t){var e=t,r=t.match(/<pre><code.*?>/g),n=t.match(/<pre><code[\s\S]*?<\/code><\/pre>/g);if(r)for(var i=0;i<r.length;i++){n[i]=n[i].substr(r[i].length,n[i].length-r[i].length-14);for(var o=n[i].split("\n"),l=0;l<o.length;l++)o[l]="<li class='num-"+(l+1)+"'><div>"+o[l]+"</div></li>";var c="<ul>"+o.join("")+"</ul>";console.log(o.join("")),e=e.replace(n[i],c)}return e},convertTagIgnore:function(t){var e=t,r=t.match(/\<\/p\>TAG_IGNORE.*?\<p\>/g);if(r)for(var n,o=l(r);!(n=o()).done;){var i=n.value;e=e.replace(i,i.substr(14,i.length-17))}return e=e.replace(/TAG_IGNORE/g,"")},resolvePath:function(t){return t},convertFootnote:function(t){var e=t,r=t.match(/\(\(.+?\)\)/g);if(r){for(var n,o=l(r);!(n=o()).done;){var i=n.value;this.footnotes.push(i.substr(2,i.length-4)),e=e.replace(i,"<i class='bi bi-bookmark-fill iz-md-bookmark'></i>")}"<div class='title'><div class='txt-14'>脚注</div><i class='bi bi-x-square txt-gray-c-hv-f'></i></div>","<div class='content'></div>","</div>",e+="<div class='iz-md-footnote'><div class='title'><div class='txt-14'>脚注</div><i class='bi bi-x-square txt-gray-c-hv-f'></i></div><div class='content'></div></div>"}return e},rmN:function(t){return t.replace(/\r?\n/g,"")},rmTN:function(t){return"\n"==t[0]?t.slice(1):t},clickPush:function(t){t.preventDefault(),this.$router.push(t.target.pathname)},addAnkerProcess:function(){if(this.$el.getElementsByTagName("a"))for(var i=0;i<this.$el.getElementsByTagName("a").length;i++){var link=this.$el.getElementsByTagName("a")[i];-1!=link.href.indexOf(window.location.origin)?link.addEventListener("click",this.clickPush,!1):(link.setAttribute("target","_blank"),link.setAttribute("rel","noopener noreferrer"))}},calcFootnotePos:function(){var t=this.$el.getElementsByClassName("iz-md-footnote")[0],content=this.$el,e=this.$el.getElementsByClassName("iz-md-bookmark")[this.footnote_no].getBoundingClientRect(),r=content.getBoundingClientRect();t.children[1].scrollTop=0,t.style.left="0px",t.style.top="0px";var n=(content.clientWidth-t.clientWidth+16)/content.clientWidth;t.style.left=r.left+(window.pageXOffset+e.left-r.left)*n+"px";var o="center";window.innerHeight/2<e.top?(t.style.top=window.pageYOffset+e.top-(t.clientHeight+4)+"px",o+=" bottom"):(t.style.top=window.pageYOffset+e.top+24+"px",o+=" top"),t.style.transformOrigin=o},openFootnoteWindow:function(t){var e=this,r=this.$el.getElementsByClassName("iz-md-footnote")[0];if(r.classList.contains("on"))r.classList.remove("on");else if(r.classList.contains("off"))return;this.footnote_no=t,r.children[1].innerHTML=this.footnotes[this.footnote_no],window.setTimeout((function(){r.classList.add("off"),e.calcFootnotePos()}),5),window.setTimeout((function(){r.classList.remove("off"),r.classList.add("on")}),10)},closeFootnoteWindow:function(){var t=this.$el.getElementsByClassName("iz-md-footnote")[0];t.classList.contains("on")&&(t.classList.remove("on"),t.classList.add("off"),window.setTimeout((function(){t.classList.remove("off")}),200))},addFootnoteProcess:function(){var t=this;if(0!=this.$el.getElementsByClassName("iz-md-bookmark").length){for(var e=function(i){var e=t.$el.getElementsByClassName("iz-md-bookmark")[i];t.footnotes[i]=t.footnotes[i].replace(/\<a href/g,"<a target='_blank' rel='noopener noreferrer' href"),e.addEventListener("click",(function(){t.openFootnoteWindow(i)}),!1)},i=0;i<this.$el.getElementsByClassName("iz-md-bookmark").length;i++)e(i);this.$el.getElementsByClassName("iz-md-footnote")[0].children[0].children[1].addEventListener("click",(function(){t.closeFootnoteWindow()}),!1);var r=this.$el.getElementsByClassName("iz-md-footnote")[0];new ResizeObserver((function(e){t.closePause=!0,t.calcFootnotePos()})).observe(r);var content=this.$el;new ResizeObserver((function(e){t.closeFootnoteWindow()})).observe(content),window.addEventListener("resize",(function(){t.closeFootnoteWindow()}),!1)}}}}),d=r(12),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.html)}})}),[],!1,null,null,null);e.default=component.exports}}]);