(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/popup/popup"],{"03e1":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return e.e("components/uni-section/uni-section").then(e.bind(null,"f494"))},o=function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"b21c"))},u=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"78b0"))},c={components:{uniSection:i,uniPopup:o,uniIcons:u},data:function(){return{type:"",list:["1","2","3","4","5","6","7","8","9","10"],content:"顶部弹 popup",bottomData:[{text:"微信",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png",name:"wx"},{text:"支付宝",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png",name:"wx"},{text:"QQ",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png",name:"qq"},{text:"新浪",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png",name:"sina"},{text:"百度",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png",name:"copy"},{text:"其他",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png",name:"more"}]}},methods:{togglePopup:function(n,t){var e=this;switch(n){case"top":this.content="顶部弹出 popup";break;case"bottom":this.content="底部弹出 popup";break;case"center":this.content="居中弹出 popup";break}this.type=n,this.$nextTick(function(){e.$refs["show"+t].open()})},cancel:function(n){this.$refs["show"+n].close()},change:function(n){console.log("是否打开:"+n.show)}},onBackPress:function(){this.$refs["showpopup"].close(),this.$refs["showtip"].close(),this.$refs["showimage"].close(),this.$refs["showshare"].close()}};t.default=c},"24e6":function(n,t,e){"use strict";e.r(t);var i=e("ffe3"),o=e("c51a");for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e("3011"),e("e11d");var c,s=e("f0c5"),p=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);t["default"]=p.exports},3011:function(n,t,e){"use strict";var i=e("79ba"),o=e.n(i);o.a},"4d56":function(n,t,e){"use strict";(function(n){e("7824"),e("921b");i(e("66fd"));var t=i(e("24e6"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"79ba":function(n,t,e){},c41f:function(n,t,e){},c51a:function(n,t,e){"use strict";e.r(t);var i=e("03e1"),o=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);t["default"]=o.a},e11d:function(n,t,e){"use strict";var i=e("c41f"),o=e.n(i);o.a},ffe3:function(n,t,e){"use strict";var i={"uni-section":()=>e.e("components/uni-section/uni-section").then(e.bind(null,"f494")),"uni-popup":()=>e.e("components/uni-popup/uni-popup").then(e.bind(null,"b21c")),"uni-icons":()=>Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"78b0"))},o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",function(){return o}),e.d(t,"c",function(){return u}),e.d(t,"a",function(){return i})}},[["4d56","common/runtime","common/vendor"]]]);