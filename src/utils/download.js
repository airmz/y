/*
 * @Author: airmz
 * @Date: 2021-12-01 20:18:59
 * @LastEditTime: 2021-12-07 21:26:52
 * @FilePath: \yeb\src\utils\download.js
 */
import axios from 'axios';
const service=axios.create({
    responseType:'arraybuffer'
})
service.interceptors.request.use(config=>{
    config.headers['Authorization']=window.sessionStorage.getItem('tokenStr');
    return config
},error=>{
    console.log(error)
})
service.interceptors.response.use(res=>{
    let headers=res.headers;
    let reg=RegExp(/application\/json/);
    if(headers['content-type'].match(reg)){
        res.data=uintToString(res.data)
    }else{
        let fileDownload=require('js-file-download');
        let fileName=headers['content-disposition'].split(';')[1].split('filename=')[1];
        let contentType=headers['content-type'];
        fileName=decodeURIComponent(fileName);
        fileDownload(res.data,fileName,contentType);
        
    }
},error=>{
    console.log(error)
})
function uintToString(uniArray){
    let encodedString=String.fromCharCode.apply(null,new Uint8Array(uniArray));
    let decodedString=decodeURIComponent(encodedString);
    return JSON.parse(decodedString);
}
let base='';
export const downloadRequest=(url,params)=>{
    return service({
        method:'get',
        url:`${base}${url}`,
        data:params
    })
}

export default service










