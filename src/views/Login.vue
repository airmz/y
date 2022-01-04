<!--
 * @Author: airmz
 * @Date: 2021-10-07 14:05:59
 * @LastEditTime: 2021-11-01 21:29:33
 * @FilePath: \yeb\src\views\Login.vue
-->
<template>

    <div>
        <div class="Container"></div>
        <el-form :rules="rules" ref="LoginForm" v-loading.fullscreen.lock="loading" :model="LoginForm"
            class="loginContainer" @keydown.enter.native="submitLogin">
            <h3 class="loginTitle">系统登陆</h3>
            <el-form-item size="normal" prop="username">
                <el-input type="text" autocomplete="off" v-model="LoginForm.username" placeholder="请输入用户名" size="normal"
                    resize clearable></el-input>
            </el-form-item>
            <el-form-item size="normal" prop="password">
                <el-input type="password" autocomplete="off" v-model="LoginForm.password" placeholder="请输入密码"
                    size="normal" show-password clearable></el-input>
            </el-form-item>
            <el-form-item size="normal" prop="code">
                <el-input class="captcha" type="text" autocomplete="off" v-model="LoginForm.code"
                    placeholder="点击图片更换验证码" size="normal" clearable></el-input>
                <img :src="captchaUrl" @click="changeCaptcha">
            </el-form-item>
            <el-form-item label="" size="normal">
                <el-checkbox v-model="checked" label="" :indeterminate="false" @change="">记住账号</el-checkbox>
            </el-form-item>
            <el-form-item label="" size="normal">
                <el-button style="width:100%" type="primary" size="default" @click="submitLogin">登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name: 'Login',
        data() {
            return {
                loading: false,
                LoginForm: {
                    username: 'admin',
                    password: '123',
                    code: ''
                },
                checked: true,
                captchaUrl: '/captcha?tiem=' + new Date(),
                rules: {
                    username: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }],
                    code: [{
                        required: true,
                        message: '请输入验证码',
                        trigger: 'blur'
                    }]
                },
            }
        },
        methods: {
            changeCaptcha() {
                this.captchaUrl = '/captcha?time=' + new Date();
            },

            submitLogin() {
                this.$refs.LoginForm.validate((valid) => {
                    if (valid) {
                        this.postRequest('/login', this.LoginForm)
                            .then((res) => {
                                const tokenStr = res.obj.tokenHead + res.obj.token;
                                window.sessionStorage.setItem('tokenStr', tokenStr);
                                let path = this.$route.query.redirect;
                                this.$router.replace((path == '/' || path == undefined) ? '/home' : path)
                            })
                    } else {
                        this.loading = true;
                        setTimeout(() => {
                            this.loading = false;
                        }, 2000);
                        this.$message.error('请输入所有信息')
                        return false;
                    }
                });
            }
        },
    }
</script>
<style>
    .el-form-item__content {
        display: flex;
    }

    .Container {
        background-image: url("../../src/assets/bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: -1;
        top: 0;

    }

    .loginContainer {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: #fff;
        border: solid 1px #eeeeee;
        box-shadow: 0 0 25px #cac6c6;
    }

    .loginTitle {
        margin: 8px auto 40px auto;
        text-align: center;
    }

    .captcha {
        width: 260px;
        margin-right: 5px;
    }
</style>