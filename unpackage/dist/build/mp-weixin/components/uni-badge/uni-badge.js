(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{"1e98":function(t,e,n){},5587:function(t,e,n){"use strict";var u=n("1e98"),a=n.n(u);a.a},8452:function(t,e,n){"use strict";n.r(e);var u=n("c6af"),a=n("b8f5");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("5587");var c,r=n("f0c5"),f=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,"5d4c6872",null,!1,u["a"],c);e["default"]=f.exports},aa7c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u},b8f5:function(t,e,n){"use strict";n.r(e);var u=n("aa7c"),a=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);e["default"]=a.a},c6af:function(t,e,n){"use strict";var u,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8452"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);
