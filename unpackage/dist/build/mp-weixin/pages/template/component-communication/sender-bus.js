(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/component-communication/sender-bus"],{1433:function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return r}),e.d(t,"a",function(){return u})},"1a4d":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(e("ae51"));function a(n){return n&&n.__esModule?n:{default:n}}var r={methods:{send:function(){var n=parseInt(1e4*Math.random());u.default.$emit("cc",{msg:"From event bus -> "+n})}}};t.default=r},"5f97":function(n,t,e){"use strict";e.r(t);var u=e("1433"),a=e("8845");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);e("8a3b");var c,o=e("f0c5"),f=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);t["default"]=f.exports},8845:function(n,t,e){"use strict";e.r(t);var u=e("1a4d"),a=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=a.a},"8a3b":function(n,t,e){"use strict";var u=e("e140"),a=e.n(u);a.a},e140:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/template/component-communication/sender-bus-create-component',
    {
        'pages/template/component-communication/sender-bus-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5f97"))
        })
    },
    [['pages/template/component-communication/sender-bus-create-component']]
]);
