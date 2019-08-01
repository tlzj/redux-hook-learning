class HashRouter{
  constructor(){
      //用于存储不同hash值对应的回调函数
      this.routers = {};
      window.addEventListener('hashchange',this.load.bind(this),false)
  }
  //用于注册每个视图
  register(hash,callback = function(){}){
      this.routers[hash] = callback;
  }
  //用于注册首页
  registerIndex(callback = function(){}){
      this.routers['index'] = callback;
  }
  //用于404首页
  register404(callback = function(){}){
    this.routers['onNoPage'] = callback;
  }
   //用于处理异常情况
   registerError(callback = function(){}){
    this.routers['error'] = callback;
  }
  //用于调用不同视图的回调函数
  load(){
      let hash = window.location.hash.slice(1),
          handler;
      //没有hash 默认为首页
      let routereKey = Object.keys(this.routers);
      if(!hash){
          handler = this.routers.index;
      }else{
          if(~routereKey.indexOf(hash)){
            handler = this.routers[hash];
          }else{
            handler = this.routers.onNoPage;
          }
      }
      //执行注册的回调函数
      try{
        handler.apply(this);
      }catch(e){
        console.error(e);
        (this.routers['error'] || function(){}).call(this,e);
      }
  }
}
export default HashRouter;





// class HashRouter{
//   constructor(){
//       //用于存储不同hash值对应的回调函数
//       this.routers = {};
//       window.addEventListener('hashchange',this.load.bind(this),false)
//   }
//   //用于注册每个视图
//   register(hash,callback = function(){}){
//       this.routers[hash] = callback;
//   }
//   //用于注册首页
//   registerIndex(callback = function(){}){
//       this.routers['index'] = callback;
//   }
//   //用于处理视图未找到的情况
//   registerNotFound(callback = function(){}){
//       this.routers['404'] = callback;
//   }
//   //用于处理异常情况
//   registerError(callback = function(){}){
//       this.routers['error'] = callback;
//   }
//   //用于调用不同视图的回调函数
//   load(){
//       let hash = location.hash.slice(1),
//           handler;
//       //没有hash 默认为首页
//       if(!hash){
//           handler = this.routers.index;
//       }
//       //未找到对应hash值
//       else if(!this.routers.hasOwnProperty(hash)){
//           handler = this.routers['404'] || function(){};
//       }
//       else{
//           handler = this.routers[hash]
//       }
//       //执行注册的回调函数
//       try{
//           handler.apply(this);
//       }catch(e){
//           console.error(e);
//           (this.routers['error'] || function(){}).call(this,e);
//       }
//   }
// }
