(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bb1fd"],{"39ab":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"50%"}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-top":"30px"},attrs:{"label-width":"170px",model:t.data,"element-loading-text":"修改中"}},[a("el-form-item",{attrs:{label:"分享用户名"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:t.data.share_username,callback:function(e){t.$set(t.data,"share_username",e)},expression:"data.share_username"}})],1),t._v(" "),a("el-col",{attrs:{span:2,align:"center"}},[a("el-tooltip",{attrs:{content:"镜像分享时所需要的贡献用户名，建议设置为Github用户名，方便进行统计贡献。",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"Dockerhub 用户名"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:t.data.username,callback:function(e){t.$set(t.data,"username",e)},expression:"data.username"}})],1),t._v(" "),a("el-col",{attrs:{span:2,align:"center"}},[a("el-tooltip",{attrs:{content:"镜像分享时所需的登陆用户名，默认情况下无需修改。",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"Dockerhub Token"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:t.data.pwd,callback:function(e){t.$set(t.data,"pwd",e)},expression:"data.pwd"}})],1),t._v(" "),a("el-col",{attrs:{span:2,align:"center"}},[a("el-tooltip",{attrs:{content:"镜像分享时所需的登陆凭证，默认情况下无需修改。",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"镜像过期时间（秒）"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:t.data.time,callback:function(e){t.$set(t.data,"time",e)},expression:"data.time"}})],1),t._v(" "),a("el-col",{attrs:{span:2,align:"center"}},[a("el-tooltip",{attrs:{content:"镜像获取时间，默认为 30 分钟，最小为 1 分钟，0 为永不过期，修改后下次启动镜像开始生效。",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.settingUpdate}},[t._v("修改")]),t._v(" "),a("el-button",[t._v("取消")])],1)],1)],1)},n=[],l=a("b775");function i(){return Object(l["a"])({url:"/setting/get",method:"get"})}function o(t){return Object(l["a"])({url:"/setting/update/",method:"post",data:t})}var r={name:"setting",data:function(){return{loading:!1,data:{share_username:"",username:"",pwd:"",time:"1800"}}},created:function(){this.initSetting()},methods:{initSetting:function(){var t=this;i().then((function(e){var a=e.data;if(200===a.status)t.data=a.data;else for(var s;s<a.msg.length;s++)t.$message({message:a.msg[s],type:"info"})}))},settingUpdate:function(){var t=this,e=new FormData;e.set("username",this.data.username),e.set("pwd",this.data.pwd),e.set("time",this.data.time),e.set("share_username",this.data.share_username),this.loading=!0,o(e).then((function(e){var a=e.data;if(t.data=a.data,200===a.status)for(var s=0;s<a.msg.length;s++)t.$message({message:a.msg[s],type:"success"});else for(var n=0;n<a.msg.length;n++)t.$message({message:a.msg[n],type:"info"});t.loading=!1}))}}},c=r,d=a("2877"),m=Object(d["a"])(c,s,n,!1,null,"2de14e44",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0bb1fd.c566a2a8.js.map