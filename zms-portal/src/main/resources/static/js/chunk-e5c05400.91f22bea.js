(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5c05400"],{"385b":function(e,t,n){},4246:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return p}));n("99af");var r=n("b775"),a=n("51be"),c=a["a"];function s(e){return Object(r["a"])({url:"".concat(c,"/api/master/env/").concat(e.envId,"/host?pageSize=").concat(e.pageSize,"&currentPage=").concat(e.currentPage,"&hostIp=").concat(e.hostIp),method:"get"})}function i(e,t){return Object(r["a"])({url:"".concat(c,"/api/master/env/").concat(e,"/host/").concat(t),method:"get"})}function o(e){return Object(r["a"])({url:"".concat(c,"/api/master/env/").concat(e,"/hostInit"),method:"get"})}function u(e,t){return Object(r["a"])({url:"".concat(c,"/api/master/env/").concat(e,"/hostDisabled"),method:"post",data:t})}function l(e,t){return Object(r["a"])({url:"".concat(c,"/api/master/env/").concat(e,"/hostEnabled"),method:"post",data:t})}function p(e){return Object(r["a"])({url:"".concat(c,"/api/hostserve/listHostInstanceByEnvId/").concat(e),method:"get"})}},"547f":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.serviceConfigData.length?n("div",{staticClass:"content_form"},[n("el-form",{ref:"serviceConfigForm",attrs:{model:e.serviceConfigForm,size:"mini"}},e._l(e.serviceConfigData,(function(t){return n("div",{key:t.id,staticClass:"content_row"},[n("div",{staticClass:"content_left"},[n("h3",[1==t.isRequired?n("span",{staticClass:"asterisk"},[e._v("*")]):e._e(),e._v(" "+e._s(t.propertyName)+" ")]),n("span",[e._v(e._s(t.description))])]),n("div",{staticClass:"content_right"},[n("el-form-item",{attrs:{prop:t.id,rules:[{required:1==t.isRequired&&"CLUSTER_MAP"!=t.chooseType,message:"请输入"+t.propertyName,trigger:"blur"},{validator:e.checkValue,trigger:"blur"}]}},["TEXT"==t.chooseType?n("el-input",{model:{value:e.serviceConfigForm[t.id],callback:function(n){e.$set(e.serviceConfigForm,t.id,"string"===typeof n?n.trim():n)},expression:"serviceConfigForm[item.id]"}}):e._e(),"CHECKBOX"==t.chooseType?n("el-checkbox-group",{model:{value:e.serviceConfigForm[t.id],callback:function(n){e.$set(e.serviceConfigForm,t.id,n)},expression:"serviceConfigForm[item.id]"}},e._l(t.propertyValueList,(function(t){return n("div",{key:t.id,staticClass:"content_checkbox"},[n("el-checkbox",{attrs:{label:t.propertyValue}},[e._v(" "+e._s(t.displayValue)+" ")])],1)})),0):e._e(),"RADIO"==t.chooseType?n("el-radio-group",{on:{change:function(n){return e.radioChange(t)}},model:{value:e.serviceConfigForm[t.id],callback:function(n){e.$set(e.serviceConfigForm,t.id,n)},expression:"serviceConfigForm[item.id]"}},e._l(t.propertyValueList,(function(t){return n("div",{key:t.id,staticClass:"content_radio"},[n("el-radio",{attrs:{label:t.propertyValue}},[e._v(" "+e._s(t.displayValue)+" ")])],1)})),0):e._e(),"LIST"==t.chooseType?n("el-select",{model:{value:e.serviceConfigForm[t.id],callback:function(n){e.$set(e.serviceConfigForm,t.id,n)},expression:"serviceConfigForm[item.id]"}},e._l(t.propertyValueList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.displayValue,value:e.propertyValue}})})),1):e._e(),"CLUSTER_MAP"==t.chooseType?n("div",[e._l(e.clusterMapData,(function(t,r){return n("div",{key:r,staticClass:"content_checkbox"},[0===e.clusterMapData[r]["delete"]?n("div",[n("el-row",{staticStyle:{"margin-bottom":"10px"}},[n("el-col",{attrs:{span:10}},[n("el-select",{attrs:{placeholder:"备份集群",size:"small"},model:{value:e.clusterMapData[r]["originCluster"],callback:function(t){e.$set(e.clusterMapData[r],"originCluster",t)},expression:"clusterMapData[index]['originCluster']"}},e._l(e.originClusters,(function(e){return n("el-option",{key:e.id,attrs:{label:e.serverName,value:e.serverName}})})),1)],1),n("el-col",{attrs:{span:10}},[n("el-select",{attrs:{placeholder:"目标集群",size:"small"},model:{value:e.clusterMapData[r]["currentCluster"],callback:function(t){e.$set(e.clusterMapData[r],"currentCluster",t)},expression:"clusterMapData[index]['currentCluster']"}},e._l(e.currentClusters,(function(e){return n("el-option",{key:e.id,attrs:{label:e.serverName,value:e.serverName}})})),1)],1),n("el-col",{attrs:{span:4}},[n("i",{staticClass:"el-icon-remove-outline icon_cluster",staticStyle:{color:"red"},on:{click:function(t){return e.removeClusterMap(r)}}})])],1)],1):e._e()])})),n("el-row",[n("i",{staticClass:"el-icon-circle-plus-outline icon_cluster",on:{click:function(t){return e.addClusterMap()}}})])],2):e._e()],1)],1)])})),0)],1):e._e()},a=[],c=(n("99af"),n("4de4"),n("4160"),n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("6062"),n("3ca3"),n("1276"),n("159b"),n("ddb0"),n("ade3")),s=n("5530"),i=n("b85c"),o=(n("96cf"),n("1da1")),u=n("1b62"),l=n("22ce"),p={name:"serviceAddConfig",mixins:[u["b"],u["a"]],props:{envId:[Number,String],serverType:String,instanceType:Array},data:function(){return{serviceConfigForm:{},serviceConfigData:[],currentClusters:[],originClusters:[],clusterMapData:[],clusterMapProperties:[]}},created:function(){this.loadServiceInstanceConfig()},methods:{checkServerType:function(){var e=this.serverType;switch(e){case"ZMSCollector":return"zms_collector";case"ZMSAlert":return"zms_alert";case"Kafka":return"kafka";case"Rocketmq":return"rocketmq";case"Zookeeper":return"zookeeper";case"InfluxDB":return"influxdb";case"ZMSBackupCluster":return"zms_backup_cluster";default:return e}},loadServiceInstanceConfig:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.checkServerType(),t.serviceConfigForm={},t.serviceConfigData=[],n.next=5,Object(l["g"])(t.envId,r,e||(t.instanceType?t.instanceType:""));case 5:a=n.sent,a.result&&t.assignCurrentValue(a.result),t.getServiceAndEnvById();case 8:case"end":return n.stop()}}),n)})))()},getServiceAndEnvById:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=!1,r=Object(i["a"])(e.serviceConfigData),t.prev=2,r.s();case 4:if((a=r.n()).done){t.next=11;break}if(c=a.value,"CLUSTER_MAP"!=c.chooseType){t.next=9;break}return n=!0,t.abrupt("break",11);case 9:t.next=4;break;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](2),r.e(t.t0);case 16:return t.prev=16,r.f(),t.finish(16);case 19:if(!n){t.next=24;break}return t.next=22,e.listClusterList(e.envId);case 22:e.currentClusters=t.sent,0==e.clusterMapData.length&&e.addClusterMap();case 24:case"end":return t.stop()}}),t,null,[[2,13,16,19]])})))()},clusterMap:function(e){if("CLUSTER_MAP"==e.chooseType){var t=this.serviceConfigForm[e.id];if(null==t)return;this.clusterMapData=[];var n,r=Object(i["a"])(t.split(","));try{for(r.s();!(n=r.n()).done;){var a=n.value,c=a.split(":"),s=c[0],o=c[1];this.clusterMapData.push({originCluster:s,currentCluster:o,delete:0})}}catch(u){r.e(u)}finally{r.f()}}},removeClusterMap:function(e){console.log("clusterMapData",this.clusterMapData),this.clusterMapData[e]["delete"]=1},addClusterMap:function(){console.log("clusterMapData",this.clusterMapData),this.clusterMapData.push({delete:0})},radioChange:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("envId"!==e.propertyName){n.next=8;break}return console.log("clusterMapData",t.clusterMapData),r=t.serviceConfigForm[e.id],n.next=5,t.listClusterList(r);case 5:t.originClusters=n.sent,a=Object(i["a"])(t.clusterMapData);try{for(a.s();!(c=a.n()).done;)s=c.value,s["originCluster"]&&(s["originCluster"]=null)}catch(o){a.e(o)}finally{a.f()}case 8:case"end":return n.stop()}}),n)})))()},listClusterList:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["c"])({envId:e});case 2:if(n=t.sent,!n.result){t.next=5;break}return t.abrupt("return",n.result);case 5:case"end":return t.stop()}}),t)})))()},assignCurrentValue:function(e){var t,n=Object(i["a"])(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.id=r.id.toString(),r.currentValue=r.defaultValue,"CHECKBOX"===r.chooseType&&(r.currentValue?r.currentValue=r.currentValue.split(","):r.currentValue=[])}}catch(a){n.e(a)}finally{n.f()}this.serviceConfigData=e,this.resetForm()},resetForm:function(){var e,t=Object(i["a"])(this.serviceConfigData);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.serviceConfigForm=Object(s["a"])(Object(s["a"])({},this.serviceConfigForm),{},Object(c["a"])({},n.id,n.currentValue)),this.clusterMap(n)}}catch(r){t.e(r)}finally{t.f()}},serviceInstanceConfigSave:function(){var e=this,t=!1;return this.$refs["serviceConfigForm"].validate(function(){var n=Object(o["a"])(regeneratorRuntime.mark((function n(r){var a,c,s,o,u,l,p,d,f,v,m,h,b;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!r){n.next=44;break}a=Object(i["a"])(e.serviceConfigData),n.prev=2,a.s();case 4:if((c=a.n()).done){n.next=33;break}if(s=c.value,s.currentValue=e.serviceConfigForm[s.id],"CHECKBOX"===s.chooseType){o="",u=Object(i["a"])(s.currentValue);try{for(u.s();!(l=u.n()).done;)p=l.value,o=o.concat(",").concat(p)}catch(g){u.e(g)}finally{u.f()}s.currentValue=o.length>0?o.substr(1):o}if("CLUSTER_MAP"!=s.chooseType){n.next=31;break}d="",f=Object(i["a"])(e.clusterMapData),n.prev=11,f.s();case 13:if((v=f.n()).done){n.next=22;break}if(m=v.value,1!=m["delete"]){n.next=17;break}return n.abrupt("continue",20);case 17:h=m["originCluster"],b=m["currentCluster"],d=d.concat(",").concat(h+":"+b);case 20:n.next=13;break;case 22:n.next=27;break;case 24:n.prev=24,n.t0=n["catch"](11),f.e(n.t0);case 27:return n.prev=27,f.f(),n.finish(27);case 30:s.currentValue=d.length>0?d.substr(1):d;case 31:n.next=4;break;case 33:n.next=38;break;case 35:n.prev=35,n.t1=n["catch"](2),a.e(n.t1);case 38:return n.prev=38,a.f(),n.finish(38);case 41:t=!0,n.next=45;break;case 44:t=!1;case 45:case"end":return n.stop()}}),n,null,[[2,35,38,41],[11,24,27,30]])})));return function(e){return n.apply(this,arguments)}}()),t},checkClusterMap:function(e,t,n){var r=this.clusterMapData.filter((function(e){return 1==e["delete"]}));0===r&&n(new Error("设置backup.cluster.map"));var a=this.clusterMapData.filter((function(e){return 0==e["delete"]})),c=new Set;a.forEach((function(e){0===e["delete"]&&(e["originCluster"]&&e["currentCluster"]||n(new Error("集群不能为空")),c.add(e["originCluster"]))})),c.size==a.length?n():n(new Error("源集群不能重复配置"))},checkValue:function(e,t,n){var r=this.serviceConfigData.filter((function(t){return e.field==t.id}))[0];if(t&&"TEXT"===r.chooseType){var a=this.checkTextValue(r,t);a&&n(new Error(a))}r&&"CLUSTER_MAP"===r.chooseType&&this.checkClusterMap(e,t,n),n()},checkTextValue:function(e,t){if("STRING"===e.valueType){if(e.minLen&&e.maxLen&&(t.length<e.minLen||t.length>e.maxLen))return"长度应介于".concat(e.minLen).concat("和").concat(e.maxLen).concat("之间");if(e.minLen&&t.length<e.minLen)return"长度应大于等于".concat(e.minLen);if(e.maxLen&&t.length>e.maxLen)return"长度应小于等于".concat(e.maxLen)}else if("NUMBER"===e.valueType){if(!this.isNumber(t))return"请输入整数类型";if(e.minValue&&e.maxValue&&(parseInt(t)<e.minValue||parseInt(t)>e.maxValue))return"请输入介于".concat(e.minValue).concat("和").concat(e.maxValue).concat("之间的整数");if(e.minValue&&parseInt(t)<e.minValue)return"请输入不小于".concat(e.minValue).concat("的整数");if(e.maxValue&&parseInt(t)>e.maxValue)return"请输入不大于".concat(e.maxValue).concat("的整数")}else if("DOUBLE"===e.valueType){if(!this.isDouble(t))return"请输入数值类型";if(e.minValue&&e.maxValue&&(parseFloat(t)<e.minValue||parseFloat(t)>e.maxValue))return"请输入介于".concat(e.minValue).concat("和").concat(e.maxValue).concat("之间的值");if(e.minValue&&parseFloat(t)<e.minValue)return"请输入不小于".concat(e.minValue).concat("的值");if(e.maxValue&&parseFloat(t)>e.maxValue)return"请输入不大于".concat(e.maxValue).concat("的值")}return""},isNumber:function(e){var t=/^[0-9]*$/;return!!t.test(e)},isDouble:function(e){var t=/^[0-9,.]*$/;return!!t.test(e)}}},d=p,f=(n("ef11"),n("2877")),v=Object(f["a"])(d,r,a,!1,null,null,null);t["a"]=v.exports},5877:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"service-add-instance"},[n("p",{staticStyle:{"margin-bottom":"25px","line-height":"1.6",background:"#f0f3f7",padding:"12px 20px","border-radius":"4px","font-size":"13px"}},[e._v(" 您可以在此处自定义服务的节点分配，但请注意，如果分配不正确（例如，分配到某个主机上的服务节点太多），性能受到影响。 ")]),e._l(e.instanceType,(function(t,r){return n("div",{key:t.id},[n("el-row",{attrs:{span:35}},[n("el-col",{attrs:{span:12}},[n("p",{staticStyle:{"font-size":"16px"}},[e._v(" "+e._s(e.serviceAddInstanceForm.instanceTypeDescMap[e.serverType+"_"+t])+" ")])]),n("el-col",{attrs:{span:12}},[n("el-button",{staticClass:"content_button",attrs:{plain:"",type:e.serviceAddInstanceForm.instanceTypeHostMap[t].buttonClass},on:{click:function(n){return e.openDialog(t)}}},[e._v(" "+e._s(e.serviceAddInstanceForm.instanceTypeHostMap[t].buttonTxt)+" ")])],1)],1),r<e.instanceType.length-1?n("el-divider"):e._e()],1)})),n("el-dialog",{attrs:{title:"选择主机",visible:e.dialogTableVisible,width:"70%"},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[n("el-input",{staticClass:"content_input",attrs:{size:"mini",placeholder:"输入主机名称或IP地址"},on:{input:e.searchGridData},model:{value:e.diaForm.input,callback:function(t){e.$set(e.diaForm,"input",t)},expression:"diaForm.input"}}),n("el-table",{ref:"multipleTable",attrs:{"tooltip-effect":"dark",data:e.serviceAddInstanceForm.gridData,"row-key":"id",width:"700"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection","reserve-selection":!0,width:"55"}}),n("el-table-column",{attrs:{property:"hostName",label:"主机名称",width:"200"}}),n("el-table-column",{attrs:{property:"hostIp",label:"IP地址",width:"150"}}),n("el-table-column",{attrs:{label:"现有服务"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.services,(function(t){return n("span",{key:t.id,staticStyle:{"margin-right":"20px"}},[n("el-tooltip",{attrs:{content:t.serverType.toLowerCase(),placement:"top",effect:"light"}},[n("svg-icon",{attrs:{"icon-class":e.serviceIconClass(t.serverType)}})],1),n("span",{staticStyle:{"margin-left":"2px"}},[e._v(e._s(t.instanceName))])],1)}))}}])})],1),n("div",{staticClass:"content_mini_button"},[n("el-button",{attrs:{size:"mini"},on:{click:function(t){e.dialogTableVisible=!1}}},[e._v("取消")]),n("el-button",e._b({staticStyle:{"margin-left":"20px"},on:{click:e.saveInstanceData}},"el-button",e.GLOBAL.button,!1),[e._v(" 确定 ")])],1)],1)],2)},a=[],c=(n("99af"),n("4de4"),n("4160"),n("caad"),n("c975"),n("a9e3"),n("2532"),n("159b"),n("5530")),s=n("b85c"),i=(n("96cf"),n("1da1")),o=n("1b62"),u=n("4246"),l={name:"serviceAddInstance",mixins:[o["b"],o["a"]],props:{envId:[Number,String],serverType:String,instanceType:Array},data:function(){return{serviceAddInstanceForm:{currentInstanceType:"",allTableData:[],gridData:[],instanceTypeHostMap:{},instanceList:[],instanceType:[],instanceTypeDescMap:{Rocketmq_NAMESVR:"选择 Rocketmq 集群 namesrv 节点",Rocketmq_BROKER:"选择 Rocketmq 集群 broker 节点",Kafka_BROKER:"选择 Kafka 集群节点",Zookeeper_INSTANCE:"选择 Zookeeper 集群节点",InfluxDB_INSTANCE:"选择 InfluxDB 服务节点",ZMSCollector_INSTANCE:"选择 ZMSCollector 服务节点",ZMSAlert_INSTANCE:"选择 ZMSAlert 服务节点",ZMSBackupCluster_INSTANCE:"选择 ZMSBackupCluster 服务节点"},serverTypeSpanMap:{Rocketmq:9,Kafka:6,Zookeeper:7,InfluxDB:6,zms_collector:8,zms_alert:7}},dialogTableVisible:!1,diaForm:{input:"",checkbox:[]}}},created:function(){this.loadHostInstanceByEnvId(),this.initValue()},methods:{loadHostInstanceByEnvId:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["f"])(e.envId);case 2:n=t.sent,n.result&&(e.serviceAddInstanceForm.allTableData=n.result,e.serviceAddInstanceForm.gridData=n.result);case 4:case"end":return t.stop()}}),t)})))()},initValue:function(){var e=this;this.instanceType.forEach((function(t){e.serviceAddInstanceForm.instanceTypeHostMap[t]={buttonTxt:void 0,buttonClass:"info",multiSureSelection:[],searchStr:""}}))},currentInstanceType:function(){return this.serviceAddInstanceForm.currentInstanceType},handleSelectionChange:function(e){this.diaForm.checkbox=e},openDialog:function(e){this.serviceAddInstanceForm.currentInstanceType=e,this.serviceAddInstanceForm.instanceTypeHostMap[this.currentInstanceType()].currentInstanceType=e,this.dialogTableVisible=!0,this.clearSelection(),this.toggleSelection()},clearSelection:function(){this.diaForm.checkbox.length>0&&this.$refs.multipleTable.clearSelection()},toggleSelection:function(){var e=this;this.serviceAddInstanceForm.instanceTypeHostMap[this.currentInstanceType()].multiSureSelection.length>0&&this.serviceAddInstanceForm.instanceTypeHostMap[this.currentInstanceType()].multiSureSelection.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t,!0)}))},searchGridData:function(){var e=this;if(this.diaForm.input){var t=this,n=t.serviceAddInstanceForm.allTableData.filter((function(t){return t.hostName.includes(e.diaForm.input)||t.hostIp.includes(e.diaForm.input)}));this.serviceAddInstanceForm.gridData=n}else this.serviceAddInstanceForm.gridData=this.serviceAddInstanceForm.allTableData},saveInstanceData:function(){if(this.serviceAddInstanceForm.instanceTypeHostMap[this.currentInstanceType()].multiSureSelection=this.diaForm.checkbox,("zms_collector"==this.serverType||"zms_alert"==this.serverType||"influxdb"==this.serverType)&&this.serviceAddInstanceForm.instanceTypeHostMap[this.currentInstanceType()].multiSureSelection.length>1)this.message("error","请选择单个主机！");else{this.serviceAddInstanceForm.instanceTypeHostMap[this.currentInstanceType()].buttonTxt=void 0;var e="";if(this.serviceAddInstanceForm.instanceTypeHostMap[this.currentInstanceType()].multiSureSelection.length>0){var t,n=Object(s["a"])(this.serviceAddInstanceForm.instanceTypeHostMap[this.currentInstanceType()].multiSureSelection);try{for(n.s();!(t=n.n()).done;){var r=t.value;e=e.concat(",").concat(r.hostName)}}catch(a){n.e(a)}finally{n.f()}}this.serviceAddInstanceForm.instanceTypeHostMap[this.currentInstanceType()].buttonTxt=e.length>0?e.substr(1):e,this.serviceAddInstanceForm.instanceTypeHostMap[this.currentInstanceType()].buttonClass="info",this.dialogTableVisible=!1}},validInstanceData:function(){var e=this,t=[],n=[],r=!0,a=function(r){var a=e.serviceAddInstanceForm.instanceTypeHostMap[r].multiSureSelection;if(0==a.length)return e.serviceAddInstanceForm.instanceTypeHostMap[r].buttonClass="danger",e.serviceAddInstanceForm.instanceTypeHostMap=Object(c["a"])({},e.serviceAddInstanceForm.instanceTypeHostMap),"continue";n.push(r),e.serviceAddInstanceForm.instanceTypeHostMap[r].multiSureSelection.forEach((function(e){var n={instanceType:r,hostId:e.id};t.push(n)}))};for(var s in this.serviceAddInstanceForm.instanceTypeHostMap)a(s);if(0==t.length&&(r=!1),r){if(this.serviceAddInstanceForm.instanceType.length>0){var i=this.serviceAddInstanceForm.instanceType.filter((function(e){return-1==n.indexOf(e)})),o=n.filter((function(t){return-1==e.serviceAddInstanceForm.instanceType.indexOf(t)}));(i.length>0||o.length>0)&&(this.serviceAddInstanceForm.instanceType=n,this.$emit("reloadServiceConfig"))}this.serviceAddInstanceForm.instanceList=t,this.serviceAddInstanceForm.instanceType=n}return r},serviceIconClass:function(e){switch(e){case"ZOOKEEPER":return"Zookeeper";case"INFLUXDB":return"influxDb";case"ZMS_ALERT":return"gaojing";case"ZMS_COLLECTOR":return"caiji";case"ROCKETMQ":return"RocketMQ";case"KAFKA":return"Kafka";case"ZMS_BACKUP_CLUSTER":return"backup";default:return""}}}},p=l,d=(n("c97a"),n("2877")),f=Object(d["a"])(p,r,a,!1,null,null,null);t["a"]=f.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),a=n("5899"),c="["+a+"]",s=RegExp("^"+c+c+"*"),i=RegExp(c+c+"*$"),o=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(s,"")),2&e&&(n=n.replace(i,"")),n}};e.exports={start:o(1),end:o(2),trim:o(3)}},"58ee":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"service-add-complete"},[n("p",{staticClass:"content_header"},[e._v("恭喜您！")]),n("p",{staticStyle:{"font-size":"14px"}},[e._v("您的新服务已安装在群集中并已配置。")]),n("div",{staticClass:"content_border"},[n("b",[e._v("注意")]),n("span",[e._v(" ：您可能仍必须启动新服务。建议您在执行此操作之前，先重启所有配置过时的依赖关系服务。可以通过单击下面的 ")]),n("b",[e._v("完成")]),n("span",[e._v("在主页面上执行这些操作")])])])}],c={name:"serviceAddComplete"},s=c,i=(n("dbd7"),n("2877")),o=Object(i["a"])(s,r,a,!1,null,null,null);t["a"]=o.exports},"5c6d":function(e,t,n){},"93bd":function(e,t,n){},"9a0a":function(e,t,n){"use strict";var r=n("385b"),a=n.n(r);a.a},a15b:function(e,t,n){"use strict";var r=n("23e7"),a=n("44ad"),c=n("fc6a"),s=n("b301"),i=[].join,o=a!=Object,u=s("join",",");r({target:"Array",proto:!0,forced:o||u},{join:function(e){return i.call(c(this),void 0===e?",":e)}})},a623:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").every,c=n("b301");r({target:"Array",proto:!0,forced:c("every")},{every:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},a9e3:function(e,t,n){"use strict";var r=n("83ab"),a=n("da84"),c=n("94ca"),s=n("6eeb"),i=n("5135"),o=n("c6b6"),u=n("7156"),l=n("c04e"),p=n("d039"),d=n("7c73"),f=n("241c").f,v=n("06cf").f,m=n("9bf2").f,h=n("58a8").trim,b="Number",g=a[b],y=g.prototype,C=o(d(y))==b,T=function(e){var t,n,r,a,c,s,i,o,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=h(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(c=u.slice(2),s=c.length,i=0;i<s;i++)if(o=c.charCodeAt(i),o<48||o>a)return NaN;return parseInt(c,r)}return+u};if(c(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var I,k=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof k&&(C?p((function(){y.valueOf.call(n)})):o(n)!=b)?u(new g(T(t)),n,k):T(t)},x=r?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;x.length>_;_++)i(g,I=x[_])&&!i(k,I)&&m(k,I,v(g,I));k.prototype=y,y.constructor=k,s(a,b,k)}},c97a:function(e,t,n){"use strict";var r=n("fb7f"),a=n.n(r);a.a},d81d:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").map,c=n("1dde");r({target:"Array",proto:!0,forced:!c("map")},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},dbd7:function(e,t,n){"use strict";var r=n("93bd"),a=n.n(r);a.a},ef11:function(e,t,n){"use strict";var r=n("5c6d"),a=n.n(r);a.a},f704:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add_run_state"},[n("run-state",{ref:"runState",attrs:{"header-title":"运行结果",type:"firstRun","loading-text":"正在运行"},on:{runComplete:e.runComplete}})],1)},a=[],c=(n("a9e3"),n("96cf"),n("1da1")),s=n("1b62"),i=n("22ce"),o=n("44c6"),u={name:"serviceAddRun",mixins:[s["b"],s["a"]],components:{runState:o["a"]},props:{envId:[Number,String],serverType:String,serverName:String,propertyList:Array,instanceList:Array,serverId:Number},created:function(){this.saveService()},methods:{checkServerType:function(){var e=this.serverType;switch(e){case"ZMSCollector":return"zms_collector";case"ZMSAlert":return"zms_alert";case"Kafka":return"kafka";case"Rocketmq":return"rocketmq";case"Zookeeper":return"zookeeper";case"InfluxDB":return"influxdb";case"ZMSBackupCluster":return"zms_backup_cluster";default:return e}},saveService:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.checkServerType(),r={environmentId:e.envId,serverName:e.serverName,serverType:n,id:e.serverId},a={service:r,instanceList:e.instanceList,propertyList:e.propertyList},!e.serverId){t.next=9;break}return t.next=6,Object(i["b"])(a);case 6:c=t.sent,t.next=12;break;case 9:return t.next=11,Object(i["a"])(a);case 11:c=t.sent;case 12:if(c.result){t.next=15;break}return e.$refs.runState.checkProcessFailState(),t.abrupt("return");case 15:return t.next=17,Object(i["o"])(c.result);case 17:s=t.sent,e.$refs.runState.checkProcessState(s.result);case 19:case"end":return t.stop()}}),t)})))()},runComplete:function(){this.$emit("runComplete")}}},l=u,p=(n("9a0a"),n("2877")),d=Object(p["a"])(l,r,a,!1,null,null,null);t["a"]=d.exports},fb7f:function(e,t,n){}}]);