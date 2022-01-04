/*
 * @Author: airmz
 * @Date: 2021-10-09 11:25:10
 * @LastEditTime: 2021-10-27 21:02:01
 * @FilePath: \yeb\src\utils\api.js
 */
import axios from 'axios'
import {
    Message
} from 'element-ui'
import router from '../router'
//请求拦截器
axios.interceptors.request.use(config => {
    //如果存在token请求携带token
    if (window.sessionStorage.getItem('tokenStr')) {
        config.headers['Authorization'] = window.sessionStorage.getItem('tokenStr');
    }
    return config;
}, error => {
    // console.log(123)
    console.log(error)
})

//相应拦截器
axios.interceptors.response.use(success => {
    //业务逻辑错误
    if (success.status && success.status == 200) {
        if (success.data.code == 500 || success.data.code == 401 ||
            success.data.code == 403) {
            Message.error({
                message: success.data.message
            });
            return;
        }
        if (success.data.message) {
            Message.success({
                message: success.data.message
            });
        }
    }
    return success.data;
}, error => {
    if (error.response.code == 504 || error.response.code == 404) {
        Message.error({
            message: '服务器被吃了o(╯□╰)o'
        });
    } else if (error.response.code == 403) {
        Message.error({
            message: '权限不足，请联系管理员！'
        });
    } else if (error.response.code == 401) {
        Message.error({
            message: '尚未登录，请登录'
        });
        router.replace('/');
    } else {
        if (error.response.data.message) {
            Message.error({
                message: error.response.data.message
            });
        } else {
            Message.error({
                message: '未知错误！'
            });
        }
    }
    return;
});


let base = '';
//传递json格式的post请求
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params
    })
};
//传递json格式的put请求
export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params
    })
};
//传递json格式的delete请求
export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        data: params
    })
};

//传递json格式的get请求
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        data: params
    })
};