(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-245f84f9"],{"0cef":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"e",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c}));var i=n("b775");function a(t){return Object(i["a"])({url:"/layout/",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function r(t){return Object(i["a"])({url:"/layout/"+t+"/delete/"})}function s(t){return Object(i["a"])({url:"/img/upload/",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function o(t,e,n){return void 0!==e&&null!==e||(e=1),void 0!==t&&null!=t||(t=""),void 0!==n&&null!==n&&""!==n||(n=""),Object(i["a"])({url:"/layout/?query="+t+"&page="+e+"&flag="+n,method:"get"})}function c(t){return Object(i["a"])({url:"/layout/"+t+"/release/",method:"get"})}},"0dec":function(t,e,n){t.exports=n("f292")},"11e9":function(t,e,n){var i=n("52a7"),a=n("4630"),r=n("6821"),s=n("6a99"),o=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=r(t),e=s(e,!0),c)try{return u(t,e)}catch(n){}if(o(t,e))return a(!i.f.call(t,e),t[e])}},"214f":function(t,e,n){"use strict";n("b0c5");var i=n("2aba"),a=n("32e9"),r=n("79e5"),s=n("be13"),o=n("2b4c"),c=n("520a"),u=o("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var m=o(t),h=!r((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),d=h?!r((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[m](""),!e})):void 0;if(!h||!d||"replace"===t&&!l||"split"===t&&!p){var f=/./[m],g=n(s,m,""[t],(function(t,e,n,i,a){return e.exec===c?h&&!a?{done:!0,value:f.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}})),v=g[0],_=g[1];i(String.prototype,t,v),a(RegExp.prototype,m,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}}},"386d":function(t,e,n){"use strict";var i=n("cb7c"),a=n("83a1"),r=n("5f1b");n("214f")("search",1,(function(t,e,n,s){return[function(n){var i=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=s(n,t,this);if(e.done)return e.value;var o=i(t),c=String(this),u=o.lastIndex;a(u,0)||(o.lastIndex=0);var l=r(o,c);return a(o.lastIndex,u)||(o.lastIndex=u),null===l?-1:l.index}]}))},"520a":function(t,e,n){"use strict";var i=n("0bfb"),a=RegExp.prototype.exec,r=String.prototype.replace,s=a,o="lastIndex",c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[o]||0!==e[o]}(),u=void 0!==/()??/.exec("")[1],l=c||u;l&&(s=function(t){var e,n,s,l,p=this;return u&&(n=new RegExp("^"+p.source+"$(?!\\s)",i.call(p))),c&&(e=p[o]),s=a.call(p,t),c&&s&&(p[o]=p.global?s.index+s[0].length:e),u&&s&&s.length>1&&r.call(s[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)})),s}),t.exports=s},"5dbc":function(t,e,n){var i=n("d3f4"),a=n("8b97").set;t.exports=function(t,e,n){var r,s=e.constructor;return s!==n&&"function"==typeof s&&(r=s.prototype)!==n.prototype&&i(r)&&a&&a(t,r),t}},"5f1b":function(t,e,n){"use strict";var i=n("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"786c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticStyle:{width:"230px"},attrs:{size:"medium"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px","margin-bottom":"10px"},attrs:{size:"medium",type:"primary",icon:"el-icon-search"},on:{click:t.handleQuery}},[t._v("\n      查询\n    ")]),t._v(" "),n("el-row",{attrs:{gutter:23}},[t._l(t.tableData,(function(e,i){return n("el-col",{key:i,staticStyle:{"padding-bottom":"18px"},attrs:{span:6}},[n("el-card",{attrs:{"body-style":{padding:"8px"},shadow:"hover"}},[n("div",{staticClass:"clearfix",staticStyle:{"margin-top":"5px"}},[n("div",{staticStyle:{display:"inline-block",height:"20px","line-height":"20px","min-height":"20px","max-height":"20px"}},[n("svg-icon",{staticStyle:{"font-size":"20px"},attrs:{"icon-class":"bug"}})],1)]),t._v(" "),n("div",{staticStyle:{padding:"5px","margin-top":"5px"}},[e.image_name!=t.imgpath?n("img",{attrs:{src:e.image_name,alt:"",width:"285px",height:"300px;"}}):e.image_name===t.imgpath?n("img",{attrs:{src:t.modelimg,alt:"",width:"285px",height:"300px;"}}):t._e(),t._v(" "),n("div",{staticClass:"container-title",staticStyle:{"margin-top":"5px"}},[n("span",[t._v(t._s(e.layout_name))])]),t._v(" "),n("div",{staticClass:"bottom clearfix",staticStyle:{"margin-top":"10px",height:"80px"}},[n("span",{staticClass:"hoveDesc",staticStyle:{color:"#999","font-size":"13px"}},[t._v(" "+t._s(e.layout_desc))])]),t._v(" "),n("span",[t._v("编排模式")]),t._v(" "),n("el-row",{staticStyle:{"margin-top":"5px","margin-bottom":"10px",float:"right"}},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return t.handleInto(e)}}},[t._v("进入")])],1)],1)])],1)})),t._v(" "),t._l(t.timelist,(function(e){return n("el-col",{staticStyle:{"padding-bottom":"18px"},attrs:{span:6}},[n("el-card",{attrs:{"body-style":{padding:"8px"},shadow:"hover"}},[n("div",{staticClass:"clearfix",staticStyle:{"margin-top":"5px"}},[n("div",{staticStyle:{display:"inline-block",height:"20px","line-height":"20px","min-height":"20px","max-height":"20px"}},[n("svg-icon",{staticStyle:{"font-size":"20px"},attrs:{"icon-class":"bug"}})],1)]),t._v(" "),n("div",{staticStyle:{padding:"5px","margin-top":"5px"}},[e.image_name!=t.imgpath?n("img",{attrs:{src:e.image_name,alt:"",width:"285px",height:"300px;"}}):e.image_name===t.imgpath?n("img",{attrs:{src:t.modelimg,alt:"",width:"285px",height:"300px;"}}):t._e(),t._v(" "),n("div",{staticClass:"container-title",staticStyle:{"margin-top":"5px"}},[n("span",[t._v(t._s(e.time_range)+"分钟计时挑战赛")])]),t._v(" "),0!=t.countlist.length?n("div",{staticClass:"bottom clearfix",staticStyle:{"margin-top":"10px",height:"80px"}},[n("span",{staticClass:"hoveDesc",staticStyle:{color:"#999","font-size":"13px"}},[t._v(" 描述:"+t._s(e.time_desc))]),t._v(" "),e.temp_id===t.countlist[0].temp_time_id?n("span",{staticClass:"hoveDesc",staticStyle:{color:"#999","font-size":"13px"}},[t._v("倒计时\n              "),n("count-down",{attrs:{currentTime:t.countlist[0].start_date,startTime:t.countlist[0].start_date,endTime:t.countlist[0].end_date,dayTxt:"天",hourTxt:"小时",minutesTxt:"分钟",secondsTxt:"秒"},on:{end_callback:function(e){return t.autostop()}}})],1):t._e()]):0===t.countlist.length?n("div",{staticClass:"bottom clearfix",staticStyle:{"margin-top":"10px",height:"80px"}},[n("span",{staticClass:"hoveDesc",staticStyle:{color:"#999","font-size":"13px"}},[t._v(" 描述:"+t._s(e.time_desc)+"\n              ")])]):t._e(),t._v(" "),n("span",[t._v("计时模式")]),t._v(" "),0!=t.countlist.length?n("el-row",{staticStyle:{"margin-top":"5px","margin-bottom":"10px",float:"right"}},[e.temp_id!=t.countlist[0].temp_time_id?n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return t.handleOk(e)}}},[t._v("开始")]):t._e(),t._v(" "),e.temp_id===t.countlist[0].temp_time_id?n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.stop()}}},[t._v("关闭")]):t._e()],1):0===t.countlist.length?n("el-row",{staticStyle:{"margin-top":"5px","margin-bottom":"10px",float:"right"}},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return t.opendialog(e)}}},[t._v("开始")])],1):t._e()],1)])],1)}))],2)],1),t._v(" "),n("div",{staticStyle:{"margin-top":"20px"}},[n("el-pagination",{attrs:{"page-size":t.page.size,layout:"total, prev, pager, next, jumper",total:t.page.total},on:{"current-change":t.handleQuery}})],1)])},a=[],r=(n("ac6a"),n("386d"),n("0cef")),s=n("0dec"),o=n.n(s),c=n("905e"),u={name:"index",components:{CountDown:o.a},data:function(){return{tableData:[],search:"",page:{total:0,size:20},get_time:"",timelist:[],countlist:[],imgpath:"/api/static/",modelimg:n("aa63")}},methods:{layoutList:function(t){var e=this;this.tableData=[],Object(r["c"])(this.search,t,"flag").then((function(t){var n=t.data;n.results.forEach((function(t,n){t.image_name="/api/static/"+t.image_name,e.tableData.push(t)})),e.page.total=n.count})).catch((function(t){e.$message({type:"error",message:"服务器内部错误!"})}))},gettimelist:function(){var t=this;Object(c["a"])().then((function(e){console.log(t.modelimg);var n=e.data.results;t.countlist=n,console.log(n),0===t.countlist.length?console.log(1111):(t.countlist[0].end_date=c["b"].getTimestamp(t.countlist[0].end_date),t.countlist[0].start_date=c["b"].getTimestamp(t.get_time))}))},handleQuery:function(){this.layoutList(1)},handleInto:function(t){this.$router.push({path:"/scene/index",query:{layout_id:t.layout_id}})},templist:function(){var t=this;Object(c["h"])().then((function(e){var n=e.data;n.results.forEach((function(e,n){e.image_name="/api/static/"+e.image_name,t.timelist.push(e)}))}))},handleOk:function(t){0==this.countlist.length?this.opendialog(t):this.$message({message:"已有时间模式在运行，请先关闭",type:"error"})},opendialog:function(t){var e=this;this.item=t,!0===t.flag_status?this.$message({type:"error",message:t.time_range+"分钟挑战赛已经开始"}):this.$confirm("是否开始挑战?","提示",{center:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(c["c"])(t).then((function(t){var n=t.data,i="success",a="";"200"===n.code?a="计时模式开始启动！":"2001"===n.code?a="计时模式已经启动，请勿重新启动":(i="error",a="内部错误"),e.$message({type:i,message:a})})),e.$router.push({path:"/dashboard"})})).catch((function(){e.$message({type:"info",message:"已取挑战"})}))},stop:function(){var t=this;this.$confirm("是否取消挑战?","提示",{center:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(c["d"])().then((function(e){var n=e.data,i="success",a="";"2000"===n.code?a="计时模式已经关闭！":(i="error",a="关闭失败,内部错误"),t.$message({type:i,message:a})})),t.$router.push({path:"/dashboard"})})).catch((function(){t.$message({type:"info",message:"已取消"})}))},autostop:function(){var t=this;Object(c["d"])().then((function(e){var n=e.data,i="success",a="";"2000"===n.code?a="计时模式已经关闭！":(i="error",a="关闭失败,内部错误"),t.$message({type:i,message:a})}))}},created:function(){this.handleQuery(),this.templist(),this.gettimelist()},mounted:function(){var t=this,e=(new Date).getFullYear(),n=(new Date).getMonth()+1,i=(new Date).getDate(),a=(new Date).getHours(),r=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),s=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();t.get_time=e+"-"+n+"-"+i+" "+a+":"+r+":"+s}},l=u,p=(n("9b70"),n("2877")),m=Object(p["a"])(l,i,a,!1,null,"4088df0c",null);e["default"]=m.exports},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8b97":function(t,e,n){var i=n("d3f4"),a=n("cb7c"),r=function(t,e){if(a(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:r}},"905e":function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return o})),n.d(e,"h",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"i",(function(){return l})),n.d(e,"e",(function(){return p})),n.d(e,"b",(function(){return m}));var i=n("b775");function a(t){return Object(i["a"])({url:"/time/",method:"post",data:t})}function r(){return Object(i["a"])({url:"/time/",method:"delete"})}function s(){return Object(i["a"])({url:"/time/",method:"get"})}function o(t){return Object(i["a"])({url:"/timetemp/",method:"post",data:t})}function c(t){var e="";!0===t&&(e="flag"),"temp"===t&&(e="temp");var n="/timetemp/?query=&flag="+e;return Object(i["a"])({url:n,method:"get"})}function u(t){return Object(i["a"])({url:"/timetemp/"+t+"/",method:"delete",data:{id:t}})}function l(t){return Object(i["a"])({url:"/user/?page="+t,method:"get"})}function p(t){return Object(i["a"])({url:"/timerank/?value="+t,method:"get"})}var m={getTimestamp:function(t){return new Date(t).getTime()/1e3}}},9093:function(t,e,n){var i=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,a)}},"9b70":function(t,e,n){"use strict";n("e788")},aa63:function(t,e,n){t.exports=n.p+"static/img/modelbg.fcbe2049.jpg"},aa77:function(t,e,n){var i=n("5ca1"),a=n("be13"),r=n("79e5"),s=n("fdef"),o="["+s+"]",c="​",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),p=function(t,e,n){var a={},o=r((function(){return!!s[t]()||c[t]()!=c})),u=a[t]=o?e(m):s[t];n&&(a[n]=u),i(i.P+i.F*o,"String",a)},m=p.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=p},b0c5:function(t,e,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},c5f6:function(t,e,n){"use strict";var i=n("7726"),a=n("69a8"),r=n("2d95"),s=n("5dbc"),o=n("6a99"),c=n("79e5"),u=n("9093").f,l=n("11e9").f,p=n("86cc").f,m=n("aa77").trim,h="Number",d=i[h],f=d,g=d.prototype,v=r(n("2aeb")(g))==h,_="trim"in String.prototype,x=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():m(e,3);var n,i,a,r=e.charCodeAt(0);if(43===r||45===r){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var s,c=e.slice(2),u=0,l=c.length;u<l;u++)if(s=c.charCodeAt(u),s<48||s>a)return NaN;return parseInt(c,i)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(v?c((function(){g.valueOf.call(n)})):r(n)!=h)?s(new f(x(e)),n,d):x(e)};for(var y,b=n("9e1e")?u(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;b.length>T;T++)a(f,y=b[T])&&!a(d,y)&&p(d,y,l(f,y));d.prototype=g,g.constructor=d,n("2aba")(i,h,d)}},e788:function(t,e,n){},f292:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.msTime.show?n("p",[t.msTime.day>0?n("span",[n("span",[t._v(t._s(t.msTime.day))]),n("i",[t._v(t._s(t.dayTxt))])]):t._e(),t._v(" "),n("span",[t._v(t._s(t.msTime.hour))]),n("i",[t._v(t._s(t.hourTxt))]),t._v(" "),n("span",[t._v(t._s(t.msTime.minutes))]),n("i",[t._v(t._s(t.minutesTxt))]),t._v(" "),n("span",[t._v(t._s(t.msTime.seconds))]),n("i",[t._v(t._s(t.secondsTxt))])]):t._e()])},a=[],r=(n("6b54"),n("c5f6"),{replace:!0,data:function(){return{tipShow:!0,msTime:{show:!1,day:"",hour:"",minutes:"",seconds:""},star:"",end:"",current:""}},watch:{currentTime:function(t,e){this.gogogo()}},props:{tipText:{type:String,default:"距离开始"},tipTextEnd:{type:String,default:"距离结束"},id:{type:String,default:"1"},currentTime:{type:Number},startTime:{type:Number},endTime:{type:Number},endText:{type:String,default:"已结束"},dayTxt:{type:String,default:":"},hourTxt:{type:String,default:":"},minutesTxt:{type:String,default:":"},secondsTxt:{type:String,default:":"},secondsFixed:{type:Boolean,default:!1}},mounted:function(){console.log(this),this.gogogo()},methods:{gogogo:function(){var t=this;10==this.startTime.toString().length?this.star=1e3*this.startTime:this.star=this.startTime,10==this.endTime.toString().length?this.end=1e3*this.endTime:this.end=this.endTime,this.currentTime?10==this.currentTime.toString().length?this.current=1e3*this.currentTime:this.current=this.currentTime:this.current=(new Date).getTime(),this.end<this.current?(this.msTime.show=!1,this.end_message()):this.current<this.star?(this.$set(this,"tipShow",!0),setTimeout((function(){t.runTime(t.star,t.current,t.start_message)}),1)):(this.end>this.current&&this.star<this.current||this.star==this.current)&&(this.$set(this,"tipShow",!1),this.msTime.show=!0,this.$emit("start_callback",this.msTime.show),setTimeout((function(){t.runTime(t.end,t.star,t.end_message,!0)}),1))},runTime:function(t,e,n,i){var a=this,r=this.msTime,s=t-e;if(s>0){this.msTime.show=!0,r.day=Math.floor(s/864e5),s-=864e5*r.day,r.hour=Math.floor(s/36e5),s-=36e5*r.hour,r.minutes=Math.floor(s/6e4),s-=6e4*r.minutes,r.seconds=Math.floor(s/1e3).toFixed(0),s-=1e3*r.seconds,r.hour<10&&(r.hour="0"+r.hour),r.minutes<10&&(r.minutes="0"+r.minutes),r.seconds<10&&(r.seconds="0"+r.seconds);var o=Date.now(),c=Date.now(),u=c-o;setTimeout((function(){i?a.runTime(a.end,e+=1e3,n,!0):a.runTime(a.star,e+=1e3,n)}),1e3-u)}else n()},start_message:function(){var t=this;this.$set(this,"tipShow",!1),this.$emit("start_callback",this.msTime.show),setTimeout((function(){t.runTime(t.end,t.star,t.end_message,!0)}),1)},end_message:function(){this.msTime.show=!1,this.currentTime<=0||this.$emit("end_callback",this.msTime.show)}}}),s=r,o=n("2877"),c=Object(o["a"])(s,i,a,!1,null,null,null);e["default"]=c.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-245f84f9.a61882d8.js.map