(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-nav-bar/uni-nav-bar"],{3049:function(t,n,e){"use strict";e.r(n);var i=e("a953"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=u.a},"404b":function(t,n,e){},"88c8":function(t,n,e){"use strict";e.r(n);var i=e("c130"),u=e("3049");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("ec43");var r,a=e("f0c5"),c=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"6a343195",null,!1,i["a"],r);n["default"]=c.exports},a953:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null,"10b5"))},u=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"78b0"))},o={name:"UniNavBar",components:{uniStatusBar:i,uniIcons:u},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0}},mounted:function(){t.report&&""!==this.title&&t.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};n.default=o}).call(this,e("543d")["default"])},c130:function(t,n,e){"use strict";var i={"uni-status-bar":()=>e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null,"10b5")),"uni-icons":()=>Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"78b0"))},u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})},ec43:function(t,n,e){"use strict";var i=e("404b"),u=e.n(i);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-nav-bar/uni-nav-bar-create-component',
    {
        'components/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("88c8"))
        })
    },
    [['components/uni-nav-bar/uni-nav-bar-create-component']]
]);
