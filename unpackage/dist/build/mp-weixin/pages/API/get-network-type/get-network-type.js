(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/get-network-type/get-network-type"],{"1d2a":function(t,e,n){"use strict";n.r(e);var o=n("6858"),r=n("f091");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);var a,c=n("f0c5"),i=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=i.exports},"1ee9":function(t,e,n){"use strict";(function(t){n("7824"),n("921b");o(n("66fd"));var e=o(n("1d2a"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},5765:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"getNetworkType",hasNetworkType:!1,networkType:""}},onUnload:function(){this.networkType="",this.hasNetworkType=!1},methods:{getNetworkType:function(){var e=this;t.getNetworkType({success:function(t){console.log(t),e.hasNetworkType=!0,e.networkType=t.subtype||t.networkType},fail:function(){t.showModal({content:"获取失败！",showCancel:!1})}})},clear:function(){this.hasNetworkType=!1,this.networkType=""}}};e.default=n}).call(this,n("543d")["default"])},6858:function(t,e,n){"use strict";var o,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return o})},f091:function(t,e,n){"use strict";n.r(e);var o=n("5765"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a}},[["1ee9","common/runtime","common/vendor"]]]);