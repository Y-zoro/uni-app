(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-title/uni-title"],{"2d70":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{type:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},color:{type:String,default:"#333333"},stat:{type:[Boolean,String],default:""}},data:function(){return{}},computed:{textAlign:function(){var t="center";switch(this.align){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end";break}return t}},watch:{title:function(e){this.isOpenStat()&&t.report&&t.report("title",this.title)}},mounted:function(){this.isOpenStat()&&t.report&&t.report("title",this.title)},methods:{isOpenStat:function(){""===this.stat&&(this.isStat=!1);var t="boolean"===typeof this.stat&&this.stat||"string"===typeof this.stat&&""!==this.stat;return""===this.type&&(this.isStat=!0,"false"===this.stat.toString()&&(this.isStat=!1)),""!==this.type&&(this.isStat=!0,this.isStat=!!t),this.isStat}}};e.default=n}).call(this,n("543d")["default"])},"5c52":function(t,e,n){"use strict";n.r(e);var i=n("2d70"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"73b3":function(t,e,n){"use strict";var i=n("fac9"),a=n.n(i);a.a},"83ae":function(t,e,n){"use strict";n.r(e);var i=n("9777"),a=n("5c52");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("73b3");var s,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"44c88648",null,!1,i["a"],s);e["default"]=c.exports},9777:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i})},fac9:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-title/uni-title-create-component',
    {
        'components/uni-title/uni-title-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("83ae"))
        })
    },
    [['components/uni-title/uni-title-create-component']]
]);
