(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32db800e"],{"58da":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",[l("div",{staticClass:"btn"},[l("div",[l("el-input",{staticStyle:{width:"300px","margin-right":"10px"},attrs:{clearable:"",placeholder:"请输入姓名进行搜索"},on:{clear:e.clear},model:{value:e.empName,callback:function(t){e.empName=t},expression:"empName"}}),l("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")]),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showSearchList=!e.showSearchList}}},[l("i",{class:e.showSearchList?"fa fa-angle-double-up":"fa fa-angle-double-down",attrs:{"aria-hidden":"true"}}),e._v(" 高级搜索")])],1),l("div",[l("el-upload",{staticClass:"upload-demo",attrs:{action:"/system/basic/employee/import",headers:e.headers,"show-file-list":!1,"before-upload":e.beforeUpload,"on-success":e.onSuccess,"on-error":e.onError,disabled:e.importDisabled}},[l("el-button",{attrs:{type:"success",disabled:e.importDisabled,icon:e.importIcon}},[e._v(" "+e._s(e.importTitle)+" ")])],1),l("el-button",{attrs:{type:"success",icon:"el-icon-download"},on:{click:e.exportUser}},[e._v("导出数据")]),l("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.showUser}},[e._v("添加用户")])],1)])]),l("transition",{attrs:{name:"slide-fade"}},[l("div",{directives:[{name:"show",rawName:"v-show",value:e.showSearchList,expression:"showSearchList"}],staticClass:"border"},[l("el-row",[l("el-col",{attrs:{span:5,offset:0}},[e._v(" 政治面貌: "),l("el-select",{attrs:{size:"mini",placeholder:"政治面貌"},model:{value:e.searchValue.politicId,callback:function(t){e.$set(e.searchValue,"politicId",t)},expression:"searchValue.politicId"}},e._l(e.politicsStatus,(function(e,t){return l("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),l("el-col",{attrs:{span:4,offset:0}},[e._v(" 民族: "),l("el-select",{attrs:{size:"mini",placeholder:"民族"},model:{value:e.searchValue.nationId,callback:function(t){e.$set(e.searchValue,"nationId",t)},expression:"searchValue.nationId"}},e._l(e.nation,(function(e,t){return l("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),l("el-col",{attrs:{span:4,offset:0}},[e._v(" 职位: "),l("el-select",{attrs:{size:"mini",placeholder:"职位"},model:{value:e.searchValue.posId,callback:function(t){e.$set(e.searchValue,"posId",t)},expression:"searchValue.posId"}},e._l(e.position,(function(e,t){return l("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),l("el-col",{attrs:{span:4,offset:0}},[e._v(" 职称: "),l("el-select",{attrs:{size:"mini",placeholder:"职称"},model:{value:e.searchValue.jobLevelId,callback:function(t){e.$set(e.searchValue,"jobLevelId",t)},expression:"searchValue.jobLevelId"}},e._l(e.joblevel,(function(e,t){return l("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),l("el-col",{attrs:{span:7,offset:0}},[e._v(" 聘用形式: "),l("el-radio-group",{model:{value:e.searchValue.engageForm,callback:function(t){e.$set(e.searchValue,"engageForm",t)},expression:"searchValue.engageForm"}},[l("el-radio",{attrs:{label:"劳动合同"}},[e._v("劳动合同")]),l("el-radio",{attrs:{label:"劳务合同"}},[e._v("劳务合同")])],1)],1)],1),l("el-row",{staticStyle:{"margin-top":"10px"}},[l("el-col",{attrs:{span:5,offset:0}},[e._v(" 所属部门: "),l("el-popover",{attrs:{placement:"right",title:"请选择部门",width:"200",trigger:"manual"},model:{value:e.visible2,callback:function(t){e.visible2=t},expression:"visible2"}},[l("el-tree",{attrs:{data:e.allDep,props:e.defaultProps,"default-expand-all":""},on:{"node-click":e.searchHandleNodeClick}}),l("div",{staticClass:"departments",attrs:{slot:"reference"},on:{click:e.searchDepartment},slot:"reference"},[e._v(e._s(e.department)+" ")])],1)],1),l("el-col",{attrs:{span:10}},[e._v(" 入职日期: "),l("el-date-picker",{attrs:{size:"mini",type:"daterange","unlink-panels":"","value-format":"yyyy-MM-dd","is-range":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",placeholder:"入职日期"},model:{value:e.searchValue.beginDateScope,callback:function(t){e.$set(e.searchValue,"beginDateScope",t)},expression:"searchValue.beginDateScope"}})],1),l("el-col",{attrs:{span:5,offset:4}},[l("el-button",{attrs:{size:"mini"},on:{click:function(e){}}},[e._v("取消")]),l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:function(t){return e.initEmps("advanced")}}},[e._v("搜索")])],1)],1)],1)]),l("div",[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%","margin-top":"15px"},attrs:{data:e.emps,stripe:"",border:"","element-loading-text":"正在加载...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),l("el-table-column",{attrs:{prop:"name",label:"姓名",fixed:"",align:"left",width:"90"}}),l("el-table-column",{attrs:{prop:"workID",label:"工号",align:"left",width:"90"}}),l("el-table-column",{attrs:{prop:"gender",label:"性别",width:"85"}}),l("el-table-column",{attrs:{prop:"birthday",align:"left",width:"120",label:"出生日期"}}),l("el-table-column",{attrs:{prop:"idCard",align:"left",width:"190",label:"身份证号码"}}),l("el-table-column",{attrs:{prop:"wedlock",width:"90",label:"婚姻状况"}}),l("el-table-column",{attrs:{prop:"nation.name",width:"50",label:"民族"}}),l("el-table-column",{attrs:{prop:"nativePlace",width:"80",label:"籍贯"}}),l("el-table-column",{attrs:{prop:"politicsStatus.name",width:"120",label:"政治面貌"}}),l("el-table-column",{attrs:{prop:"email",align:"left",width:"190",label:"电子邮件"}}),l("el-table-column",{attrs:{prop:"phone",align:"left",width:"130",label:"电话号码"}}),l("el-table-column",{attrs:{prop:"address",align:"left",width:"300",label:"联系地址"}}),l("el-table-column",{attrs:{prop:"department.name",align:"left",width:"100",label:"所属部门"}}),l("el-table-column",{attrs:{prop:"position.name",width:"100",label:"职位"}}),l("el-table-column",{attrs:{prop:"joblevel.name",width:"130",label:"职称"}}),l("el-table-column",{attrs:{prop:"engageForm",align:"left",width:"100",label:"聘用形式"}}),l("el-table-column",{attrs:{prop:"tiptopDegree",label:"最高学历"}}),l("el-table-column",{attrs:{prop:"school",align:"left",width:"150",label:"毕业院校"}}),l("el-table-column",{attrs:{prop:"specialty",align:"left",width:"150",label:"专业"}}),l("el-table-column",{attrs:{prop:"workState",align:"left",width:"120",label:"在职状态"}}),l("el-table-column",{attrs:{prop:"beginDate",align:"left",width:"120",label:"入职日期"}}),l("el-table-column",{attrs:{prop:"conversionTime",align:"left",width:"120",label:"转正日期"}}),l("el-table-column",{attrs:{prop:"beginContract",align:"left",width:"120",label:"合同起始日期"}}),l("el-table-column",{attrs:{prop:"endContract",align:"left",width:"120",label:"合同截止日期"}}),l("el-table-column",{attrs:{align:"left",width:"100",label:"合同期限"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-tag",[e._v(e._s(t.row.contractTerm))]),e._v(" 年 ")]}}])}),l("el-table-column",{attrs:{fixed:"right",width:"200",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini"},on:{click:function(l){return e.showEditEmpView(t.row)}}},[e._v("编辑 ")]),l("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini",type:"primary"}},[e._v("查看高级资料 ")]),l("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini",type:"danger"},on:{click:function(l){return e.deleteEmp(t.row)}}},[e._v("删除 ")])]}}])})],1),l("div",{staticClass:"page"},[l("el-pagination",{attrs:{background:"",layout:"sizes,prev, pager, next, jumper, ->, total",total:e.total},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)],1),l("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("el-form",{ref:"empForm",attrs:{model:e.emp,rules:e.rules}},[l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"180px"},attrs:{label:"姓名:",prop:"name"}},[l("el-input",{attrs:{size:"mini",placeholder:"请输入姓名",clearable:"","prefix-icon":"el-icon-edit"},model:{value:e.emp.name,callback:function(t){e.$set(e.emp,"name",t)},expression:"emp.name"}})],1)],1),l("el-col",{attrs:{span:5}},[l("el-form-item",{staticStyle:{width:"180px"},attrs:{label:"性别:",prop:"gender"}},[l("el-radio-group",{staticStyle:{"margin-top":"13px"},model:{value:e.emp.gender,callback:function(t){e.$set(e.emp,"gender",t)},expression:"emp.gender"}},[l("el-radio",{attrs:{label:"男"}}),l("el-radio",{attrs:{label:"女"}})],1)],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"250px"},attrs:{label:"出生日期",prop:"birthday"}},[l("el-date-picker",{attrs:{size:"mini","value-format":"yyyy-MM-dd",type:"date",placeholder:"出生日期"},model:{value:e.emp.birthday,callback:function(t){e.$set(e.emp,"birthday",t)},expression:"emp.birthday"}})],1)],1),l("el-col",{attrs:{span:7}},[l("el-form-item",{staticStyle:{width:"240px"},attrs:{label:"政治面貌",prop:"politicId"}},[l("el-select",{attrs:{size:"mini",placeholder:"政治面貌"},model:{value:e.emp.politicId,callback:function(t){e.$set(e.emp,"politicId",t)},expression:"emp.politicId"}},e._l(e.politicsStatus,(function(e,t){return l("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"180px"},attrs:{label:"民族:",prop:"nationId"}},[l("el-select",{attrs:{size:"mini",placeholder:"民族"},model:{value:e.emp.nationId,callback:function(t){e.$set(e.emp,"nationId",t)},expression:"emp.nationId"}},e._l(e.nation,(function(e,t){return l("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)],1),l("el-col",{attrs:{span:5}},[l("el-form-item",{staticStyle:{width:"180px"},attrs:{label:"籍贯:",prop:"nativePlace"}},[l("el-input",{attrs:{"prefix-icon":"el-icon-edit",size:"mini",placeholder:"籍贯"},model:{value:e.emp.nativePlace,callback:function(t){e.$set(e.emp,"nativePlace",t)},expression:"emp.nativePlace"}})],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"250px"},attrs:{label:"电子邮箱",prop:"email"}},[l("el-input",{attrs:{"prefix-icon":"el-icon-message",size:"mini",placeholder:"请输入邮箱"},model:{value:e.emp.email,callback:function(t){e.$set(e.emp,"email",t)},expression:"emp.email"}})],1)],1),l("el-col",{attrs:{span:7}},[l("el-form-item",{staticStyle:{width:"240px"},attrs:{label:"联系地址",prop:"address"}},[l("el-input",{attrs:{size:"mini","prefix-icon":"el-icon-location-outline",placeholder:"请输入联系地址"},model:{value:e.emp.address,callback:function(t){e.$set(e.emp,"address",t)},expression:"emp.address"}})],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"180px"},attrs:{label:"职位:",prop:"posId"}},[l("el-select",{attrs:{size:"mini",placeholder:"职位"},model:{value:e.emp.posId,callback:function(t){e.$set(e.emp,"posId",t)},expression:"emp.posId"}},e._l(e.position,(function(e,t){return l("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)],1),l("el-col",{attrs:{span:5}},[l("el-form-item",{staticStyle:{width:"180px"},attrs:{label:"职称:",prop:"jobLevelId"}},[l("el-select",{attrs:{size:"mini",placeholder:"职称"},model:{value:e.emp.jobLevelId,callback:function(t){e.$set(e.emp,"jobLevelId",t)},expression:"emp.jobLevelId"}},e._l(e.joblevel,(function(e,t){return l("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"250px"},attrs:{label:"所属部门",prop:"departmentId"}},[l("el-popover",{attrs:{placement:"right",title:"请选择部门",width:"200",trigger:"manual"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[l("el-tree",{attrs:{data:e.allDep,props:e.defaultProps,"default-expand-all":""},on:{"node-click":e.handleNodeClick}}),l("div",{staticClass:"department",attrs:{slot:"reference"},on:{click:e.showDepartment},slot:"reference"},[e._v(e._s(e.department)+" ")])],1)],1)],1),l("el-col",{attrs:{span:7}},[l("el-form-item",{staticStyle:{width:"240px"},attrs:{label:"电话号码",prop:"phone"}},[l("el-input",{attrs:{"prefix-icon":"el-icon-phone",size:"mini",placeholder:"请输入电话号码"},model:{value:e.emp.phone,callback:function(t){e.$set(e.emp,"phone",t)},expression:"emp.phone"}})],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"180px"},attrs:{label:"工号:",prop:"workID"}},[l("el-input",{attrs:{disabled:"","prefix-icon":"el-icon-edit",placeholder:"工号",clearable:"",size:"mini"},model:{value:e.emp.workID,callback:function(t){e.$set(e.emp,"workID",t)},expression:"emp.workID"}})],1)],1),l("el-col",{attrs:{span:5}},[l("el-form-item",{staticStyle:{width:"180px"},attrs:{label:"学历:",prop:"tiptopDegree"}},[l("el-select",{attrs:{size:"mini",placeholder:"学历"},model:{value:e.emp.tiptopDegree,callback:function(t){e.$set(e.emp,"tiptopDegree",t)},expression:"emp.tiptopDegree"}},e._l(e.tiptopDegrees,(function(e){return l("el-option",{key:e.name,attrs:{label:e,value:e}})})),1)],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"250px"},attrs:{label:"毕业院校",prop:"school"}},[l("el-input",{attrs:{"prefix-icon":"el-icon-edit",size:"mini",placeholder:"毕业院校"},model:{value:e.emp.school,callback:function(t){e.$set(e.emp,"school",t)},expression:"emp.school"}})],1)],1),l("el-col",{attrs:{span:7}},[l("el-form-item",{staticStyle:{width:"240px"},attrs:{label:"专业名称",prop:"specialty"}},[l("el-input",{attrs:{"prefix-icon":"el-icon-edit",size:"mini",placeholder:"专业名称"},model:{value:e.emp.specialty,callback:function(t){e.$set(e.emp,"specialty",t)},expression:"emp.specialty"}})],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"200px"},attrs:{label:"入职日期:",prop:"beginDate"}},[l("el-date-picker",{attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"入职日期"},model:{value:e.emp.beginDate,callback:function(t){e.$set(e.emp,"beginDate",t)},expression:"emp.beginDate"}})],1)],1),l("el-col",{attrs:{span:5}},[l("el-form-item",{staticStyle:{width:"200px"},attrs:{label:"转正日期:",prop:"conversionTime"}},[l("el-date-picker",{attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"转正日期"},model:{value:e.emp.conversionTime,callback:function(t){e.$set(e.emp,"conversionTime",t)},expression:"emp.conversionTime"}})],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"250px"},attrs:{label:"合同起始日期",prop:"beginContract"}},[l("el-date-picker",{attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"合同起始日期"},model:{value:e.emp.beginContract,callback:function(t){e.$set(e.emp,"beginContract",t)},expression:"emp.beginContract"}})],1)],1),l("el-col",{attrs:{span:7}},[l("el-form-item",{staticStyle:{width:"240px"},attrs:{label:"合同截止日期",prop:"endContract"}},[l("el-date-picker",{attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd",placeholder:"合同截止日期"},model:{value:e.emp.endContract,callback:function(t){e.$set(e.emp,"endContract",t)},expression:"emp.endContract"}})],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:8}},[l("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"身份证号码:",prop:"idCard"}},[l("el-input",{attrs:{placeholder:"身份证号码",size:"mini",clearable:""},model:{value:e.emp.idCard,callback:function(t){e.$set(e.emp,"idCard",t)},expression:"emp.idCard"}})],1)],1),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"聘用形式:",prop:"engageForm"}},[l("el-radio-group",{staticStyle:{"margin-top":"13px"},model:{value:e.emp.engageForm,callback:function(t){e.$set(e.emp,"engageForm",t)},expression:"emp.engageForm"}},[l("el-radio",{attrs:{label:"劳动合同"}},[e._v("劳动合同")]),l("el-radio",{attrs:{label:"劳务合同"}},[e._v("劳务合同")])],1)],1)],1),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"婚姻状况",prop:"wedlock"}},[l("el-radio-group",{staticStyle:{"margin-top":"13px"},model:{value:e.emp.wedlock,callback:function(t){e.$set(e.emp,"wedlock",t)},expression:"emp.wedlock"}},[l("el-radio",{attrs:{label:"已婚"}},[e._v("已婚")]),l("el-radio",{attrs:{label:"未婚"}},[e._v("未婚")]),l("el-radio",{attrs:{label:"离异"}},[e._v("离异")])],1)],1)],1)],1)],1),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1)],1)},i=[],s=(l("b0c0"),{name:"EmpBasic",data:function(){return{searchValue:{politicId:"",nationId:"",posId:"",jobLevelId:"",engageForm:"",beginDateScope:"",departmentId:""},showSearchList:!1,headers:{Authorization:window.sessionStorage.getItem("tokenStr")},importDisabled:!1,importTitle:"导入数据",importIcon:"el-icon-upload2",title:"",emps:[],loading:!1,total:0,currentPage:0,size:10,empName:"",dialogVisible:!1,emp:{name:"",gender:"",birthday:"",idCard:"",wedlock:"",nationId:null,nativePlace:"",politicId:null,email:"",phone:"",address:"",departmentId:null,jobLevelId:null,posId:null,engageForm:"",tiptopDegree:"",specialty:"",school:"",beginDate:"",workID:"",contractTerm:null,conversionTime:"",notWorkDate:"",beginContract:"",endContract:"",workAge:null,salaryId:null},politicsStatus:[],nation:[],position:[],tiptopDegrees:["本科","大专","硕士","博士","高中","初中","小学","其他"],joblevel:[],visible:!1,visible2:!1,defaultProps:{children:"children",label:"name"},allDep:[],department:"",rules:{name:[{required:!0,message:"请输入员工姓名",trigger:"blur"}],gender:[{required:!0,message:"请输入性别",trigger:"blur"}],birthday:[{required:!0,message:"请输入出生日期",trigger:"blur"}],idCard:[{required:!0,message:"请输入身份证号码",trigger:"blur"},{pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,message:"身份证号码格式不正确",trigger:"blur"}],wedlock:[{required:!0,message:"请输入婚姻状况",trigger:"blur"}],nationId:[{required:!0,message:"请输入民族",trigger:"blur"}],nativePlace:[{required:!0,message:"请输入籍贯",trigger:"blur"}],politicId:[{required:!0,message:"请输入政治面貌",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],phone:[{required:!0,message:"请输入电话号码",trigger:"blur"}],address:[{required:!0,message:"请输入员工地址",trigger:"blur"}],departmentId:[{required:!0,message:"请输入部门名称",trigger:"blur"}],jobLevelId:[{required:!0,message:"请输入职称",trigger:"blur"}],posId:[{required:!0,message:"请输入职位",trigger:"blur"}],engageForm:[{required:!0,message:"请输入聘用形式",trigger:"blur"}],tiptopDegree:[{required:!0,message:"请输入学历",trigger:"blur"}],specialty:[{required:!0,message:"请输入专业",trigger:"blur"}],school:[{required:!0,message:"请输入毕业院校",trigger:"blur"}],beginDate:[{required:!0,message:"请输入入职日期",trigger:"blur"}],workState:[{required:!0,message:"请输入工作状态",trigger:"blur"}],workID:[{required:!0,message:"请输入工号",trigger:"blur"}],contractTerm:[{required:!0,message:"请输入合同期限",trigger:"blur"}],conversionTime:[{required:!0,message:"请输入转正日期",trigger:"blur"}],notWorkDate:[{required:!0,message:"请输入离职日期",trigger:"blur"}],beginContract:[{required:!0,message:"请输入合同起始日期",trigger:"blur"}],endContract:[{required:!0,message:"请输入合同结束日期",trigger:"blur"}],workAge:[{required:!0,message:"请输入工龄",trigger:"blur"}]}}},mounted:function(){this.initEmps(),this.initData(),this.initPosition()},methods:{showSearch:function(){var e=this;this.getRequest("/system/basic/employee/?searchValue="+this.searchValue).then((function(t){t&&e.initEmps()}))},onSuccess:function(){this.importTitle="导入数据",this.importIcon="el-icon-upload2",this.importDisabled=!1,this.initEmps()},onError:function(){this.importTitle="导入数据",this.importIcon="el-icon-upload2",this.importDisabled=!1},beforeUpload:function(){this.importTitle="正在上传",this.importIcon="el-icon-loading",this.importDisabled=!0},exportUser:function(){this.downloadRequest("/system/basic/employee/export")},showEditEmpView:function(e){this.title="编辑员工",this.emp=e,this.department=e.department.name,this.dialogVisible=!0},deleteEmp:function(e){var t=this;this.$confirm("此操作将永久删除 "+e.name+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteRequest("/system/basic/employee/"+e.id).then((function(e){e&&t.initEmps()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},addUser:function(){var e=this;this.emp.id?this.$refs["empForm"].validate((function(t){t&&e.putRequest("/system/basic/employee/",e.emp).then((function(t){t&&(e.dialogVisible=!1,e.initEmps())}))})):this.$refs["empForm"].validate((function(t){t&&e.postRequest("/system/basic/employee/",e.emp).then((function(t){t&&(e.dialogVisible=!1,e.initEmps())}))}))},searchHandleNodeClick:function(e){this.searchValue.departmentId=e.id,this.department=e.name,this.visible2=!this.visible2},handleNodeClick:function(e){this.emp.departmentId=e.id,this.department=e.name,this.visible=!this.visible},searchDepartment:function(){this.visible2=!this.visible2,this.getDepartments()},showDepartment:function(){this.visible=!this.visible,this.getDepartments()},getDepartments:function(){var e=this;this.getRequest("/system/basic/employee/deps").then((function(t){t&&(e.allDep=t)}))},getWorkID:function(){var e=this;this.getRequest("/system/basic/employee/maxWorkID").then((function(t){t&&(e.emp.workID=t.obj)}))},initPosition:function(){var e=this;this.getRequest("/system/basic/employee/position").then((function(t){t&&(e.position=t)}))},initData:function(){var e=this;window.sessionStorage.getItem("nation")?this.nation=JSON.parse(window.sessionStorage.getItem("nation")):this.getRequest("/system/basic/employee/nation").then((function(t){t&&(e.nation=t,window.sessionStorage.setItem("nation",JSON.stringify(t)))})),window.sessionStorage.getItem("politicsStatus")?this.politicsStatus=JSON.parse(window.sessionStorage.getItem("politicsStatus")):this.getRequest("/system/basic/employee/politicsStatus").then((function(t){t&&(e.politicsStatus=t,window.sessionStorage.setItem("politicsStatus",JSON.stringify(t)))})),window.sessionStorage.getItem("joblevel")?this.joblevel=JSON.parse(window.sessionStorage.getItem("joblevel")):this.getRequest("/system/basic/employee/joblevel").then((function(t){t&&(e.joblevel=t,window.sessionStorage.setItem("joblevel",JSON.stringify(t)))}))},showUser:function(){this.title="添加员工",this.dialogVisible=!0,this.initPosition(),this.getWorkID()},clear:function(){this.initEmps()},search:function(){this.initEmps()},sizeChange:function(e){this.size=e,this.initEmps()},currentChange:function(e){this.currentPage=e,this.initEmps()},initEmps:function(e){var t=this;this.loading=!0;var l="/system/basic/employee/?currentPage="+this.currentPage+"&size="+this.size;e&&"advanced"==e&&(l+="&politicId="+this.searchValue.politicId),this.searchValue.nationId&&(l+="&nationId="+this.searchValue.nationId),this.searchValue.posId&&(l+="&posId="+this.searchValue.posId),this.searchValue.jobLevelId&&(l+="&jobLevelId="+this.searchValue.jobLevelId),this.searchValue.engageForm&&(l+="&engageForm="+this.searchValue.engageForm),this.searchValue.departmentId&&(l+="&departmentId="+this.searchValue.departmentId),this.searchValue.beginDateScope?l+="&beginDateScope="+this.searchValue.beginDateScope:l+="&name="+this.empName,this.getRequest(l).then((function(e){t.loading=!1,e&&(t.emps=e.data,t.total=e.total)}))}}}),r=s,o=(l("ec21"),l("2877")),n=Object(o["a"])(r,a,i,!1,null,null,null);t["default"]=n.exports},8759:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e._v("高级资料")])},i=[],s={name:"EmpAdv",data:function(){return{}},methods:{}},r=s,o=l("2877"),n=Object(o["a"])(r,a,i,!1,null,"75bd40ce",null);t["default"]=n.exports},c6ed:function(e,t,l){},ec21:function(e,t,l){"use strict";l("c6ed")}}]);
//# sourceMappingURL=chunk-32db800e.6fb30aec.js.map