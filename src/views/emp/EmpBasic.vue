<!--
 * @Author: airmz
 * @Date: 2021-10-13 15:41:20
 * @LastEditTime: 2021-12-16 21:40:28
 * @FilePath: \yeb\src\views\emp\EmpBasic.vue
-->
<template>
  <div>
    <div>
      <div class="btn">
        <div>
          <el-input style="width: 300px; margin-right: 10px" clearable @clear="clear" v-model="empName"
            placeholder="请输入姓名进行搜索"></el-input>
          <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
          <el-button type="primary" @click="showSearchList=!showSearchList">
            <i :class="showSearchList?'fa fa-angle-double-up':'fa fa-angle-double-down'" aria-hidden="true"></i>
            高级搜索</el-button>
        </div>
        <div>
          <el-upload class="upload-demo" action="/system/basic/employee/import" :headers='headers' :show-file-list=false
            :before-upload='beforeUpload' :on-success='onSuccess' :on-error="onError" :disabled='importDisabled'>
            <el-button type="success" :disabled='importDisabled' :icon="importIcon"> {{importTitle}} </el-button>
          </el-upload>

          <el-button type="success" @click="exportUser" icon="el-icon-download">导出数据</el-button>
          <el-button type="primary" icon="el-icon-plus" @click="showUser">添加用户</el-button>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="border" v-show="showSearchList">
        <el-row>
          <el-col :span="5" :offset="0">
            政治面貌:
            <el-select v-model="searchValue.politicId" size="mini" placeholder="政治面貌">
              <el-option v-for="(politicsStatus,index) in politicsStatus" :key="index" :label="politicsStatus.name"
                :value="politicsStatus.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4" :offset="0">
            民族:
            <el-select v-model="searchValue.nationId" size="mini" placeholder="民族">
              <el-option v-for="(nation,index) in nation" :key="index" :label="nation.name" :value="nation.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4" :offset="0">
            职位:
            <el-select v-model="searchValue.posId" size="mini" placeholder="职位">
              <el-option v-for="(item,index) in position" :key="index" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4" :offset="0">
            职称:
            <el-select v-model="searchValue.jobLevelId" size="mini" placeholder="职称">
              <el-option v-for="(joblevel,index) in joblevel" :key="index" :label="joblevel.name" :value="joblevel.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="7" :offset="0">
            聘用形式:
            <el-radio-group v-model="searchValue.engageForm">
              <el-radio label="劳动合同">劳动合同</el-radio>
              <el-radio label="劳务合同">劳务合同</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
        <el-row style="margin-top: 10px;">
          <el-col :span="5" :offset="0">
            所属部门:
            <el-popover placement="right" title="请选择部门" width="200" trigger="manual" v-model="visible2">
              <el-tree :data="allDep" :props="defaultProps" default-expand-all @node-click="searchHandleNodeClick">
              </el-tree>
              <div slot="reference" @click="searchDepartment" class="departments">{{department}} </div>
            </el-popover>
          </el-col>
          <el-col :span="10">
            入职日期:
            <el-date-picker size="mini" v-model="searchValue.beginDateScope" type="daterange" unlink-panels
              value-format="yyyy-MM-dd" is-range range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
              placeholder="入职日期">
            </el-date-picker>
          </el-col>
          <el-col :span="5" :offset="4">
            <el-button size="mini" @click="">取消</el-button>
            <el-button type="primary" size="mini" icon="el-icon-search" @click="initEmps('advanced')">搜索</el-button>

          </el-col>

        </el-row>


      </div>
    </transition>
    <div>
      <el-table :data="emps" stripe border v-loading="loading" element-loading-text="正在加载..."
        element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)"
        style="width: 100%; margin-top: 15px">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" label="姓名" fixed align="left" width="90">
        </el-table-column>
        <el-table-column prop="workID" label="工号" align="left" width="90">
        </el-table-column>
        <el-table-column prop="gender" label="性别" width="85">
        </el-table-column>
        <el-table-column prop="birthday" align="left" width="120" label="出生日期">
        </el-table-column>
        <el-table-column prop="idCard" align="left" width="190" label="身份证号码">
        </el-table-column>
        <el-table-column prop="wedlock" width="90" label="婚姻状况">
        </el-table-column>
        <el-table-column prop="nation.name" width="50" label="民族">
        </el-table-column>
        <el-table-column prop="nativePlace" width="80" label="籍贯">
        </el-table-column>
        <el-table-column prop="politicsStatus.name" width="120" label="政治面貌">
        </el-table-column>
        <el-table-column prop="email" align="left" width="190" label="电子邮件">
        </el-table-column>
        <el-table-column prop="phone" align="left" width="130" label="电话号码">
        </el-table-column>
        <el-table-column prop="address" align="left" width="300" label="联系地址">
        </el-table-column>
        <el-table-column prop="department.name" align="left" width="100" label="所属部门">
        </el-table-column>
        <el-table-column prop="position.name" width="100" label="职位">
        </el-table-column>
        <el-table-column prop="joblevel.name" width="130" label="职称">
        </el-table-column>
        <el-table-column prop="engageForm" align="left" width="100" label="聘用形式">
        </el-table-column>
        <el-table-column prop="tiptopDegree" label="最高学历">
        </el-table-column>
        <el-table-column prop="school" align="left" width="150" label="毕业院校">
        </el-table-column>
        <el-table-column prop="specialty" align="left" width="150" label="专业">
        </el-table-column>
        <el-table-column prop="workState" align="left" width="120" label="在职状态">
        </el-table-column>
        <el-table-column prop="beginDate" align="left" width="120" label="入职日期">
        </el-table-column>
        <el-table-column prop="conversionTime" align="left" width="120" label="转正日期">
        </el-table-column>
        <el-table-column prop="beginContract" align="left" width="120" label="合同起始日期">
        </el-table-column>
        <el-table-column prop="endContract" align="left" width="120" label="合同截止日期">
        </el-table-column>
        <el-table-column align="left" width="100" label="合同期限">
          <template slot-scope="scope">
            <el-tag>{{ scope.row.contractTerm }}</el-tag>
            年
          </template>
        </el-table-column>
        <el-table-column fixed="right" width="200" label="操作">
          <template slot-scope="scope">
            <el-button style="padding: 3px" size="mini" @click="showEditEmpView(scope.row)">编辑
            </el-button>
            <el-button style="padding: 3px" size="mini" type="primary">查看高级资料
            </el-button>
            <el-button style="padding: 3px" size="mini" type="danger" @click="deleteEmp(scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="page">
        <el-pagination @current-change="currentChange" @size-change="sizeChange" background
          layout="sizes,prev, pager, next, jumper, ->, total" :total="total">
        </el-pagination>
      </div>
    </div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="80%">
      <el-form ref="empForm" :model="emp" :rules="rules">
        <el-row>
          <el-col :span="6">
            <el-form-item label="姓名:" prop="name" style="width:180px">
              <el-input v-model="emp.name" size="mini" placeholder="请输入姓名" clearable prefix-icon="el-icon-edit">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="性别:" prop="gender" style="width:180px">
              <el-radio-group v-model="emp.gender" style="margin-top:13px">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="出生日期" prop="birthday" style="width:250px">
              <el-date-picker v-model="emp.birthday" size="mini" value-format="yyyy-MM-dd" type="date"
                placeholder="出生日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="政治面貌" prop="politicId" style="width:240px">
              <el-select v-model="emp.politicId" size="mini" placeholder="政治面貌">
                <el-option v-for="(politicsStatus,index) in politicsStatus" :key="index" :label="politicsStatus.name"
                  :value="politicsStatus.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="民族:" prop="nationId" style="width:180px">
              <el-select v-model="emp.nationId" size="mini" placeholder="民族">
                <el-option v-for="(nation,index) in nation" :key="index" :label="nation.name" :value="nation.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="籍贯:" prop="nativePlace" style="width:180px">
              <el-input v-model="emp.nativePlace" prefix-icon="el-icon-edit" size="mini" placeholder="籍贯"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="电子邮箱" prop="email" style="width:250px">
              <el-input v-model="emp.email" prefix-icon="el-icon-message" size="mini" placeholder="请输入邮箱"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="联系地址" prop="address" style="width:240px">
              <el-input v-model="emp.address" size="mini" prefix-icon="el-icon-location-outline" placeholder="请输入联系地址">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="职位:" prop="posId" style="width:180px">
              <el-select v-model="emp.posId" size="mini" placeholder="职位">
                <el-option v-for="(item,index) in position" :key="index" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="职称:" prop="jobLevelId" style="width:180px">
              <el-select v-model="emp.jobLevelId" size="mini" placeholder="职称">
                <el-option v-for="(joblevel,index) in joblevel" :key="index" :label="joblevel.name"
                  :value="joblevel.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="所属部门" prop="departmentId" style="width:250px">
              <el-popover placement="right" title="请选择部门" width="200" trigger="manual" v-model="visible">
                <el-tree :data="allDep" :props="defaultProps" default-expand-all @node-click="handleNodeClick">
                </el-tree>
                <div slot="reference" @click="showDepartment" class="department">{{department}} </div>
              </el-popover>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="电话号码" prop="phone" style="width:240px">
              <el-input v-model="emp.phone" prefix-icon="el-icon-phone" size="mini" placeholder="请输入电话号码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="工号:" prop="workID" style="width:180px">
              <el-input v-model="emp.workID" disabled prefix-icon="el-icon-edit" placeholder="工号" clearable size="mini">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="学历:" prop="tiptopDegree" style="width:180px">
              <el-select v-model="emp.tiptopDegree" size="mini" placeholder="学历">
                <el-option v-for="item in tiptopDegrees" :key="item.name" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="毕业院校" prop="school" style="width:250px">
              <el-input v-model="emp.school" prefix-icon="el-icon-edit" size="mini" placeholder="毕业院校"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="专业名称" prop="specialty" style="width:240px">
              <el-input v-model="emp.specialty" prefix-icon="el-icon-edit" size="mini" placeholder="专业名称"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="入职日期:" prop="beginDate" style="width:200px">
              <el-date-picker size="mini" v-model="emp.beginDate" type="date" value-format="yyyy-MM-dd"
                placeholder="入职日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="转正日期:" prop="conversionTime" style="width:200px">
              <el-date-picker v-model="emp.conversionTime" size="mini" type="date" value-format="yyyy-MM-dd"
                placeholder="转正日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同起始日期" prop="beginContract" style="width:250px">
              <el-date-picker v-model="emp.beginContract" size="mini" type="date" value-format="yyyy-MM-dd"
                placeholder="合同起始日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="合同截止日期" prop="endContract" style="width:240px">
              <el-date-picker v-model="emp.endContract" size="mini" type="date" value-format="yyyy-MM-dd"
                placeholder="合同截止日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="身份证号码:" prop="idCard" style="width:300px">
              <el-input v-model="emp.idCard" placeholder="身份证号码" size="mini" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="聘用形式:" prop="engageForm">
              <el-radio-group v-model="emp.engageForm" style="margin-top:13px">
                <el-radio label="劳动合同">劳动合同</el-radio>
                <el-radio label="劳务合同">劳务合同</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="婚姻状况" prop="wedlock">
              <el-radio-group v-model="emp.wedlock" style="margin-top:13px">
                <el-radio label="已婚">已婚</el-radio>
                <el-radio label="未婚">未婚</el-radio>
                <el-radio label="离异">离异</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: "EmpBasic",
    data() {
      return {
        searchValue: {
          politicId: '',
          nationId: '',
          posId: '',
          jobLevelId: '',
          engageForm: '',
          beginDateScope: '',
          departmentId: ''
        },
        showSearchList: false,
        headers: {
          Authorization: window.sessionStorage.getItem('tokenStr')
        },
        importDisabled: false,
        importTitle: '导入数据',
        importIcon: 'el-icon-upload2',
        title: '',
        emps: [],
        loading: false,
        total: 0,
        currentPage: 0,
        size: 10,
        empName: "",
        dialogVisible: false,
        emp: {
          name: "",
          gender: "",
          birthday: "",
          idCard: "",
          wedlock: "",
          nationId: null,
          nativePlace: "",
          politicId: null,
          email: "",
          phone: "",
          address: "",
          departmentId: null,
          jobLevelId: null,
          posId: null,
          engageForm: "",
          tiptopDegree: "",
          specialty: "",
          school: "",
          beginDate: "",
          workID: "",
          contractTerm: null,
          conversionTime: "",
          notWorkDate: "",
          beginContract: "",
          endContract: "",
          workAge: null,
          salaryId: null

        },
        politicsStatus: [],
        nation: [],
        position: [],
        tiptopDegrees: ['本科', '大专', '硕士', '博士', '高中', '初中', '小学', '其他'],
        joblevel: [],
        visible: false,
        visible2: false,
        defaultProps: {
          children: 'children',
          label: "name"
        },
        allDep: [],
        department: '',
        rules: {
          name: [{
            required: true,
            message: '请输入员工姓名',
            trigger: 'blur'
          }],
          gender: [{
            required: true,
            message: '请输入性别',
            trigger: 'blur'
          }],
          birthday: [{
            required: true,
            message: '请输入出生日期',
            trigger: 'blur'
          }],
          idCard: [{
            required: true,
            message: '请输入身份证号码',
            trigger: 'blur'
          }, {
            pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
            message: '身份证号码格式不正确',
            trigger: 'blur'
          }],
          wedlock: [{
            required: true,
            message: '请输入婚姻状况',
            trigger: 'blur'
          }],
          nationId: [{
            required: true,
            message: '请输入民族',
            trigger: 'blur'
          }],
          nativePlace: [{
            required: true,
            message: '请输入籍贯',
            trigger: 'blur'
          }],
          politicId: [{
            required: true,
            message: '请输入政治面貌',
            trigger: 'blur'
          }],
          email: [{
            required: true,
            message: '请输入邮箱地址',
            trigger: 'blur'
          }, {
            type: 'email',
            message: '邮箱格式不正确',
            trigger: 'blur'
          }],
          phone: [{
            required: true,
            message: '请输入电话号码',
            trigger: 'blur'
          }],
          address: [{
            required: true,
            message: '请输入员工地址',
            trigger: 'blur'
          }],
          departmentId: [{
            required: true,
            message: '请输入部门名称',
            trigger: 'blur'
          }],
          jobLevelId: [{
            required: true,
            message: '请输入职称',
            trigger: 'blur'
          }],
          posId: [{
            required: true,
            message: '请输入职位',
            trigger: 'blur'
          }],
          engageForm: [{
            required: true,
            message: '请输入聘用形式',
            trigger: 'blur'
          }],
          tiptopDegree: [{
            required: true,
            message: '请输入学历',
            trigger: 'blur'
          }],
          specialty: [{
            required: true,
            message: '请输入专业',
            trigger: 'blur'
          }],
          school: [{
            required: true,
            message: '请输入毕业院校',
            trigger: 'blur'
          }],
          beginDate: [{
            required: true,
            message: '请输入入职日期',
            trigger: 'blur'
          }],
          workState: [{
            required: true,
            message: '请输入工作状态',
            trigger: 'blur'
          }],
          workID: [{
            required: true,
            message: '请输入工号',
            trigger: 'blur'
          }],
          contractTerm: [{
            required: true,
            message: '请输入合同期限',
            trigger: 'blur'
          }],
          conversionTime: [{
            required: true,
            message: '请输入转正日期',
            trigger: 'blur'
          }],
          notWorkDate: [{
            required: true,
            message: '请输入离职日期',
            trigger: 'blur'
          }],
          beginContract: [{
            required: true,
            message: '请输入合同起始日期',
            trigger: 'blur'
          }],
          endContract: [{
            required: true,
            message: '请输入合同结束日期',
            trigger: 'blur'
          }],
          workAge: [{
            required: true,
            message: '请输入工龄',
            trigger: 'blur'
          }],
        }
      };
    },
    mounted() {
      this.initEmps();
      this.initData();
      this.initPosition();
    },
    methods: {
      showSearch() {
        this.getRequest('/system/basic/employee/?searchValue=' + this.searchValue)
          .then(res => {
            if (res) {
              this.initEmps();
            }
          })
      },
      onSuccess() {
        this.importTitle = '导入数据';
        this.importIcon = 'el-icon-upload2';
        this.importDisabled = false;
        this.initEmps();
      },
      onError() {
        this.importTitle = '导入数据';
        this.importIcon = 'el-icon-upload2';
        this.importDisabled = false;
      },
      beforeUpload() {
        this.importTitle = '正在上传';
        this.importIcon = 'el-icon-loading';
        this.importDisabled = true;

      },
      exportUser() {
        this.downloadRequest('/system/basic/employee/export')

      },
      showEditEmpView(data) {
        this.title = '编辑员工';
        this.emp = data;
        this.department = data.department.name;
        this.dialogVisible = true;

      },
      deleteEmp(data) {
        this.$confirm('此操作将永久删除 ' + data.name + ', 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteRequest('/system/basic/employee/' + data.id)
            .then(res => {
              if (res) {
                this.initEmps();
              }
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      addUser() {
        if (this.emp.id) {
          this.$refs['empForm'].validate(valid => {
            if (valid) {
              this.putRequest('/system/basic/employee/', this.emp)
                .then(res => {
                  if (res) {
                    this.dialogVisible = false;
                    this.initEmps();
                  }
                })
            }
          })
        } else {

          this.$refs['empForm'].validate(valid => {
            if (valid) {
              this.postRequest('/system/basic/employee/', this.emp)
                .then(res => {
                  if (res) {
                    this.dialogVisible = false;
                    this.initEmps();
                  }
                })
            }
          })
        }


      },
      searchHandleNodeClick(data) {
        this.searchValue.departmentId = data.id;
        this.department = data.name;
        this.visible2 = !this.visible2;
      },
      handleNodeClick(data) {
        this.emp.departmentId = data.id;
        this.department = data.name;
        this.visible = !this.visible;
      },
      searchDepartment() {
        this.visible2 = !this.visible2;
        this.getDepartments();

      },
      showDepartment() {
        this.visible = !this.visible;
        this.getDepartments();

      },
      getDepartments() {
        this.getRequest('/system/basic/employee/deps')
          .then(res => {
            if (res) {
              this.allDep = res;
            }
          })
      },
      getWorkID() {
        this.getRequest('/system/basic/employee/maxWorkID')
          .then(res => {
            if (res) {
              this.emp.workID = res.obj;
            }
          })
      },
      initPosition() {
        this.getRequest('/system/basic/employee/position')
          .then(res => {
            if (res) {
              this.position = res;
            }
          });
      },
      initData() {
        if (!window.sessionStorage.getItem('nation')) {
          this.getRequest('/system/basic/employee/nation')
            .then(res => {
              if (res) {
                this.nation = res;
                window.sessionStorage.setItem('nation', JSON.stringify(res))
              }
            });
        } else {
          this.nation = JSON.parse(window.sessionStorage.getItem('nation'))
        };
        if (!window.sessionStorage.getItem('politicsStatus')) {
          this.getRequest('/system/basic/employee/politicsStatus')
            .then(res => {
              if (res) {
                this.politicsStatus = res;
                window.sessionStorage.setItem('politicsStatus', JSON.stringify(res))
              }
            });
        } else {
          this.politicsStatus = JSON.parse(window.sessionStorage.getItem('politicsStatus'))
        };
        if (!window.sessionStorage.getItem('joblevel')) {
          this.getRequest('/system/basic/employee/joblevel')
            .then(res => {
              if (res) {
                this.joblevel = res;
                window.sessionStorage.setItem('joblevel', JSON.stringify(res))
              }
            });
        } else {
          this.joblevel = JSON.parse(window.sessionStorage.getItem('joblevel'))
        };
      },
      showUser() {
        this.title = '添加员工';
        this.dialogVisible = true;
        this.initPosition();
        this.getWorkID();
      },
      
      clear() {
        this.initEmps();
      },
      search() {
        this.initEmps();
      },
      sizeChange(size) {
        this.size = size;
        this.initEmps();
      },
      currentChange(currentPage) {
        this.currentPage = currentPage;
        // console.log(123)
        this.initEmps();
      },
      initEmps(type) {
        this.loading = true;
        let url = '/system/basic/employee/?currentPage=' + this.currentPage + "&size=" + this.size;
        if (type && type == 'advanced') {
          url += '&politicId=' + this.searchValue.politicId;
        }
        if (this.searchValue.nationId) {
          url += '&nationId=' + this.searchValue.nationId;
        }
        if (this.searchValue.posId) {
          url += '&posId=' + this.searchValue.posId;
        }
        if (this.searchValue.jobLevelId) {
          url += '&jobLevelId=' + this.searchValue.jobLevelId;
        }
        if (this.searchValue.engageForm) {
          url += '&engageForm=' + this.searchValue.engageForm;
        }
        if (this.searchValue.departmentId) {
          url += '&departmentId=' + this.searchValue.departmentId;
        }
        if (this.searchValue.beginDateScope) {
          url += '&beginDateScope=' + this.searchValue.beginDateScope;
        } else {
          url += '&name=' + this.empName;
        }
        this.getRequest(url)
          .then((res) => {
            this.loading = false;
            if (res) {
              this.emps = res.data;
              this.total = res.total;
            }
          });
      },
    },
  };
</script>
<style>
  .btn {
    display: flex;
    justify-content: space-between;
  }

  .page {
    display: flex;
    justify-content: end;
    margin-top: 15px;
  }

  .upload-demo {
    display: inline-flex;
    margin-right: 10px;
  }

  .border {
    border: solid 1px #078bf7;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px;
  }

  .departments {
    width: 190px;
    height: 28px;
    display: inline-flex;
    cursor: pointer;
    border: solid 1px #dedede;
    border-radius: 4px;
    box-sizing: border-box;
    padding-left: 8px;
    align-items: center;
    font-size: 10px;
    color: #666666;
  }

  .department {
    width: 180px;
    height: 28px;
    display: inline-flex;
    cursor: pointer;
    border: solid 1px #dedede;
    border-radius: 4px;
    margin-top: 8px;
    box-sizing: border-box;
    padding-left: 8px;
    align-items: center;
    font-size: 10px;
    color: #666666;
  }

  .slide-fade-enter-active {
    transition: all .6s ease;
  }

  .slide-fade-leave-active {
    transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-to

  /* .slide-fade-leave-active for below version 2.1.8 */
    {
    transform: translateX(10px);
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .8s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }
</style>