(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/segmented-control/segmented-control"],{"01b8":function(n,e,t){},"258f":function(n,e,t){"use strict";var o={"uni-segmented-control":()=>t.e("components/uni-segmented-control/uni-segmented-control").then(t.bind(null,"0065")),"uni-section":()=>t.e("components/uni-section/uni-section").then(t.bind(null,"f494"))},u=function(){var n=this,e=n.$createElement;n._self._c},c=[];t.d(e,"b",function(){return u}),t.d(e,"c",function(){return c}),t.d(e,"a",function(){return o})},"5ac9":function(n,e,t){},"8ebd":function(n,e,t){"use strict";t.r(e);var o=t("258f"),u=t("b5bf");for(var c in u)"default"!==c&&function(n){t.d(e,n,function(){return u[n]})}(c);t("fbfe"),t("b82b");var i,r=t("f0c5"),l=Object(r["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=l.exports},9371:function(n,e,t){"use strict";(function(n){t("7824"),t("921b");o(t("66fd"));var e=o(t("8ebd"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},a270:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return t.e("components/uni-segmented-control/uni-segmented-control").then(t.bind(null,"0065"))},u=function(){return t.e("components/uni-section/uni-section").then(t.bind(null,"f494"))},c={components:{uniSection:u,uniSegmentedControl:o},data:function(){return{items:["选项卡1","选项卡2","选项卡3"],styles:[{value:"button",text:"按钮",checked:!0},{value:"text",text:"文字"}],colors:["#007aff","#4cd964","#dd524d"],current:0,colorIndex:0,activeColor:"#007aff",styleType:"button"}},methods:{onClickItem:function(n){this.current!==n.currentIndex&&(this.current=n.currentIndex)},styleChange:function(n){this.styleType!==n.detail.value&&(this.styleType=n.detail.value)},colorChange:function(n){this.styleType!==n.detail.value&&(console.log(n.detail.value),this.activeColor=n.detail.value)}}};e.default=c},b5bf:function(n,e,t){"use strict";t.r(e);var o=t("a270"),u=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,function(){return o[n]})}(c);e["default"]=u.a},b82b:function(n,e,t){"use strict";var o=t("5ac9"),u=t.n(o);u.a},fbfe:function(n,e,t){"use strict";var o=t("01b8"),u=t.n(o);u.a}},[["9371","common/runtime","common/vendor"]]]);