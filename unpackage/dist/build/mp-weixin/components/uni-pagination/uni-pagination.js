(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-pagination/uni-pagination"],{"07e6":function(n,t,e){"use strict";var r=e("8387"),i=e.n(r);i.a},3022:function(n,t,e){"use strict";var r={"uni-icons":()=>Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"78b0"))},i=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return u}),e.d(t,"a",function(){return r})},"561f":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"78b0"))},i={name:"UniPagination",components:{uniIcons:r},props:{prevText:{type:String,default:"上一页"},nextText:{type:String,default:"下一页"},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1}},data:function(){return{currentIndex:1}},computed:{maxPage:function(){var n=1,t=Number(this.total),e=Number(this.pageSize);return t&&e&&(n=Math.ceil(t/e)),n}},watch:{current:function(n){this.currentIndex=+n}},created:function(){this.currentIndex=+this.current},methods:{clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)!==this.maxPage&&(this.currentIndex+=1,this.change("next"))},change:function(n){this.$emit("change",{type:n,current:this.currentIndex})}}};t.default=i},"5d39":function(n,t,e){"use strict";e.r(t);var r=e("3022"),i=e("d6fd");for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);e("07e6");var c,o=e("f0c5"),a=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"5e8f3827",null,!1,r["a"],c);t["default"]=a.exports},8387:function(n,t,e){},d6fd:function(n,t,e){"use strict";e.r(t);var r=e("561f"),i=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,function(){return r[n]})}(u);t["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-pagination/uni-pagination-create-component',
    {
        'components/uni-pagination/uni-pagination-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5d39"))
        })
    },
    [['components/uni-pagination/uni-pagination-create-component']]
]);
