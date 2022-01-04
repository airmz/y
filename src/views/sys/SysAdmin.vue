<!--
 * @Author: airmz
 * @Date: 2021-10-13 16:09:06
 * @LastEditTime: 2021-11-22 21:01:31
 * @FilePath: \yeb\src\views\sys\SysAdmin.vue
-->
<template>
    <div>
        <div class="search">
            <el-input class="elSearch" v-model="keywords" placeholder="通过用户名搜索用户" prefix-icon="el-icon-search"
                size="normal" clearable></el-input>
            <el-button type="primary" size="default" icon="el-icon-search" @click="search">搜索</el-button>
        </div>
        <div class="admin-container">
            <el-card class="admin-card" v-for="(admin,index) in admins" ::key="index">
                <div slot="header" class="clearfix">
                    <span>{{admin.name}}</span>
                    <el-button style="float: right; padding: 3px 0;color:red;" type="text" icon="el-icon-delete">
                    </el-button>
                </div>
                <div>
                    <div class="img-container">
                        <img class="userFace-img" :src="admin.userFace" :alt="admin.name" :title="admin.name">
                    </div>
                </div>
                <div class="userinfo-container">
                    <div>用户名：{{admin.name}} </div>
                    <div>手机号码：{{admin.phone}} </div>
                    <div>电话号码：{{admin.telephone}} </div>
                    <div>联系地址：{{admin.address}} </div>
                    <div>用户状态：
                        <el-switch v-model="admin.enabled" active-color="#13ce66" inactive-color="#ff4949"
                            active-text="启用" inactive-text="禁用" @change="change(admin)">
                        </el-switch>
                    </div>
                    <div>用户角色：
                        <el-tag style="margin-right:3px" type="success" size="small"
                            v-for="(admin,indexj) in admin.roles" :key="indexj">
                            {{admin.nameZh}} </el-tag>
                        <el-popover placement="right" title="用户角色" width="200" trigger="click" @show="showRoles(admin)"
                            @hide="hideRoles(admin)">
                            <el-select v-model="selectRoles" multiple placeholder="请选择">
                                <el-option v-for="(role,index) in roles" :key="index" :label="role.nameZh"
                                    :value="role.id">
                                </el-option>
                            </el-select>
                            <el-button type="text" slot="reference" size="default" @click="" icon="el-icon-more">
                            </el-button>
                        </el-popover>
                    </div>
                    <div>备1注：{{admin.remark}} </div>
                </div>
            </el-card>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'SysAdmin',
        data() {
            return {
                keywords: '',
                admins: [],
                roles: [],
                selectRoles: []

            }
        },
        mounted() {
            this.initAdmins();
        },
        methods: {
            hideRoles(admin) {
                let roles = [];
                Object.assign(roles, admin.roles)
                let flag = false;
                if (roles.length != this.selectRoles.length) {
                    flag = true;
                } else {
                    for (let i = 0; i < roles.length; i++) {
                        let role = roles[i];
                        for (let j = 0; j < this.selectRoles.length; j++) {
                            let sr = this.selectRoles[i];
                            if (role.id == sr) {
                                roles.splice(i, 1);
                                i--;
                                break;
                            }
                        }
                    }
                    if (roles.length != 0) {
                        flag = false;
                        this.initAdmins();
                    }
                }
                if (flag) {
                    let url = '/system/admin/role?adminId=' + admin.id;
                    this.selectRoles.forEach(sr => {
                        url += '&rids=' + sr
                    })
                    this.putRequest(url)
                        .then(res => {
                            if (res) {
                                this.initAdmins();
                            }
                        })
                }
            },
            showRoles(admin) {
                this.initAllRoles();
                let roles = admin.roles;
                this.selectRoles = [];
                roles.forEach(r => {
                    this.selectRoles.push(r.id)
                })
            },
            initAllRoles() {
                this.getRequest('/system/admin/roles')
                    .then(res => {
                        if (res) {
                            this.roles = res;
                        }
                    })
            },
            search() {
                this.initAdmins();
            },
            change(admin) {
                this.putRequest('/system/admin/', admin)
                    .then(res => {
                        if (res) {
                            this.initAdmins();
                        }
                    })
            },
            initAdmins() {
                this.getRequest('/system/admin/?keywords=' + this.keywords)
                    .then(res => {
                        if (res) {
                            this.admins = res;
                        }
                    })
            },
        },
    }
</script>
<style>
    .search {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .elSearch {
        width: 400px;
        margin-right: 10px;
    }

    .admin-card {
        width: 350px;
        margin-top: 10px;
    }

    .admin-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

    }

    .img-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .userFace-img {
        width: 72px;
        height: 72px;
        border-radius: 50%;
    }

    .userinfo-container {
        font-size: 12px;
        color: #109ff1;
    }
</style>