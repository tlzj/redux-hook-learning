import Axios from "axios";

/**
 * 1.https://segmentfault.com/a/1190000020210980 --- 使用请求后的拦截做到无痛刷新列表
 * 2.https://segmentfault.com/a/1190000020986592 --- 使用请求前的拦截做到无痛刷新列表
 */

 // axios 请求前的拦截
 // axios.interceptors.request.use()
 // axios 请求之后的拦截
 // axios.interceptor.response.use()

 // axios 封装基本骨架 token存在localStorage中 ------ 使用请求之后的拦截无痛刷新token
 import axios from 'axios';
 function getLocalToken(){
   const token = window.localStorage.getItem('token');
   return token;
 }

 // 给实例添加一个setToken方法，用于登录后将最新的token动态添加到hender,同时将token保存到localStorage中
 instance.setToken = token => {
  instance.defaults.headers['X-Token'] = token;
  window.localStorage.setItem('token', token);
 }

 // 创建实例
 const instance = axios.create({
   baseURL: '/api',
   timeout: 60000, // 超时
   headers: {
     'Content-Type': 'application/json',
     'X-Token': getLocalToken() // headers加入token
   }
 })

 // 返回拦截
 instance.interceptots.response.use(response => {
   // 这里处理token过期逻辑
   return response;
 }, error => {
   return Promise.reject(error);
 })

 export default instance;


 // 与后端约定返回数据格式（过期时) 当code === 1234时表示token过期了，此时就要求刷新token
 // { code: 1234, message: 'token过期', data: {} } 
 function refreshToken () {
  // instance是当前request.js中已创建的axios实例
  return instance.post('/refreshtoken').then(res => res.data)
}

 instance.interceptors.response.use(response => {
   const { code } = response.data;
   if(code === 1234){
     return refreshToken().then(res => {
       // 刷新token成功后，将新的token更新到header中，同时保存localStorage中
       const { token } = res.data;
       instance.setToken(token);
       // 获取当前失败的请求
       const config = response.config;
       // 重置
       config.headers['X-Token'] = token; // token重置为最新的token重新请求
       config.baseURL = ''; // 由于config中的url已经拼接了'/api/，所以最新的请求路径的公共路径不应该再增加/api
       // 重试当前请求并返回promise
      return instance(config);
     })
   }
 }, error => Promise.reject(error))


// 优化1： 防止多次刷新token
// 用一个flag来标记当前是否正在刷新token的状态，如果正在刷新则不再调用刷新token的接口
let isflag = false // token未刷新中
instance.interceptors.response.use(response => {
  const { code } = response.data;
  if(code === 1234){
    if(!isflag){
      isflag = true; // 当前在刷新token中
      return refreshToken().then(res => {
        const { token } = res.data
        instance.setToken(token)
        const config = response.config
        config.headers['X-Token'] = token
        config.baseURL = ''
        return instance(config)
      }).catch(res => {
        console.error('refreshtoken error =>', res)
        window.location.href = '/'
      }).finally(() => {
        isflag = false
      })
    }
  }
  return response
}, error => {
  return Promise.reject(error)
})

// 优化2：同时发起两个或以上的请求时，其他接口如何重试
/**
 * 两个接口几乎同时发起和返回，第一个接口会进入刷新token后重试的流程，
 * 而第二个接口需要先存起来，然后等刷新token后再重试。
 * 同样，如果同时发起三个请求，此时需要缓存后两个接口，
 * 等刷新token后再重试。由于接口都是异步的，处理起来会有点麻烦。
 */
// 是否正在刷新的标记
let isRefreshing = false
// 重试队列，每一项将是一个待执行的函数形式
let requests = []
instance.interceptors.response.use(response => {
  const { code } = response.data
  if (code === 1234) {
    const config = response.config
    if (!isRefreshing) {
      isRefreshing = true
      return refreshToken().then(res => {
        const { token } = res.data
        instance.setToken(token)
        config.headers['X-Token'] = token
        config.baseURL = ''
        // 已经刷新了token，将所有队列中的请求进行重试
        requests.forEach(cb => cb(token))
        // 重试完了别忘了清空这个队列（掘金评论区同学指点）
        requests = []
        return instance(config)
      }).catch(res => {
        console.error('refreshtoken error =>', res)
        window.location.href = '/'
      }).finally(() => {
        isRefreshing = false
      })
    } else {
      // 正在刷新token，返回一个未执行resolve的promise
      return new Promise((resolve) => {
        // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
        requests.push((token) => {
          config.baseURL = ''
          config.headers['X-Token'] = token
          resolve(instance(config))
        })
      })
    }
  }
  return response
}, error => {
  return Promise.reject(error)
})