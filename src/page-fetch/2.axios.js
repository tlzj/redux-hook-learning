// vue vue-resource ---> axios.js
// axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端
/**
 *  从浏览器中创建 XMLHttpRequest
    从 node.js 发出 http 请求
    支持 Promise API
    拦截请求和响应
    转换请求和响应数据
    取消请求
    自动转换JSON数据
    客户端支持防止 CSRF/XSRF
 */

 //执行get请求
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
.then(function (response) {
  console.log(response);
}).catch(function (error) {
  console.log(error);
});

// Optionally the request above could also be done as
axios.get('/user', {
  params: {
    ID: 12345
  }
}).then(function (response) {
  console.log(response);
}).catch(function (error) {
  console.log(error);
});

// 使用流程
// 首先实例化
var axiosInstance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {
    'X-product': 'h5'
  }
})
// 设置request拦截器
axiosInstance.interceptors.request.use(request => {
  //在这里处理request，可以对所有请求统一处理请求头等
})
// 设置response拦截器
axios.interceptors.response.use(response => {
  //在这里处理response，这是全局的，对所有使用axios的请求起作用
})

//实例方法
//以下是可用的实例方法。指定的配置将与实例的配置合并
// axios#request(config)
// axios#get(url[, config])
// axios#delete(url[, config])
// axios#head(url[, config])
// axios#post(url[, data[, config]])
// axios#put(url[, data[, config]])
// axios#patch(url[, data[, config]])
