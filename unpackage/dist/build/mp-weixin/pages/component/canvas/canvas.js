(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/canvas/canvas"],{"51aa":function(t,a,n){},"58b7":function(t,a,n){"use strict";n.r(a);var i=n("9548"),s=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(a,t,function(){return i[t]})}(c);a["default"]=s.a},6873:function(t,a,n){"use strict";var i,s=function(){var t=this,a=t.$createElement;t._self._c},c=[];n.d(a,"b",function(){return s}),n.d(a,"c",function(){return c}),n.d(a,"a",function(){return i})},9548:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=null,i=null;function s(t,a,n,i,s,c,e){this.canvasWidth=s,this.canvasHeight=c,this.ctx=e,this.x=t,this.y=a,this.vx=n,this.vy=i,this.radius=5}function c(t,a){return Math.pow(Math.pow(t,2)+Math.pow(a,2),.5)}s.prototype.draw=function(){this.ctx.setFillStyle("#007AFF"),this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill()},s.prototype.move=function(){this.x+=this.vx,this.y+=this.vy,this.x<this.radius?this.vx=Math.abs(this.vx):(this.x>this.canvasWidth-this.radius&&(this.vx=-Math.abs(this.vx)),this.y<this.radius?this.vy=Math.abs(this.vy):this.y>this.canvasWidth-this.radius&&(this.vy=-Math.abs(this.vy)))};var e={data:function(){return{title:"canvas",canvasWidth:0,startStatus:!1,ballList:[]}},onReady:function(){var a=this;this.$nextTick(function(){t.createSelectorQuery().select(".canvas").boundingClientRect(function(i){a.canvasWidth=i.width,n=t.createCanvasContext("canvas"),a.drawBall()}).exec()})},onUnload:function(){clearInterval(i)},methods:{drawBall:function(){for(var t=this.canvasWidth,a=this.canvasWidth,e=3,u=[],r=3,h=20,o=0;o<r;o++)for(var l=c(t/2,a/2)/r*o,f=0;f<h;f++){var v=2*f*Math.PI/h,d=Math.sin(v),x=Math.cos(v),b=l*x+t/2,p=l*d+a/2,y=e*x,M=e*d;u.push(new s(b,p,y,M,t,a,n))}function w(t){t.forEach(function(t){t.move(),t.draw()}),n.draw()}i=setInterval(function(){w(u)},17)}}};a.default=e}).call(this,n("543d")["default"])},a9b0:function(t,a,n){"use strict";n.r(a);var i=n("6873"),s=n("58b7");for(var c in s)"default"!==c&&function(t){n.d(a,t,function(){return s[t]})}(c);n("c095");var e,u=n("f0c5"),r=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],e);a["default"]=r.exports},c095:function(t,a,n){"use strict";var i=n("51aa"),s=n.n(i);s.a},ec66:function(t,a,n){"use strict";(function(t){n("7824"),n("921b");i(n("66fd"));var a=i(n("a9b0"));function i(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("543d")["createPage"])}},[["ec66","common/runtime","common/vendor"]]]);