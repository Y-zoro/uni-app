(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/pagination/pagination"],{"0d57":function(n,t,i){},1248:function(n,t,i){"use strict";var e=i("0d57"),u=i.n(e);u.a},"4ce0":function(n,t,i){"use strict";var e=i("663d"),u=i.n(e);u.a},"4d71":function(n,t,i){"use strict";var e={"uni-section":()=>i.e("components/uni-section/uni-section").then(i.bind(null,"f494")),"uni-pagination":()=>i.e("components/uni-pagination/uni-pagination").then(i.bind(null,"5d39"))},u=function(){var n=this,t=n.$createElement;n._self._c},o=[];i.d(t,"b",function(){return u}),i.d(t,"c",function(){return o}),i.d(t,"a",function(){return e})},"663d":function(n,t,i){},"6e5a":function(n,t,i){"use strict";(function(n){i("7824"),i("921b");e(i("66fd"));var t=e(i("c3c6"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,i("543d")["createPage"])},b214:function(n,t,i){"use strict";i.r(t);var e=i("f5e9"),u=i.n(e);for(var o in e)"default"!==o&&function(n){i.d(t,n,function(){return e[n]})}(o);t["default"]=u.a},c3c6:function(n,t,i){"use strict";i.r(t);var e=i("4d71"),u=i("b214");for(var o in u)"default"!==o&&function(n){i.d(t,n,function(){return u[n]})}(o);i("1248"),i("4ce0");var c,a=i("f0c5"),r=Object(a["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);t["default"]=r.exports},f5e9:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){return i.e("components/uni-pagination/uni-pagination").then(i.bind(null,"5d39"))},u=function(){return i.e("components/uni-list/uni-list").then(i.bind(null,"217d"))},o=function(){return i.e("components/uni-list-item/uni-list-item").then(i.bind(null,"5394"))},c=function(){return i.e("components/uni-section/uni-section").then(i.bind(null,"f494"))},a={components:{uniPagination:e,uniList:u,uniListItem:o,uniSection:c},data:function(){return{current:1,total:0,pageSize:10}},methods:{add:function(){this.total+=10},reset:function(){this.total=0,this.current=1},change:function(n){console.log(n),this.current=n.current}}};t.default=a}},[["6e5a","common/runtime","common/vendor"]]]);