/**
 * 一些使用方式
 * https://www.jianshu.com/p/84a86e41eb2b
 */

 // 懒加载
//  const io = new IntersectionObserver(callback, {});
//  let imgs = document.querySelectorAll('[data-src');
//  function callback(entries){
//    entries.forEach(item => {
//      if(item.isIntersectint){
//        item.target.src = item.target.dataset.src;
//        io.unobserve(item.target); // 停止观察当前元素， 避免不可见时再触发callback方法
//      }
//    })
//  }

//  imgs.forEach((item)=>{  // io.observe接受一个DOM元素，添加多个监听 使用forEach
//   io.observe(item)
// })


// 阮一峰
// 惰性加载（lazy load）
// function query(selector) {
//   return Array.from(document.querySelectorAll(selector));
// }

// var observer = new IntersectionObserver(
//   function(changes) {
//     changes.forEach(function(change) {
//       var container = change.target;
//       var content = container.querySelector('template').content;
//       container.appendChild(content);
//       observer.unobserve(container);
//     });
//   }
// );

// query('.lazy-loaded').forEach(function (item) {
//   observer.observe(item);
// });

// // 无限滚动
// var intersectionObserver = new IntersectionObserver(
//   function (entries) {
//     // 如果不可见，就返回
//     if (entries[0].intersectionRatio <= 0) return;
//     loadItems(10);
//     console.log('Loaded new items');
//   });

// // 开始观察
// intersectionObserver.observe(
//   document.querySelector('.scrollerFooter')
// );

// import React, { Component } from 'react';
// class SliderWindowScroll extends Component {
//   constructor(props){
//     super(props);
//     this.$bottomElement = React.createRef();
//   }
//   componentDidMount(){
//     this.initateScrollObserver();
//   }
//   initateScrollObserver = () => {
//     const options = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.1
//     };
//     this.observer = new IntersectionObserver(this.callback, options);
//     this.observer.observe(this.$bottomElement.current);
//   }
//   render(){
//     return (
//       <li className='img' ref={this.$bottomElement}></li>
//     )
//   }
// }

// export default SliderWindowScroll;

import React from 'react';
import { SlidingWindowScrollHook } from './components/SlidingWindowScrollHook.js';
import MY_ENDLESS_LIST from './components/data.js';

function App() {
  return (
    <div className="App">
     <h1>15个元素实现无限滚动</h1>
      {/* <SlidingWindowScroll list={MY_ENDLESS_LIST} height={195}/> */}
      <SlidingWindowScrollHook list={MY_ENDLESS_LIST} height={195}/>
    </div>
  );
}

export default App;