import React, { useEffect } from "react";
import HashRouter from "./hashRouter.js";
export default function Page1() {
  useEffect(() => {
    let router = new HashRouter();
    let container = document.getElementById('container');

    //注册首页回调函数
    router.registerIndex(()=> container.innerHTML = '我是首页');
    //注册404
    router.register404(()=> container.innerHTML = '我是404');
    //注册出现异常时的回调
    router.registerError((e)=>container.innerHTML = '页面异常，错误消息：<br>' + e.message);
    //注册其他视图回到函数
    router.register('/page1',()=> container.innerHTML = '我是page1');
    router.register('/page2',()=> container.innerHTML = '我是page2');
    router.register('/page3',()=> container.innerHTML = '我是page3');
    router.register('/page4',()=> {throw new Error('抛出一个异常')});
    //加载视图
    router.load();
  }, [])
  return (
    <div>
      <div id="nav">
        <a href="#/page1">page1</a>-------
        <a href="#/page2">page2</a>-------
        <a href="#/page3">page3</a>-------
        <a href="#/page4">page4-异常</a>-------
        <a href="#/page3234134">其他</a>
      </div>
      <div id="container"></div>
    </div>
  );
}
