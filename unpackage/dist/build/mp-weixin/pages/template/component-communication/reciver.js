(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/component-communication/reciver"],{"14bf":function(t,e,n){"use strict";var c=n("9654"),u=n.n(c);u.a},"1eb9":function(t,e,n){"use strict";n.r(e);var c=n("88fd"),u=n("6d4b");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("14bf");var f,i=n("f0c5"),o=Object(i["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],f);e["default"]=o.exports},"6d4b":function(t,e,n){"use strict";n.r(e);var c=n("794c"),u=n.n(c);for(var r in c)"default"!==r&&function(t){n.d(e,t,function(){return c[t]})}(r);e["default"]=u.a},"794c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=u(n("ae51"));function u(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{msg:""}},created:function(){t.$on("cc",this.recive),c.default.$on("cc",this.recive)},beforeDestroy:function(){t.$off("cc",this.recive),c.default.$off("cc",this.recive)},methods:{recive:function(t){this.msg=t.msg}}};e.default=r}).call(this,n("543d")["default"])},"88fd":function(t,e,n){"use strict";var c,u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return c})},9654:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/template/component-communication/reciver-create-component',
    {
        'pages/template/component-communication/reciver-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1eb9"))
        })
    },
    [['pages/template/component-communication/reciver-create-component']]
]);
