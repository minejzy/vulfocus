(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-531b1983"],{"389a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-select",{attrs:{placeholder:"请选择排行榜"},on:{change:t.StateChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("el-option",{attrs:{value:"--------"}},[t._v("总榜")]),t._v(" "),t._l(t.options,(function(e){return a("el-option",{key:e.time_range,attrs:{label:e.time_range,value:e.time_range}},[t._v(t._s(e.time_range)+"分钟挑战赛")])}))],2),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"用户名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"rank",label:"Rank"}})],1),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-pagination",{attrs:{"page-size":t.page.size,layout:"total, prev, pager, next, jumper",total:t.page.total},on:{"current-change":t.initUserList}})],1)],1)},r=[],i=a("905e"),u={inject:["reload"],name:"user",data:function(){return{page:{total:0,size:20},options:[],tableData:[],status:"all",value:"",selectState:"",test:[]}},created:function(){this.initUserList(1),this.templist()},methods:{StateChange:function(t){var e=this;this.value=t,"--------"===this.value?this.reload():Object(i["e"])(this.value).then((function(t){var a=t.data.results;e.tableData=a}))},templist:function(){var t=this;Object(i["h"])(!0).then((function(e){var a=e.data.results;t.options=a}))},initUserList:function(t){var e=this;Object(i["i"])(t).then((function(t){var a=t.data.results;e.tableData=a,e.page.total=t.data.count}))}}},l=u,o=a("2877"),c=Object(o["a"])(l,n,r,!1,null,"c9708612",null);e["default"]=c.exports},"905e":function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return i})),a.d(e,"a",(function(){return u})),a.d(e,"f",(function(){return l})),a.d(e,"h",(function(){return o})),a.d(e,"g",(function(){return c})),a.d(e,"i",(function(){return s})),a.d(e,"e",(function(){return d})),a.d(e,"b",(function(){return p}));var n=a("b775");function r(t){return Object(n["a"])({url:"/time/",method:"post",data:t})}function i(){return Object(n["a"])({url:"/time/",method:"delete"})}function u(){return Object(n["a"])({url:"/time/",method:"get"})}function l(t){return Object(n["a"])({url:"/timetemp/",method:"post",data:t})}function o(t){var e="";!0===t&&(e="flag"),"temp"===t&&(e="temp");var a="/timetemp/?query=&flag="+e;return Object(n["a"])({url:a,method:"get"})}function c(t){return Object(n["a"])({url:"/timetemp/"+t+"/",method:"delete",data:{id:t}})}function s(t){return Object(n["a"])({url:"/user/?page="+t,method:"get"})}function d(t){return Object(n["a"])({url:"/timerank/?value="+t,method:"get"})}var p={getTimestamp:function(t){return new Date(t).getTime()/1e3}}}}]);
//# sourceMappingURL=chunk-531b1983.e944b879.js.map