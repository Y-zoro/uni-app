(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/sqlite/sqlite"],{"4bd0":function(t,e,n){"use strict";(function(t){n("7824"),n("921b");a(n("66fd"));var e=a(n("dc77"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"51a0":function(t,e,n){"use strict";var a,s=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return s}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},"9e24":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"SQLite"}},methods:{openDB:function(){plus.sqlite.openDatabase({name:"first",path:"_doc/test.db",success:function(t){plus.nativeUI.alert("打开数据库test.db成功 ")},fail:function(t){plus.nativeUI.alert("打开数据库test.db失败: "+JSON.stringify(t))}})},executeSQL:function(){plus.sqlite.executeSql({name:"first",sql:'create table if not exists database("name" CHAR(110),"sex" CHAR(10),"age" INT(11))',success:function(t){plus.sqlite.executeSql({name:"first",sql:"insert into database values('彦','女','7000')",success:function(t){plus.nativeUI.alert("创建表table和插入数据成功")},fail:function(t){plus.nativeUI.alert("创建表table成功但插入数据失败: "+JSON.stringify(t))}})},fail:function(t){plus.nativeUI.alert("创建表table失败: "+JSON.stringify(t))}})},selectSQL:function(){plus.sqlite.selectSql({name:"first",sql:"select * from database",success:function(t){plus.nativeUI.alert("查询SQL语句成功: "+JSON.stringify(t))},fail:function(t){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(t))}})},droptable:function(){plus.sqlite.executeSql({name:"first",sql:"drop table database",success:function(t){plus.nativeUI.alert("删除表database成功")},fail:function(t){plus.nativeUI.alert("删除表database失败: "+JSON.stringify(t))}})},closeDB:function(){plus.sqlite.closeDatabase({name:"first",success:function(t){plus.nativeUI.alert("关闭数据库成功")},fail:function(t){plus.nativeUI.alert("关闭数据库失败: "+JSON.stringify(t))}})},isOpenDB:function(){plus.sqlite.isOpenDatabase({name:"first",path:"_doc/test.db"})?plus.nativeUI.alert("Opened!"):plus.nativeUI.alert("Unopened!")}}};e.default=a},aeb2:function(t,e,n){"use strict";n.r(e);var a=n("9e24"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=s.a},b0f2:function(t,e,n){},c05e:function(t,e,n){"use strict";var a=n("b0f2"),s=n.n(a);s.a},dc77:function(t,e,n){"use strict";n.r(e);var a=n("51a0"),s=n("aeb2");for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);n("c05e");var u,l=n("f0c5"),c=Object(l["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=c.exports}},[["4bd0","common/runtime","common/vendor"]]]);