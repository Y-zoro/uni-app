(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-goods-nav/uni-goods-nav"],{"1ba6":function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){return Promise.all([o.e("common/vendor"),o.e("components/uni-icons/uni-icons")]).then(o.bind(null,"78b0"))},u={name:"UniGoodsNav",components:{uniIcons:e},props:{options:{type:Array,default:function(){return[{icon:"shop",text:"店铺"},{icon:"cart",text:"购物车"}]}},buttonGroup:{type:Array,default:function(){return[{text:"加入购物车",backgroundColor:"#ffa200",color:"#fff"},{text:"立即购买",backgroundColor:"#ff0000",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(n,t){this.$emit("click",{index:n,content:t})},buttonClick:function(t,o){n.report&&n.report(o.text,o.text),this.$emit("buttonClick",{index:t,content:o})}}};t.default=u}).call(this,o("543d")["default"])},2593:function(n,t,o){},"728f":function(n,t,o){"use strict";o.r(t);var e=o("a32f"),u=o("a8e7");for(var i in u)"default"!==i&&function(n){o.d(t,n,function(){return u[n]})}(i);o("f5a6");var c,r=o("f0c5"),a=Object(r["a"])(u["default"],e["b"],e["c"],!1,null,"3419aa84",null,!1,e["a"],c);t["default"]=a.exports},a32f:function(n,t,o){"use strict";var e={"uni-icons":()=>Promise.all([o.e("common/vendor"),o.e("components/uni-icons/uni-icons")]).then(o.bind(null,"78b0"))},u=function(){var n=this,t=n.$createElement;n._self._c},i=[];o.d(t,"b",function(){return u}),o.d(t,"c",function(){return i}),o.d(t,"a",function(){return e})},a8e7:function(n,t,o){"use strict";o.r(t);var e=o("1ba6"),u=o.n(e);for(var i in e)"default"!==i&&function(n){o.d(t,n,function(){return e[n]})}(i);t["default"]=u.a},f5a6:function(n,t,o){"use strict";var e=o("2593"),u=o.n(e);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-goods-nav/uni-goods-nav-create-component',
    {
        'components/uni-goods-nav/uni-goods-nav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("728f"))
        })
    },
    [['components/uni-goods-nav/uni-goods-nav-create-component']]
]);
