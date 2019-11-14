/**
 * axios的重连封装,调用接口失败后重新调用接口，需要设置重连次数和超时时间
 * tip: 最新版的0.19.0版本自定义属性增加了白名单，导致自定义属性添加失败，如果增加自定义属性，可以降版本到0.18.0解决问题
 * https://www.imooc.com/article/32925?block_id=tuijian_wz
 * https://segmentfault.com/a/1190000015157929
 */

import axios from "axios";
const instance = axios.create({
  // 相关配置
});
// 拦截器
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;
instance.interceptors.response.use(undefined, err => {
  var config = err.config;
  if(!config || !config.retry) return Promise.reject(err);
  config.__retryCount = config.__retryCount || 0;
  if(config.__retryCount >= config.retry){
    return Promise.reject(err);
  }
  config.__retryCount += 1;
  var backoff = new Promise(function(resolve){
    setTimeout(function(){
      resolve();
    }, config.retryDelay || 1);
  });
  return backoff.then(function(){
    return axios(config);
  })
});
