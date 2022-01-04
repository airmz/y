<!--
 * @Author: airmz
 * @Date: 2021-10-09 15:08:41
 * @LastEditTime: 2021-10-29 20:42:40
 * @FilePath: \yeb\src\views\Home.vue
-->
<template>
    <div>
        <el-container>
            <el-header class="homeHeader">
                <div class="homeHeader_title">
                    云E办
                </div>
                <el-dropdown trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{user.name}}
                        <i> <img :src=user.userFace> </i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="userinfo">个人中心</el-dropdown-item>
                        <el-dropdown-item command="setting">设置</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu router unique-opened>
                        <el-submenu :index="index+''" v-for="(item,index) in routes" :key="index" v-if="!item.hidden">
                            <template slot="title">
                                <i style="color: #409eff;margin-right: 5px" :class="item.iconCls"></i>
                                <span>{{item.name}}</span>
                            </template>
                            <el-menu-item :index="children.path" v-for="(children,indexi) in item.children"
                                :key="indexi">
                                {{children.name}}
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <div>
                        <el-breadcrumb v-if="this.$router.currentRoute.path!='/home'" separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item>{{this.$router.currentRoute.name}} </el-breadcrumb-item>
                        </el-breadcrumb>
                        <div class="homeWelcome" v-if="this.$router.currentRoute.path=='/home'">
                            欢迎来到云E办系统！
                        </div>
                        <router-view class="homeRouterview"></router-view>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    export default {
        name: 'Home',
        data() {
            return {
                user: JSON.parse(window.sessionStorage.getItem('user'))
            }
        },
        computed: {
            routes() {
                return this.$store.state.routes;

            },
        },
        methods: {
            handleCommand(command) {
                if (command == 'logout') {
                    this.$confirm('此操作将退出登录, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.postRequest('/logout')
                        window.sessionStorage.removeItem('tokenStr');
                        window.sessionStorage.removeItem('user');
                        this.$store.commit('initRouter', []);
                        this.$router.replace('/')
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消'
                        });
                    });
                }
            }
        },

    }
</script>
<style scoped>
    .homeHeader {
        background: rgb(7, 139, 247);
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 阿里巴巴普惠体-M;
    }

    .homeHeader_title {
        font-size: 20px;
        color: #ffffff;
    }
.homeWelcome{
    text-align: center;
    font-size: 30px;
    font-family: 阿里巴巴普惠体-M;
    color: rgb(7, 139, 247);
    padding-top: 50px;
}
.homeRouterview{
    margin-top: 15px;
}
    .el-dropdown-link {
        cursor: pointer;
        color: #ffffff;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }

    .el-dropdown-link img {
        width: 45px;
        height: 45px;
        margin-left: 10px;
    }
</style>