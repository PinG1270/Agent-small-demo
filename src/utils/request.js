/**
 * 基于axios 进行二次封装
 * 请求二次封装
 */

import axios from 'axios';

let instance = axios.create({
    baseURL:process.env.VUE_APP_API,
    timeout:2000
})
// 请求拦截器；发送请求前执行的
instance.interceptors.request.use(async (config)=>{
    // config.headers = {
    //     ""
    // }
    return config
})

// 相应拦截器
instance.interceptors.response.use(async config=>{
    let data = config.data

    return data
})

// export default instance

export default {
    $axios: instance,
    get:async function(options){
        let {url,data} = options;
        console.log('request',url,data);
        // return 的get() 执行返回的promise实例 
        return instance.get(url,{
            params:data
        })
    },
    post:async function(options){
        let {url,data} = options;
        return instance.post(url,data)
    },
}