(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-705dd7fc"],{"0d8e":function(e,t,n){"use strict";var a=n("c3d8"),i=n.n(a);i.a},"1b62":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return v}));n("d81d");var a=n("cdd9"),i={data:function(){return{isCollapse:!1,reSubmit:!1,loading:!1,opTitle:"",opType:"",opKey:1,opDialog:!1,clearFk:1,mulSelection:[]}},methods:{commonEdit:function(e){var t=this;this.opType="edit",this.modalData=e,this.opKey++,setTimeout((function(){t.opDialog=!0}),a["a"].modalTime)},commonAdd:function(){var e=this;this.opType="add",this.opKey++,setTimeout((function(){e.opDialog=!0}),a["a"].modalTime)},callbackModal:function(){this.fetchData()},onReset:function(){this.$refs["formData"].resetFields(),this.clearFk++},handleSelectionChange:function(e){this.mulSelection=e},preDeleteBatch:function(e){var t=[];this.mulSelection.map((function(n){t.push(n[e])})),this.handleDelete(t)},preDelete:function(e,t,n){n&&n.stopPropagation();var a=[e[t]];this.handleDelete(a)}}},r=n("5530"),s=n("f66f"),o=n("1a40"),c=n("5d85"),l=n("94d2"),u=n("2f62"),d=n("e350"),v={components:{tablePagination:s["a"],OperateButton:o["a"],baseForm:c["a"],colorWord:l["a"]},computed:Object(r["a"])({},u["c"]["userInfo"]),methods:{checkPerm:d["a"],checkUser:d["b"],handleDia:function(e){var t=this,n=e.row,a=void 0===n?{}:n,i=e.options,r=e.cb,s=e.nextTickCb;i=Object.assign(i,{visible:!0,currentFormValue:a}),r&&r(),this.$nextTick((function(){s&&s(),i.ref&&t.$refs[i.ref].clear()}))},handleValidate:function(e){var t=this,n=e.refname,a=e.cb;this.$nextTick((function(){t.$refs[n].handleFormValidate((function(e){a&&a(e)}))}))},isDo:function(e){var t=e.cb,n=e.title,a=e.catchcb,i=void 0===a?function(){}:a;this.$confirm(n,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(t).catch(i)},go:function(e){this.$router.push(e)},message:function(e,t){this.$message({message:t,type:e})}}}},"22ce":function(e,t,n){"use strict";n.d(t,"k",(function(){return s})),n.d(t,"h",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"i",(function(){return u})),n.d(t,"l",(function(){return d})),n.d(t,"j",(function(){return v})),n.d(t,"n",(function(){return m})),n.d(t,"q",(function(){return h})),n.d(t,"g",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"p",(function(){return O})),n.d(t,"o",(function(){return C})),n.d(t,"m",(function(){return w})),n.d(t,"c",(function(){return k}));n("99af");var a=n("b775"),i=n("51be"),r=i["a"];function s(e){return Object(a["a"])({url:"".concat(r,"/api/service/queryHostServiceInstance"),method:"get",params:e})}function o(e){return Object(a["a"])({url:"".concat(r,"/api/service/getServiceAndEnvById"),method:"get",params:e})}function c(e){return Object(a["a"])({url:"".concat(r,"/api/service/deleteService/").concat(e),method:"delete"})}function l(e){return Object(a["a"])({url:"".concat(r,"/api/service/deleteServiceInstance/").concat(e),method:"delete"})}function u(e){return Object(a["a"])({url:"".concat(r,"/api/service/getServiceAndEnvByInstanceId"),method:"get",params:e})}function d(e,t){return Object(a["a"])({url:"".concat(r,"/api/service/").concat(e,"/rename"),method:"put",data:t})}function v(e){return Object(a["a"])({url:"".concat(r,"/api/service/getServiceInstanceConfig"),method:"get",params:e})}function m(e){return Object(a["a"])({url:"".concat(r,"/api/service/saveServiceInstanceConfig"),method:"post",data:e})}function h(e){return Object(a["a"])({url:"".concat(r,"/api/service/validServerName"),method:"get",params:e})}function f(e,t,n){return Object(a["a"])({url:"".concat(r,"/api/service/getAddServiceInstanceConfig/").concat(e,"/").concat(t,"/").concat(n),method:"get"})}function p(e){return Object(a["a"])({url:"".concat(r,"/api/service/addService"),method:"post",data:e})}function b(e){return Object(a["a"])({url:"".concat(r,"/api/service/addServiceInstance"),method:"post",data:e})}function g(e,t){return Object(a["a"])({url:"".concat(r,"/api/service/compareServiceProperty/").concat(e,"/").concat(t),method:"get"})}function O(e){return Object(a["a"])({url:"".concat(r,"/api/service/stopServiceInstance"),method:"post",data:e})}function C(e){return Object(a["a"])({url:"".concat(r,"/api/service/startServiceInstance"),method:"post",data:e})}function w(e){return Object(a["a"])({url:"".concat(r,"/api/service/restartServiceInstance"),method:"post",data:e})}function k(e){return Object(a["a"])({url:"".concat(r,"/api/service/listClusters"),method:"get",params:e})}},"2d9d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-dialog"},[n("el-dialog",{directives:[{name:"drag-dialog",rawName:"v-drag-dialog"}],attrs:{title:e.modalTitle,visible:e.dialog,"before-close":e.closeHandle,width:e.width||"580px"},on:{"update:visible":function(t){e.dialog=t}}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[e._t("default"),n("div",{staticClass:"c-dialog__footer",attrs:{slot:"footer"},slot:"footer"},[e._t("button"),e.noCancle?e._e():n("el-button",{attrs:{size:"mini"},on:{click:e.closeHandle}},[e._v("取消")])],2)],2)])],1)},i=[],r={props:["dialog","modalTitle","callback","refname","loading","width","noCancle"],methods:{closeHandle:function(){this.$emit("dealDialog")}}},s=r,o=n("2877"),c=Object(o["a"])(s,a,i,!1,null,null,null);t["a"]=c.exports},"301f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"zms-home welcome"},[e.envList.length?n("div",{staticClass:"envlist"},e._l(e.envList,(function(t){return n("div",{key:t.id,staticClass:"env-box"},[n("el-menu",{staticClass:"zms-menu",attrs:{"default-active":"1"}},[n("el-menu-item",[n("template",{slot:"title"},[n("i",{class:e.isCollapse[t.id]?"el-icon-arrow-down":"el-icon-arrow-up",on:{click:function(n){e.isCollapse[t.id]=!e.isCollapse[t.id]}}}),n("b",{staticClass:"link",attrs:{slot:"title"},on:{click:function(n){return e.goEnvDetail(t.id)}},slot:"title"},[e._v(" "+e._s(t.environmentName)+" ")]),n("div",{staticClass:"health_circle",class:0==t.healthState?"health_success":1==t.healthState?"health_warning":"health_danger"})]),e.checkPerm(["admin"])?n("div",{staticClass:"zms-dropdown-wrap"},[n("el-dropdown",{attrs:{trigger:"click"}},[n("span",{staticClass:"el-dropdown-link content_border"},[n("svg-icon",{attrs:{"icon-class":"drop-down"}})],1),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(n){return e.goServiceAddHome(t.id,t.environmentName)}}},[e._v(" 添加服务 ")]),n("el-dropdown-item",{nativeOn:{click:function(n){return e.addHost(t.id)}}},[e._v("添加主机")]),n("el-dropdown-item",{nativeOn:{click:function(n){return e.openRenameEnv(t.id,t.environmentName)}}},[e._v(" 重命名环境 ")]),n("el-dropdown-item",{nativeOn:{click:function(n){return e.openDatabaseEnv(t.id,t.environmentName,t.zkServiceId,t.influxdbServiceId)}}},[e._v(" 配置数据源 ")])],1)],1)],1):e._e()],2),n("el-collapse-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapse[t.id],expression:"!isCollapse[env.id]"}]},[n("div",{staticClass:"content-host"},[n("i",{staticClass:"el-icon-setting"}),n("span",{staticClass:"hostlink",on:{click:function(n){return e.hostList(t.id)}}},[e._v("主机 -- "+e._s(t.hostCount))])]),e.moreServices[t.id].length>0?n("div",{staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"host-link-line "}),e._l(e.moreServices[t.id],(function(t){return n("el-menu-item",{key:t.id},[[n("el-tooltip",{attrs:{content:t.serverType.toLowerCase(),placement:"top",effect:"light"}},[n("svg-icon",{attrs:{"icon-class":e.serviceIconClass(t.serverType)}})],1),n("span",{staticClass:"link",staticStyle:{"padding-left":"10px"},on:{click:function(n){return e.goServiceDetail(t.id,"state")}}},[e._v(" "+e._s(t.serverName)+" ")]),n("div",{staticClass:"health_circle",class:0==t.healthState?"health_success":1==t.healthState?"health_warning":"health_danger"})],n("div",{staticClass:"zms-dropdown-wrap"},[n("el-dropdown",{attrs:{trigger:"click"}},[n("span",{staticClass:"el-dropdown-link content_border"},[n("svg-icon",{attrs:{"icon-class":"drop-down"}})],1),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(n){return e.goServiceDetail(t.id,"instance")}}},[e._v("实例")]),e.checkPerm(["admin"])?n("div",[n("el-dropdown-item",{nativeOn:{click:function(n){return e.goServiceDetail(t.id,"config")}}},[e._v("配置")]),"ZOOKEEPER"===t.serverType||"KAFKA"===t.serverType||"ROCKETMQ"===t.serverType?n("el-dropdown-item",{nativeOn:{click:function(n){return e.addInstance(t)}}},[e._v(" 添加服务节点 ")]):e._e(),n("el-dropdown-item",{nativeOn:{click:function(n){return e.handleDeleteService(t.id)}}},[e._v("删除")])],1):e._e()],1)],1)],1)],2)})),e.moreServices[t.id].length<e.moreServicesCount[t.id]?n("div",[n("div",{staticClass:"link-line "}),n("div",{staticClass:"content_service_button"},[n("small",{on:{click:function(n){return e.viewMore(t.id)}}},[e._v("加载全部")])])]):e._e()],2):e._e()])])],1)],1)})),0):e._e(),e.checkPerm(["admin"])?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"添加环境",placement:"right"}},[n("el-button",e._b({staticClass:"envAdd",attrs:{size:"large",icon:"el-icon-plus",circle:""},on:{click:e.openAddEnv}},"el-button",e.GLOBAL.button,!1))],1):e._e(),n("div",{staticClass:"welcome__right"},[n("cluster-index",{attrs:{"cluster-list":e.envList}})],1),n("op-freight",{attrs:{dialog:e.envRenameOptions.visible,modalTitle:e.envRenameOptions.diatitle,loading:e.envRenameOptions.loading,width:"400px"},on:{dealDialog:e.closeEnvRenameDia}},[n("base-form",{ref:e.envRenameOptions.ref,attrs:{forms:e.envRenameOptions.forms,"current-form-value":e.envRenameOptions.currentFormValue,"label-width":"80px"}}),n("template",{slot:"button"},[n("el-button",e._b({on:{click:e.saveEnvRenameData}},"el-button",e.GLOBAL.button,!1),[e._v("保存")])],1)],2),n("op-freight",{attrs:{dialog:e.envDatabaseOptions.visible,modalTitle:e.envDatabaseOptions.diatitle,loading:e.envDatabaseOptions.loading},on:{dealDialog:e.closeEnvDatabaseDia}},[[n("br"),n("el-row",{staticStyle:{"margin-top":"10px"}},[n("el-col",{staticStyle:{"font-size":"14"},attrs:{span:10}},[n("h3",[e._v(" zookeeper ")]),n("span",[e._v("用于存储集群的元数据。如果没有安装，zms消息集群功能不能使用")])]),n("el-col",{attrs:{span:14}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.zkServiceId,callback:function(t){e.zkServiceId=t},expression:"zkServiceId"}},e._l(e.envDatabaseOptions.zookeepertableData,(function(e){return n("el-option",{key:e.id,attrs:{label:e.serverName,value:e.id}})})),1)],1)],1),n("br"),n("br"),n("el-row",[n("el-col",{attrs:{span:10}},[n("h3",[e._v(" influxdb ")]),n("span",[e._v("用于存储收集集群的指标数据")])]),n("el-col",{attrs:{span:14}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.influxdbServiceId,callback:function(t){e.influxdbServiceId=t},expression:"influxdbServiceId"}},e._l(e.envDatabaseOptions.influxdbtableData,(function(e){return n("el-option",{key:e.id,attrs:{label:e.serverName,value:e.id}})})),1)],1)],1)],n("br"),n("template",{slot:"button"},[n("el-button",e._b({on:{click:e.saveEnvDatabaseData}},"el-button",e.GLOBAL.button,!1),[e._v("保存")])],1)],2),n("op-message",{attrs:{dialog:e.dialog,modalTitle:e.modalTitle,loading:e.loading,width:"800px"},on:{dealDialog:function(t){e.dialog=!1}}},[[n("el-row",{staticStyle:{"margin-bottom":"13px"}},[n("span",[e._v("执行安装脚本：")])]),n("el-row",{staticStyle:{"margin-bottom":"13px"}},[n("span",{staticStyle:{color:"red"}},[e._v("1. 在主机使用root或sudo权限的用户安装脚本。")])]),n("el-row",{staticStyle:{"margin-bottom":"20px"}},[n("el-input",{staticStyle:{width:"700px"},attrs:{disabled:!0},model:{value:e.formData.installUrl,callback:function(t){e.$set(e.formData,"installUrl",t)},expression:"formData.installUrl"}}),n("i",{staticClass:"el-icon-document-copy",staticStyle:{"margin-left":"10px","font-size":"20px"},on:{click:function(t){return e.copy(e.formData.installUrl)}}})],1),n("el-row",{staticStyle:{"margin-bottom":"13px"}},[n("span",{staticStyle:{color:"red"}},[e._v("2. 初始化主机建议打开所需防火墙端口 [2000-9999] [10900-10999] [20910-20999] 。")])])]],2),n("op-freight",{attrs:{dialog:e.envAddOptions.visible,modalTitle:e.envAddOptions.diatitle,loading:e.envAddOptions.loading,width:"400px"},on:{dealDialog:e.closeEnvAddDia}},[n("base-form",{ref:e.envAddOptions.ref,attrs:{forms:e.envAddOptions.forms,"current-form-value":e.envAddOptions.currentFormValue,"label-width":"80px"}}),n("template",{slot:"button"},[n("el-button",e._b({on:{click:e.saveEnvAddData}},"el-button",e.GLOBAL.button,!1),[e._v("保存")])],1)],2)],1)},i=[],r=(n("fb6a"),n("ade3")),s=n("b85c"),o=(n("96cf"),n("1da1")),c=n("b775"),l=n("51be"),u=l["a"];function d(e){return Object(c["a"])({url:"".concat(u,"/api/env/listService"),method:"get",params:e})}function v(e){return Object(c["a"])({url:"".concat(u,"/api/statistics/queryClusterMetrics"),method:"get",params:e})}function m(e){return Object(c["a"])({url:"".concat(u,"/api/statistics/queryClusterOffset"),method:"get",params:e})}var h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"l-chart-container cluster-index",staticStyle:{background:"#fff","box-shadow":"0 0 12px #ccc",padding:"1px 20px 20px","margin-top":"15px"}},[n("el-tabs",{on:{"tab-click":e.handleTabClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"集群指标",name:"metric"}},[n("el-select",{staticStyle:{width:"150px"},attrs:{size:"mini"},model:{value:e.selectEnvId,callback:function(t){e.selectEnvId=t},expression:"selectEnvId"}},e._l(e.envOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("time-range",{attrs:{"time-str":e.currentTime1,"quick-num":e.quickNum1},on:{change:e.getTimeRange1,changeQuick:e.changeQuick1}}),n("div",{staticClass:"cluster-chart l-chart-box"},[e.showCluster.length?n("div",e._l(e.showCluster,(function(t){return n("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.metricOrder.some((function(e){return e===t})),expression:"!metricOrder.some(order => order === item)"}],key:t,staticClass:"box"},[e.metricOrder.some((function(e){return e===t}))?n("chart",e._b({attrs:{chartData:[e.metricCharts[t]],underline:!1,type:t},on:{finished:function(t){e.triggerFinish(t,"metricAlreadylist")}}},"chart",e.GLOBAL.chartConfig,!1)):n("div",{staticClass:"position"})],1)})),0):e._e(),e.showCluster.length<3?n("div",[n("div",{staticClass:"box cluster-box"},[n("div",{staticClass:"position"}),e.showCluster.length<1?n("div",{staticClass:"position"}):e._e()])]):e._e()])],1),n("el-tab-pane",{attrs:{label:"日消息量",name:"offset"}},[n("el-select",{staticStyle:{width:"150px"},attrs:{size:"mini"},model:{value:e.selectEnvId,callback:function(t){e.selectEnvId=t},expression:"selectEnvId"}},e._l(e.envOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("time-range",{attrs:{"time-str":e.currentTime2,"quick-num":e.quickNum2},on:{change:e.getTimeRange2,changeQuick:e.changeQuick2}}),n("div",{staticClass:"cluster-chart l-chart-box"},[e.showCluster.length?n("div",e._l(e.showCluster,(function(t){return n("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.offsetOrder.some((function(e){return e===t})),expression:"!offsetOrder.some(order => order === item)"}],key:t,staticClass:"box"},[e.offsetOrder.some((function(e){return e===t}))?n("chart",e._b({attrs:{chartData:[e.offsetCharts[t]],underline:!1,type:t},on:{finished:function(t){e.triggerFinish(t,"offsetAlreadylist")}}},"chart",e.GLOBAL.chartConfig,!1)):n("div",{staticClass:"position"})],1)})),0):e._e(),e.showCluster.length<3?n("div",[n("div",{staticClass:"box cluster-box"},[n("div",{staticClass:"position"}),e.showCluster.length<1?n("div",{staticClass:"position"}):e._e()])]):e._e()])],1)],1)],1)},f=[],p=(n("99af"),n("4160"),n("45fc"),n("b0c0"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("2909")),b=n("1b62"),g=n("d325"),O=n("5da6"),C=n("ca00"),w={name:"ClusterIndex",mixins:[b["b"],b["a"]],components:{chart:g["a"],timeRange:O["a"]},props:{clusterList:Array},data:function(){return{activeName:"metric",metricInit:!0,offsetInit:!1,envOptions:[],selectEnvId:"",time:[],currentTime1:"",currentTime2:"",quickNum1:0,quickNum2:0,allCluster:{},showCluster:[],metricCharts:[],metricOrder:[],metricAlreadylist:[],offsetCharts:[],offsetOrder:[],offsetAlreadylist:[],validlist:[]}},watch:{clusterList:function(e){this.setRenderCluster(e)},selectEnvId:function(){this.changeInit(),this.changeEnvId(),this.resetClusterIndexData(),this.loadClusterIndexData(this.showCluster[0],this.activeName)},time:function(){this.selectEnvId&&0!=this.showCluster.length&&(this.changeInit(),this.resetClusterIndexData(),this.loadClusterIndexData(this.showCluster[0],this.activeName))}},methods:{handleTabClick:function(e){this.metricInit||"metric"!=e.name?this.offsetInit||"offset"!=e.name||(this.offsetInit=!0,this.loadClusterIndexData(this.showCluster[0],e.name)):(this.metricInit=!0,this.loadClusterIndexData(this.showCluster[0],e.name))},getTimeRange1:function(e){"metric"===this.activeName&&(this.time=e,this.currentTime2=this.time[0]+","+this.time[1])},getTimeRange2:function(e){"offset"===this.activeName&&(this.time=e,this.currentTime1=this.time[0]+","+this.time[1])},changeQuick1:function(e){"metric"===this.activeName?this.quickNum2=e:this.quickNum2=-1},changeQuick2:function(e){"offset"===this.activeName?this.quickNum1=e:this.quickNum1=-1},setRenderCluster:function(e){if(e.length){var t,n=Object(s["a"])(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;this.envOptions.push({label:a.environmentName,value:a.id});var i=[];if(a.services&&a.services.length){var o,c=Object(s["a"])(a.services);try{for(c.s();!(o=c.n()).done;){var l=o.value;"ROCKETMQ"===l.serverType&&i.push(l.serverName)}}catch(m){c.e(m)}finally{c.f()}var u,d=Object(s["a"])(a.services);try{for(d.s();!(u=d.n()).done;){var v=u.value;"KAFKA"===v.serverType&&i.push(v.serverName)}}catch(m){d.e(m)}finally{d.f()}}this.allCluster=Object.assign({},this.allCluster,Object(r["a"])({},a.id,i))}}catch(m){n.e(m)}finally{n.f()}this.showCluster=this.allCluster[e[0].id],this.selectEnvId=e[0].id}},changeInit:function(){"metric"===this.activeName?this.offsetInit=!1:this.metricInit=!1},changeEnvId:function(){var e=this;this.metricCharts={},this.offsetCharts={},this.showCluster=this.allCluster[this.selectEnvId],this.showCluster&&this.showCluster.length&&this.showCluster.forEach((function(t){e.metricCharts=Object.assign({},e.metricCharts,Object(r["a"])({},t,{title:t,data:[],legend:[{name:"totalTps",attr:"totalTps"},{name:"clusterNums",attr:"clusterNums"}]})),e.offsetCharts=Object.assign({},e.offsetCharts,Object(r["a"])({},t,{title:t,data:[],legend:[{name:"offsets daily increasement",attr:"offsets_daily_increasement"}]}))}))},generateChartData:function(e){var t=[];return C["a"].dataSort(e).forEach((function(e){t.push({name:e.name,x:C["a"].timeToStr(1e3*e.timestamp,4),value:e.value})})),t},resetClusterIndexData:function(){this.metricAlreadylist=[],this.offsetAlreadylist=[],this.metricOrder=[],this.offsetOrder=[],this.validlist=[]},loadClusterIndexData:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var i,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return");case 2:if(i={clusterName:e,beginTime:n.time[0],endTime:n.time[1],envId:n.selectEnvId},"metric"!==t){a.next=11;break}return a.next=6,v(i);case 6:r=a.sent,n.metricOrder.push(e),n.metricCharts[e].data=n.generateChartData(r.result),a.next=16;break;case 11:return a.next=13,m(i);case 13:s=a.sent,n.offsetOrder.push(e),n.offsetCharts[e].data=n.generateChartData(s.result);case 16:case"end":return a.stop()}}),a)})))()},triggerFinish:function(e,t){var n=e+"---"+t;if(!this.validlist.some((function(e){return e===n}))&&(this.validlist.push(n),this[t]=Object(p["a"])(new Set([].concat(Object(p["a"])(this[t]),[e]))),this[t].length!==this.showCluster.length)){var a=this.showCluster[this[t].length];"metricAlreadylist"===t?this.loadClusterIndexData(a,"metric"):this.loadClusterIndexData(a,"offset")}}}},k=w,x=(n("ed19"),n("2877")),D=Object(x["a"])(k,h,f,!1,null,"71e812ee",null),I=D.exports,y=n("2d9d"),_=n("4677"),S=n("22ce"),j=n("b923"),E={data:function(){return{envRenameOptions:{visible:!1,ref:"envRenameForm",diatitle:"",forms:[{prop:"environmentName",label:"名称",defaultValue:"",rules:[{required:!0,message:"请输入名称",trigger:"blur"},{validator:this.environmentNameValid,trigger:"blur"}]}],currentFormValue:{},loading:!1},envId:"",originalName:""}},methods:{openRenameEnv:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n.envId=e,n.originalName=t,n.envRenameOptions.diatitle="重命名环境："+t,n.handleDia({options:n.envRenameOptions,cb:function(){}});case 4:case"end":return a.stop()}}),a)})))()},closeEnvRenameDia:function(){Object.assign(this.envRenameOptions,{visible:!1})},environmentNameValid:function(e,t,n){""!==t&&this.originalName===t&&n(new Error("请输入不同的环境名称")),n()},saveEnvRenameData:function(){var e=this;this.handleValidate({refname:"envRenameForm",cb:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(j["e"])(e.envId,n);case 2:e.closeEnvRenameDia(),e.loadData();case 4:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()})}}},T={data:function(){return{envDatabaseOptions:{visible:!1,envName:"",zookeepertableData:[],loading:!1},envId:"",zkServiceId:"",influxdbServiceId:""}},methods:{openDatabaseEnv:function(e,t,n,a){var i=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i.envId=e,i.envDatabaseOptions.envName=t,i.envDatabaseOptions.diatitle=t+"配置数据源",r.next=5,i.getZookeepertableData(e);case 5:return r.next=7,i.getInfluxdbtableData(e);case 7:i.handleDia({options:i.envDatabaseOptions,cb:function(){i.zkServiceId=n,i.influxdbServiceId=a}});case 8:case"end":return r.stop()}}),r)})))()},getZookeepertableData:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={envId:e,serviceType:"ZOOKEEPER"},n.next=3,Object(j["b"])(a);case 3:i=n.sent,r=i.result,r&&(t.envDatabaseOptions.zookeepertableData=r);case 6:case"end":return n.stop()}}),n)})))()},getInfluxdbtableData:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={envId:e,serviceType:"INFLUXDB"},n.next=3,Object(j["b"])(a);case 3:i=n.sent,r=i.result,r&&(t.envDatabaseOptions.influxdbtableData=r);case 6:case"end":return n.stop()}}),n)})))()},closeEnvDatabaseDia:function(){Object.assign(this.envDatabaseOptions,{visible:!1})},saveEnvDatabaseData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={zkServiceId:e.zkServiceId,influxdbServiceId:e.influxdbServiceId},t.next=3,Object(j["d"])(e.envId,n);case 3:e.closeEnvDatabaseDia(),e.loadData();case 5:case"end":return t.stop()}}),t)})))()}}},R=n("4246"),A={data:function(){return{envAddOptions:{visible:!1,ref:"envAddForm",diatitle:"新增环境",forms:[{prop:"environmentName",label:"名称",defaultValue:"",rules:[{required:!0,message:"请输入名称",trigger:"blur"}]}],currentFormValue:{},loading:!1}}},methods:{openAddEnv:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.handleDia({options:e.envAddOptions,cb:function(){}});case 1:case"end":return t.stop()}}),t)})))()},closeEnvAddDia:function(){Object.assign(this.envAddOptions,{visible:!1})},saveEnvAddData:function(){var e=this;this.handleValidate({refname:"envAddForm",cb:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(j["a"])(n);case 2:e.closeEnvAddDia(),e.loadData();case 4:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()})}}},N={name:"Welcome",mixins:[b["b"],b["a"],E,T,A],components:{OpMessage:_["a"],OpFreight:y["a"],clusterIndex:I},props:{envDetailId:void 0},data:function(){return{envList:[],isCollapse:[],modalTitle:"",formData:{installUrl:""},dialog:!1,moreServices:[],moreServicesCount:[]}},created:function(){this.loadData()},methods:{copy:function(e){var t=e,n=document.createElement("input");n.value=t,document.body.appendChild(n),n.select(),document.execCommand("Copy"),this.$message({message:"复制成功",type:"success"}),n.remove()},addHost:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.modalTitle="脚本安装",n.next=3,Object(R["a"])(e);case 3:a=n.sent,t.formData.installUrl=a.result,t.dialog=!0;case 6:case"end":return n.stop()}}),n)})))()},loadData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,i,o,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={},e.envDetailId&&(n.envId=e.envDetailId),e.envList=[],e.moreServices=[],e.moreServicesCount=[],t.next=7,d(n);case 7:if(a=t.sent,i=a.result,i.length){o=Object(s["a"])(i);try{for(o.s();!(c=o.n()).done;)l=c.value,e.isCollapse=Object.assign({},e.isCollapse,Object(r["a"])({},l.id,!1)),e.moreServicesCount=Object.assign({},e.moreServicesCount,Object(r["a"])({},l.id,l.services.length)),l.services.length<6?e.moreServices=Object.assign({},e.moreServices,Object(r["a"])({},l.id,l.services)):e.moreServices=Object.assign({},e.moreServices,Object(r["a"])({},l.id,l.services.slice(0,5)))}catch(u){o.e(u)}finally{o.f()}}e.envList=i;case 11:case"end":return t.stop()}}),t)})))()},viewMore:function(e){var t,n=Object(s["a"])(this.envList);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.id===e&&(this.moreServices=Object.assign({},this.moreServices,Object(r["a"])({},a.id,a.services)))}}catch(i){n.e(i)}finally{n.f()}},goEnvDetail:function(e){this.$router.push({name:"envHome",params:{id:e}})},goServiceDetail:function(e,t){this.$router.push({name:"serviceHome",params:{id:e,tab:t}})},goServiceAddHome:function(e,t){this.$router.push({name:"serviceAddHome",params:{envId:e,envName:t}})},hostList:function(e){this.$router.push({name:"hostList",params:{envId:e}})},serviceIconClass:function(e){switch(e){case"ZOOKEEPER":return"Zookeeper";case"INFLUXDB":return"influxDb";case"ZMS_ALERT":return"gaojing";case"ZMS_COLLECTOR":return"caiji";case"ROCKETMQ":return"RocketMQ";case"KAFKA":return"Kafka";case"ZMS_BACKUP_CLUSTER":return"backup";default:return""}},addInstance:function(e){this.$router.push({name:"instanceAddHome",params:{envId:e.environmentId,serverId:e.id,serverName:e.serverName,serverType:this.checkServerType(e)}})},checkServerType:function(e){var t=e.serverType.toLowerCase();switch(t){case"kafka":return"Kafka";case"rocketmq":return"Rocketmq";case"zookeeper":return"Zookeeper";default:return t}},handleDeleteService:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.isDo({title:"是否确定删除服务？",cb:function(){var n=Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(S["e"])(e);case 2:t.message("success","删除成功"),t.loadData();case 4:case"end":return n.stop()}}),n)})));function a(){return n.apply(this,arguments)}return a}()});case 1:case"end":return n.stop()}}),n)})))()}}},L=N,z=(n("0d8e"),Object(x["a"])(L,a,i,!1,null,null,null));t["default"]=z.exports},"41d9":function(e,t,n){},4246:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return d}));n("99af");var a=n("b775"),i=n("51be"),r=i["a"];function s(e){return Object(a["a"])({url:"".concat(r,"/api/master/env/").concat(e.envId,"/host?pageSize=").concat(e.pageSize,"&currentPage=").concat(e.currentPage,"&hostIp=").concat(e.hostIp),method:"get"})}function o(e,t){return Object(a["a"])({url:"".concat(r,"/api/master/env/").concat(e,"/host/").concat(t),method:"get"})}function c(e){return Object(a["a"])({url:"".concat(r,"/api/master/env/").concat(e,"/hostInit"),method:"get"})}function l(e,t){return Object(a["a"])({url:"".concat(r,"/api/master/env/").concat(e,"/hostDisabled"),method:"post",data:t})}function u(e,t){return Object(a["a"])({url:"".concat(r,"/api/master/env/").concat(e,"/hostEnabled"),method:"post",data:t})}function d(e){return Object(a["a"])({url:"".concat(r,"/api/hostserve/listHostInstanceByEnvId/").concat(e),method:"get"})}},4677:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-dialog"},[n("el-dialog",{directives:[{name:"drag-dialog",rawName:"v-drag-dialog"}],attrs:{title:e.modalTitle,visible:e.dialog,"before-close":e.closeHandle,width:e.width||"580px"},on:{"update:visible":function(t){e.dialog=t}}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[e._t("default"),e._t("table"),n("div",{staticClass:"c-dialog__footer",attrs:{slot:"footer"},slot:"footer"},[e.noCancle?e._e():n("el-button",{attrs:{size:"mini"},on:{click:e.closeHandle}},[e._v("关闭")])],1)],2)])],1)},i=[],r={props:["dialog","modalTitle","callback","refname","loading","width","noCancle"],methods:{closeHandle:function(){this.$emit("dealDialog")}}},s=r,o=n("2877"),c=Object(o["a"])(s,a,i,!1,null,null,null);t["a"]=c.exports},"77e91":function(e,t,n){"use strict";n("4160"),n("c975"),n("ac1f"),n("1276"),n("159b");var a=n("b775"),i=n("51be"),r=i["a"],s={validCode:{url:r+"/api/topic/uniqueCheck",method:"get"},applicant:{url:r+"/api/userinfo/queryApplicants",method:"get"},getTopicsByClusterId:{url:r+"/api/topic/getTopicsByClusterId",method:"get"},getTopicsByCluster:{url:r+"/api/topic/getTopicsByCluster",method:"get"}},o={list:{url:r+"/api/env/listEnvironment",method:"get"}},c={list:{url:r+"/api/service/listClusters",method:"get"}},l={list:{url:r+"/api/consumer/queryApprovedConsumers",method:"get"},getApproveTopicList:{url:r+"/api/topic/getTopicsByClusterId",method:"get"},getConsumersByClusterId:{url:r+"/api/consumer/getConsumersByClusterId",method:"get"},validCode:{url:r+"/api/consumer/uniqueCheck",method:"post"}},u={theme:s,cluster:c,consumer:l,environment:o};function d(e){if(-1===e.indexOf("_"))return u[e];var t=u;return e.split("_").forEach((function(e){t=t[e]})),t}t["a"]={accessAPI:function(e){var t=e.apiUrl,n=void 0===t?"":t,i=e.params,r=void 0===i?{}:i,s=e.headers,o=void 0===s?{}:s,c={headers:o},l=d(n);return Object.assign(c,{url:l.url,method:l.method}),"get"===l.method?Object.assign(c,{params:r}):"post"!==l.method&&"put"!==l.method&&"patch"!==l.method&&"delete"!==l.method||Object.assign(c,{data:r}),Object(a["a"])(c)}}},b923:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u}));n("99af");var a=n("b775"),i=n("51be"),r=i["a"];function s(e){return Object(a["a"])({url:"".concat(r,"/api/env/add"),method:"post",data:e})}function o(e,t){return Object(a["a"])({url:"".concat(r,"/api/env/").concat(e,"/rename"),method:"put",data:t})}function c(e,t){return Object(a["a"])({url:"".concat(r,"/api/env/").concat(e,"/loadDatabase"),method:"put",data:t})}function l(e){return Object(a["a"])({url:"".concat(r,"/api/service/listByEnvIdAndServiceType"),method:"get",params:e})}function u(e){return Object(a["a"])({url:"".concat(r,"/api/env/listEnvironment"),method:"get",params:e})}},c3d8:function(e,t,n){},e350:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));n("caad"),n("45fc"),n("2532");var a=n("4360"),i=function(e){if(e&&e instanceof Array&&e.length>0){var t=a["a"].getters&&a["a"].getters.permissions,n=e,i=t.some((function(e){return n.includes(e)}));return!!i}return console.error("need roles! Like v-if=\"checkPerm['op_editor']\""),!1},r=function(e){var t=a["a"].getters.userInfo.realName;return e===t}},ed08:function(e,t,n){"use strict";function a(e,t,n){var a,i,r,s,o,c=function c(){var l=+new Date-s;l<t&&l>0?a=setTimeout(c,t-l):(a=null,n||(o=e.apply(r,i),a||(r=i=null)))};return function(){for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];r=this,s=+new Date;var d=n&&!a;return a||(a=setTimeout(c,t)),d&&(o=e.apply(r,l),r=l=null),o}}n.d(t,"a",(function(){return a}))},ed19:function(e,t,n){"use strict";var a=n("41d9"),i=n.n(a);i.a}}]);