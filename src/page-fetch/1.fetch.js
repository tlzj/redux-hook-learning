// 原生
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status === 200){
    console.log(xhr.response) // 获取数据
  }
}
xhr.send();

// fetch使用
fetch(url).then(res => {
  if(res.ok){
    res.json();
  }
})
.then(data => console.log(data))
.catch(err => console.log(err));

// 注: 当接收到一个代表错误的 HTTP 状态码时，从 fetch()返回的 Promise 不会被标记为 reject， 
// 即使该 HTTP 响应的状态码是 404 或 500。
// 相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），  
// 仅当网络故障时或请求被阻止时，才会标记为 reject。
// fetch还不支持超时控制


// axios
// 可以在node.js中使用
// 提供了并发请求的接口
// 支持Promise API

// 1.简单使用
axios({
  method: 'GET',
  url: url
}).then(res => console.log(res))
.catch(err => console.log(err));

// 2.并发请求
function getUserAccount(){
  return axios.get('/user/12345/permissions');
}
axios.all([getUserAccount, getUserAccount]).then(axios.spread(function(acct, perms){
   // Both requests are now complete
}))