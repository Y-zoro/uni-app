(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uLink"],{"1e4f":function(t,e,n){"use strict";n.r(e);var a=n("859f"),u=n("d15a");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);var o,r=n("f0c5"),f=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=f.exports},"859f":function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},d15a:function(t,e,n){"use strict";n.r(e);var a=n("e97e"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=u.a},e97e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-link",props:{href:{type:String,default:""},text:{type:String,default:""},inWhiteList:{type:Boolean,default:!1}},methods:{openURL:function(){this.inWhiteList?t.navigateTo({url:"/pages/component/web-view/web-view?url="+this.href}):(t.setClipboardData({data:this.href}),t.showModal({content:"本网址无法直接在小程序内打开。已自动复制网址，请在手机浏览器里粘贴该网址",showCancel:!1}))}}};e.default=n}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uLink-create-component',
    {
        'components/uLink-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1e4f"))
        })
    },
    [['components/uLink-create-component']]
]);
