(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/share/share"],{2081:function(e,t,n){"use strict";n.r(t);var a=n("a64a"),i=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);t["default"]=i.a},"75ca":function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return a})},"7f67":function(e,t,n){"use strict";n.r(t);var a=n("75ca"),i=n("2081");for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);var o,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=c.exports},a64a:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,a,i,s,o){try{var r=e[s](o),c=r.value}catch(u){return void n(u)}r.done?t(c):Promise.resolve(c).then(a,i)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(a,i){var o=e.apply(t,n);function r(e){s(o,a,i,r,c,"next",e)}function c(e){s(o,a,i,r,c,"throw",e)}r(void 0)})}}var r={data:function(){return{title:"share",shareText:"uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",href:"https://uniapp.dcloud.io",image:"",shareType:1,providerList:[]}},computed:{isDisableButton:function(){return function(e){return 0===this.shareType&&"qq"===e.id||5===this.shareType&&"分享到微信好友"!==e.name}}},onShareAppMessage:function(){return{title:this.shareText?this.shareText:"欢迎体验uni-app",path:"/pages/tabBar/component/component",imageUrl:this.image?this.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png"}},onUnload:function(){this.shareText="uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",this.href="https://uniapp.dcloud.io",this.image=""},onLoad:function(){var t=this;e.getProvider({service:"share",success:function(e){console.log("success",e);for(var n=[],a=0;a<e.provider.length;a++)switch(e.provider[a]){case"weixin":n.push({name:"分享到微信好友",id:"weixin",sort:0}),n.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline",sort:1});break;case"sinaweibo":n.push({name:"分享到新浪微博",id:"sinaweibo",sort:2});break;case"qq":n.push({name:"分享到QQ",id:"qq",sort:3});break;default:break}t.providerList=n.sort(function(e,t){return e.sort-t.sort})},fail:function(t){console.log("获取分享通道失败",t),e.showModal({content:"获取分享通道失败",showCancel:!1})}})},methods:{share:function(){var t=o(a.default.mark(function t(n){var i;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("分享通道:"+n.id+"； 分享类型:"+this.shareType),this.shareText||1!==this.shareType&&0!==this.shareType){t.next=4;break}return e.showModal({content:"分享内容不能为空",showCancel:!1}),t.abrupt("return");case 4:if(this.image||2!==this.shareType&&0!==this.shareType){t.next=7;break}return e.showModal({content:"分享图片不能为空",showCancel:!1}),t.abrupt("return");case 7:i={provider:n.id,scene:n.type&&"WXSenceTimeline"===n.type?"WXSenceTimeline":"WXSceneSession",type:this.shareType,success:function(t){console.log("success",t),e.showModal({content:"已分享",showCancel:!1})},fail:function(t){console.log("fail",t),e.showModal({content:t.errMsg,showCancel:!1})},complete:function(){console.log("分享操作结束!")}},t.t0=this.shareType,t.next=0===t.t0?11:1===t.t0?16:2===t.t0?18:5===t.t0?20:24;break;case 11:return i.summary=this.shareText,i.imageUrl=this.image,i.title="欢迎体验uniapp",i.href="https://uniapp.dcloud.io",t.abrupt("break",25);case 16:return i.summary=this.shareText,t.abrupt("break",25);case 18:return i.imageUrl=this.image,t.abrupt("break",25);case 20:return i.imageUrl=this.image?this.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png",i.title="欢迎体验uniapp",i.miniProgram={id:"gh_33446d7f7a26",path:"/pages/tabBar/component/component",webUrl:"https://uniapp.dcloud.io",type:0},t.abrupt("break",25);case 24:return t.abrupt("break",25);case 25:if(0!==i.type||"iOS"!==plus.os.name){t.next=29;break}return t.next=28,this.compress();case 28:i.imageUrl=t.sent;case 29:1===i.type&&"qq"===i.provider&&(i.href="https://uniapp.dcloud.io",i.title="欢迎体验uniapp"),e.share(i);case 31:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}(),radioChange:function(e){console.log("type:"+e.detail.value),this.shareType=parseInt(e.detail.value)},chooseImage:function(){var t=this;e.chooseImage({count:1,sourceType:["album","camera"],sizeType:["compressed","original"],success:function(e){t.image=e.tempFilePaths[0]},fail:function(t){e.getSetting({success:function(t){var n=t.authSetting["scope.album"]&&t.authSetting["scope.camera"];n||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限",success:function(t){t.confirm&&e.openSetting()}})}})}})},compress:function(){console.log("开始压缩");var t=this.image;return new Promise(function(n){var a=plus.io.convertAbsoluteFileSystem(t.replace("file://",""));console.log("after"+a),plus.io.resolveLocalFileSystemURL(a,function(a){a.file(function(a){console.log("getFile:"+JSON.stringify(a)),a.size>20480&&plus.zip.compressImage({src:t,dst:t.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG"),width:"10%",height:"10%",quality:1,overwrite:!0},function(e){console.log("success zip****"+e.size);var a=t.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG");n(a)},function(t){e.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})},function(t){console.log("Resolve file URL failed: "+t.message),e.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})}}};t.default=r}).call(this,n("543d")["default"])},d797:function(e,t,n){"use strict";(function(e){n("7824"),n("921b");a(n("66fd"));var t=a(n("7f67"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["d797","common/runtime","common/vendor"]]]);