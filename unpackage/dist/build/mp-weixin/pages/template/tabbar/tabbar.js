(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/tabbar/tabbar"],{"309a":function(t,e,i){"use strict";var a=i("61d1"),n=i.n(a);n.a},"38e5":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return i.e("pages/template/tabbar/news-item").then(i.bind(null,"e9c7"))},n=100,s=3,u={data0:{datetime:"40分钟前",article_type:0,title:"uni-app行业峰会频频亮相，开发者反响热烈!",source:"DCloud",comment_count:639},data1:{datetime:"一天前",article_type:1,title:"DCloud完成B2轮融资，uni-app震撼发布!",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data2:{datetime:"一天前",article_type:2,title:"中国技术界小奇迹：HBuilder开发者突破200万",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data3:{article_type:3,image_list:[{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",width:563,height:316},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",width:641,height:360},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",width:640,height:360}],datetime:"5分钟前",title:"uni-app 支持使用 npm 安装第三方包，生态更趋丰富",source:"DCloud",comment_count:11},data4:{datetime:"2小时前",article_type:4,title:"uni-app 支持原生小程序自定义组件，更开放、更自由",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:69}},c={components:{mediaItem:a},data:function(){return{newsList:[],cacheTab:[],tabIndex:0,tabBars:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"},{name:"军事",id:"junshi"},{name:"历史",id:"lishi"},{name:"本地",id:"bendi"}],scrollInto:"",showTips:!1,navigateFlag:!1,pulling:!1,refreshIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="}},onLoad:function(){var t=this;setTimeout(function(){t.tabBars.forEach(function(e){t.newsList.push({data:[],isLoading:!1,refreshText:"",loadingText:"加载更多..."})}),t.getList(0)},350)},methods:{getList:function(t){for(var e=this.newsList[t],i=[],a=1;a<=10;a++){var n=Object.assign({},u["data"+Math.floor(5*Math.random())]);n.id=this.newGuid(),i.push(n)}e.data=e.data.concat(i)},goDetail:function(e){var i=this;this.navigateFlag||(this.navigateFlag=!0,t.navigateTo({url:"./detail/detail?title="+e.title}),setTimeout(function(){i.navigateFlag=!1},200))},close:function(e,i){var a=this;t.showModal({content:"是否删除本条信息？",success:function(t){t.confirm&&a.newsList[e].data.splice(i,1)}})},loadMore:function(t){var e=this;setTimeout(function(){e.getList(e.tabIndex)},500)},ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.switchTab(e)},ontabchange:function(t){var e=t.target.current||t.detail.current;this.switchTab(e)},switchTab:function(t){if(0===this.newsList[t].data.length&&this.getList(t),this.tabIndex!==t){if(this.newsList[this.tabIndex].data.length>n){var e=this.cacheTab.indexOf(this.tabIndex);e<0&&this.cacheTab.push(this.tabIndex)}if(this.tabIndex=t,this.scrollInto=this.tabBars[t].id,this.cacheTab.length>s){var i=this.cacheTab[0];this.clearTabData(i),this.cacheTab.splice(0,1)}}},clearTabData:function(t){this.newsList[t].data.length=0,this.newsList[t].loadingText="加载更多..."},refreshData:function(){},onrefresh:function(t){var e=this,i=this.newsList[this.tabIndex];i.refreshFlag&&(i.refreshing=!0,i.refreshText="正在刷新...",setTimeout(function(){e.refreshData(),e.pulling=!0,i.refreshing=!1,i.refreshFlag=!1,i.refreshText="已刷新",setTimeout(function(){e.pulling=!1},500)},2e3))},onpullingdown:function(t){var e=this.newsList[this.tabIndex];e.refreshing||this.pulling||(Math.abs(t.pullingDistance)>Math.abs(t.viewHeight)?(e.refreshFlag=!0,e.refreshText="释放立即刷新"):(e.refreshFlag=!1,e.refreshText="下拉可以刷新"))},newGuid:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toUpperCase()}}};e.default=c}).call(this,i("543d")["default"])},"61d1":function(t,e,i){},"731c":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return a})},"81b6":function(t,e,i){"use strict";(function(t){i("7824"),i("921b");a(i("66fd"));var e=a(i("92f5"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"838d":function(t,e,i){"use strict";i.r(e);var a=i("38e5"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"89d2":function(t,e,i){},"92f5":function(t,e,i){"use strict";i.r(e);var a=i("731c"),n=i("838d");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("ba74"),i("309a");var u,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=r.exports},ba74:function(t,e,i){"use strict";var a=i("89d2"),n=i.n(a);n.a}},[["81b6","common/runtime","common/vendor"]]]);