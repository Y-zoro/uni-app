(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/text/text"],{"0b50":function(t,e,n){"use strict";n.r(e);var i=n("691c"),a=n("29e4");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("56e4");var r,c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=o.exports},"29e4":function(t,e,n){"use strict";n.r(e);var i=n("aa7d"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=a.a},"56e4":function(t,e,n){"use strict";var i=n("f8dd"),a=n.n(i);a.a},"691c":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return i})},"71bc":function(t,e,n){"use strict";(function(t){n("7824"),n("921b");i(n("66fd"));var e=i(n("0b50"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},aa7d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"text",texts:["HBuilder，400万开发者选择的IDE","MUI，轻巧、漂亮的前端开源框架","wap2app，M站快速转换原生体验的App","5+Runtime，为HTML5插上原生的翅膀","HBuilderX，轻巧、极速，极客编辑器","uni-app，终极跨平台方案","HBuilder，400万开发者选择的IDE","MUI，轻巧、漂亮的前端开源框架","wap2app，M站快速转换原生体验的App","5+Runtime，为HTML5插上原生的翅膀","HBuilderX，轻巧、极速，极客编辑器","uni-app，终极跨平台方案","......"],text:"",canAdd:!0,canRemove:!1,extraLine:[]}},methods:{add:function(t){this.extraLine.push(this.texts[this.extraLine.length%12]),this.text=this.extraLine.join("\n"),this.canAdd=this.extraLine.length<12,this.canRemove=this.extraLine.length>0},remove:function(t){this.extraLine.length>0&&(this.extraLine.pop(),this.text=this.extraLine.join("\n"),this.canAdd=this.extraLine.length<12,this.canRemove=this.extraLine.length>0)}}};e.default=i},f8dd:function(t,e,n){}},[["71bc","common/runtime","common/vendor"]]]);