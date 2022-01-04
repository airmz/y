<!--
 * @Author: airmz
 * @Date: 2021-10-27 21:39:04
 * @LastEditTime: 2021-11-17 20:33:36
 * @FilePath: \yeb\src\components\sys\basic\PermissMana.vue
-->
<template>
    <div>
        <div class="perInput">
            <el-input v-model="role.name" placeholder="请输入职位英文名称" size="medium" clearable>
                <template slot="prepend">Role_</template>
            </el-input>
            <el-input v-model="role.nameZh" placeholder="请输入职位名称" size="medium" clearable></el-input>
            <el-button type="primary" size="medium" @click="addRole" icon="el-icon-plus">增加职位</el-button>
        </div>
        <div class="roles">
            <el-collapse   v-model="activeItem" accordion @change="change">
                <el-collapse-item ref="card" :title="r.nameZh" :name="r.id" v-for="(r,index) in roles" :key="index">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>可操作权限</span>
                            <el-button style="float: right; padding: 3px 0;color: red;" type="text"
                                icon="el-icon-delete" @click="deleteRole(r)"></el-button>
                        </div>
                        <el-tree node-key="id" ref="tree" :data="allMenus" :props="defaultProps"
                            :default-checked-keys="selectMenus" show-checkbox :filter-node-method="filterNode">
                        </el-tree>
                        <div class="putBtn">
                            <el-button size="mini" @click="cancelUpdate">取消修改</el-button>
                            <el-button type="primary" size="mini" @click="doUpdate(r.id,index)">确认修改</el-button>
                        </div>
                    </el-card>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PermissMana',
        data() {
            return {
                filterText: '',
                role: {
                    name: '',
                    nameZh: ''
                },
                roles: [],
                allMenus: [],
                defaultProps: {
                    children: "children",
                    label: 'name'
                },
                selectMenus: [],
                activeItem: ''
            }
        },
        mounted() {
            this.initRoles();
        },
        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.nameZh.indexOf(value) !== -1;
            },
            deleteRole(role) {
                this.$confirm('此操作将永久删除' + role.nameZh + ' 职位, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.deleteRequest(' /system/basic/permission/role/' + role.id)
                        .then(res => {
                            if (res) {
                                this.initRoles();
                            }
                        })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            addRole() {
                if (this.role.name && this.role.nameZh) {
                    this.postRequest('/system/basic/permission/', this.role)
                        .then(res => {
                            if (res) {
                                this.role.name = '';
                                this.role.nameZh = '';
                                this.initRoles();
                            }
                        })
                } else {
                    this.$message.error('职位信息不能为空！')
                }
            },
            cancelUpdate() {
                this.activeItem = -1;
            },
            doUpdate(rid, index) {
                let tree = this.$refs.tree[index];
                let selectKeys = tree.getCheckedKeys(true);
                let url = '/system/basic/permission/?rid=' + rid;
                selectKeys.forEach(key => {
                    url += '&mids=' + key;
                })
                this.putRequest(url)
                    .then(res => {
                        if (res) {
                            this.initRoles();
                            this.activeItem = -1
                        }
                    })
            },
            change(rid) {
                if (rid) {
                    this.initMenus();
                    this.initselectMenus(rid);
                }
            },
            initselectMenus(rid) {
                this.getRequest('/system/basic/permission/mid/' + rid)
                    .then(res => {
                        this.selectMenus = res
                    })
            },
            initMenus() {
                this.getRequest('/system/basic/permission/menus')
                    .then(res => {
                        if (res) {
                            // console.log(res)
                            this.allMenus = res
                        }
                    })
            },
            initRoles() {
                this.getRequest('/system/basic/permission/')
                    .then(res => {
                        if (res) {
                            this.roles = res
                        }
                    })
            },
        },
    }
</script>
<style>
    .perInput {
        display: flex;
        justify-content: flex-start;
    }

    .perInput .el-input {
        width: 300px;
        margin-right: 10px;
    }

    .roles {
        width: 740px;
        margin-top: 15px;
    }

    .putBtn {
        display: flex;
        justify-content: flex-end;
    }
</style>