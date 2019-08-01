import React, { useEffect } from "react";
import HistoryRouter from './historyRouter.js';
export default function Page1() {
  useEffect(() => {
    let router = new HistoryRouter();
    let container = document.getElementById('container');

    //注册首页回调函数
    router.registerIndex(()=> container.innerHTML = '我是首页');

    //注册其他视图回到函数
    router.register('/page1',()=> container.innerHTML = '我是page1');
    router.register('/page2',()=> container.innerHTML = '我是page2');
    router.register('/page3',()=> container.innerHTML = '我是page3');
    router.register('/page4',()=> {throw new Error('抛出一个异常')});

    //注册未找到对应hash值时的回调
    router.registerNotFound(()=>container.innerHTML = '页面未找到');
    //注册出现异常时的回调
    router.registerError((e)=>container.innerHTML = '页面异常，错误消息：<br>' + e.message);
    //加载视图
    router.load();
  });
  return (
    <div>
      <div id="nav">
        <a href="/page1">page1</a>-------
        <a href="/page2">page2</a>-------
        <a href="/page3">page3</a>-------
        <a href="/page4">page4</a>-------
        <a href="/page5">page5</a>
    </div>
    <div id="container"></div>
    </div>
  );
}

/**
 * tip:
 * 浏览器原有的;
 *  history.go(-1);       // 后退一页
    history.go(2);        // 前进两页
    history.forward();     // 前进一页
    history.back();      // 后退一页

    H5新增
    history.pushState(state, title, url);         // 添加新的状态到历史状态栈
    history.replaceState(state, title, url);      // 用新的状态代替当前状态
    history.state(state, title, url)              // 返回当前状态对象
 * history.pushState() 和 history.replaceState() 可以改变 url 同时，
   不会刷新页面，所以在 HTML5 中的 histroy 具备了实现前端路由的能力。

    state：合法的 Javascript 对象，可以用在 popstate 事件中
    title：现在大多浏览器忽略这个参数，可以直接用 null 代替
    url：任意有效的 URL，用于更新浏览器的地址栏
 * 
 * HTML5引入了 history.pushState() 和 history.replaceState() 方法，
 * 它们分别可以添加和修改历史记录条目。这些方法通常与window.onpopstate 配合使用。
 * 
 * 
 */
