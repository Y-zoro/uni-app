(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/pull-down-refresh/pull-down-refresh"],{"1e39":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"下拉刷新 + 加载更多",data:[],loadMoreText:"加载中...",showLoadMore:!1,max:0}},onLoad:function(){this.initData()},onUnload:function(){this.max=0,this.data=[],this.loadMoreText="加载更多",this.showLoadMore=!1},onReachBottom:function(){var t=this;console.log("onReachBottom"),this.max>40?this.loadMoreText="没有更多数据了!":(this.showLoadMore=!0,setTimeout(function(){t.setListData()},300))},onPullDownRefresh:function(){console.log("onPullDownRefresh"),this.initData()},methods:{initData:function(){var n=this;setTimeout(function(){n.max=0,n.data=[];var a=[];n.max+=10;for(var o=n.max-9;o<n.max+1;o++)a.push(o);n.data=n.data.concat(a),t.stopPullDownRefresh()},300)},setListData:function(){var t=[];this.max+=10;for(var n=this.max-9;n<this.max+1;n++)t.push(n);this.data=this.data.concat(t)}}};n.default=a}).call(this,a("543d")["default"])},"20cd":function(t,n,a){"use strict";var o=a("c64b"),e=a.n(o);e.a},"406a":function(t,n,a){"use strict";(function(t){a("7824"),a("921b");o(a("66fd"));var n=o(a("f9f9"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("543d")["createPage"])},"979b":function(t,n,a){"use strict";a.r(n);var o=a("1e39"),e=a.n(o);for(var i in o)"default"!==i&&function(t){a.d(n,t,function(){return o[t]})}(i);n["default"]=e.a},af4f:function(t,n,a){"use strict";var o,e=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"b",function(){return e}),a.d(n,"c",function(){return i}),a.d(n,"a",function(){return o})},c64b:function(t,n,a){},f9f9:function(t,n,a){"use strict";a.r(n);var o=a("af4f"),e=a("979b");for(var i in e)"default"!==i&&function(t){a.d(n,t,function(){return e[t]})}(i);a("20cd");var u,r=a("f0c5"),c=Object(r["a"])(e["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=c.exports}},[["406a","common/runtime","common/vendor"]]]);