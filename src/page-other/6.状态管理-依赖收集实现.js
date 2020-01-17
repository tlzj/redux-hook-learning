/**
 * @desc 模拟mobx vuex redux 一些状态库的实现
 * https://juejin.im/post/5de088655188255ee538701e
 */
// 1.要实现的例子
// import { observable, observe } from 'micro-reaction';
// const ob = observable({
//   a: 1
// });
// observe(() => console.log(ob.a));
// // logs: 1
// // logs: 2
// ob.a = 2;

// 2.创建一个可观察对象（es6 Proxy) 操作拦截
export function observable(obj = {}){
  return createObservable(obj);
}

function createObservable(obj){
  const proxyObj = new Proxy(obj, handlers());
  return proxyObj;
}

function handlers(){
  return {
    get: (target, key, receiver) => {
      const result = Reflect.get(target, key, receiver);
      return result;
    },
    set: (target, key, value, receiver) => {
      const result = Reflect.set(target, key, value, receiver);
      return result;
    }
  }
}
