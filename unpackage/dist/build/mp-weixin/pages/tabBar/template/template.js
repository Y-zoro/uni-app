(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/template/template"],{3993:function(t,n,a){"use strict";var e,u=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"b",function(){return u}),a.d(n,"c",function(){return i}),a.d(n,"a",function(){return e})},"6fd2":function(t,n,a){"use strict";var e=a("ddc4"),u=a.n(e);u.a},"7f48":function(t,n,a){"use strict";a.r(n);var e=a("c573"),u=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,function(){return e[t]})}(i);n["default"]=u.a},9324:function(t,n,a){"use strict";var e=a("db27"),u=a.n(e);u.a},a8eb:function(t,n,a){"use strict";a.r(n);var e=a("3993"),u=a("7f48");for(var i in u)"default"!==i&&function(t){a.d(n,t,function(){return u[t]})}(i);a("6fd2"),a("9324");var r,o=a("f0c5"),l=Object(o["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);n["default"]=l.exports},c573:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=function(){return a.e("components/uLink").then(a.bind(null,"1e4f"))},u={components:{uLink:e},data:function(){return{list:[{name:"顶部选项卡",url:"tabbar"},{name:"组件通讯",url:"component-communication"},{name:"uCharts 图表",url:"ucharts"},{name:"列表到详情示例",url:"list2detail-list"},{name:"上下滑动切换视频",url:"swiper-vertical"},{name:"GlobalData和vuex",url:"global"},{name:"微信自定义组件示例（vant ui）",url:"vant-button"}],navigateFlag:!1}},onLoad:function(){},onReady:function(){},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/template/template"}},onNavigationBarButtonTap:function(n){t.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(t){if(this.list[t].pages)for(var n=0;n<this.list.length;++n)this.list[n].open=t===n&&!this.list[t].open;else this.goDetailPage(this.list[t].url)},goDetailPage:function(n){var a=this;if(!this.navigateFlag){this.navigateFlag=!0;var e=n.url?n.url:n,u=~e.indexOf("platform")?e:"/pages/template/"+e+"/"+e;return t.navigateTo({url:u}),setTimeout(function(){a.navigateFlag=!1},200),!1}}}};n.default=u}).call(this,a("543d")["default"])},d2cc:function(t,n,a){"use strict";(function(t){a("7824"),a("921b");e(a("66fd"));var n=e(a("a8eb"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("543d")["createPage"])},db27:function(t,n,a){},ddc4:function(t,n,a){}},[["d2cc","common/runtime","common/vendor"]]]);