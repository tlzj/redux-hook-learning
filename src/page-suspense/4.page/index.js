// import React, { Suspense } from 'react';
// import { unstable_createResource as createResource } from 'react-cache';
// const getName = () => new Promise(resolve => {
//   setTimeout(() => {
//     resolve('取到数据')
//   }, 3000)
// })
// const resource = createResource(getName);
// const Greeting = () => {
//   return <div>-------数据--------{resource.read()}</div>
// }
// function SuspenseDemo (){
//   return (
//     <Suspense
//       fallback={<div>loading.....</div>}
//     >
//       <Greeting />
//     </Suspense>
//   )
// }
// export default SuspenseDemo;


// import React, { useState } from 'react';
// import ModuleA  from './component/ModuleA.js'
// import ModuleB  from './component/ModuleB.js'
// import ModuleC  from './component/ModuleC.js'
// function SuspenseDemo (){
//   const [isShow, setIsShow] = useState(false)
//   const changeShow = function(){
//     setIsShow(isShow => !isShow);
//   }
//   return (
//     <>
//       <button onClick={changeShow}>点击加载组件</button>
//       {
//         isShow && <div>
//           <ModuleA />
//           <ModuleB />
//           <ModuleC />
//         </div>
//       }
//     </>
//   )
// }
// export default SuspenseDemo;

// 懒加载 webpackChunkName 代码分割后打包生成的文件名
import React, { Suspense, lazy, useState } from 'react';
const ModuleA = lazy(() => import(/* webpackChunkName: 'lazyComponent'*/'./component/ModuleA.js'));
const ModuleB = lazy(() => import(/* webpackChunkName: 'tlzj' */'./component/ModuleB.js'));
const ModuleC = lazy(() => import(/* webpackChunkName: 'tlzj-test' */'./component/ModuleC.js'));
function SuspenseDemo (){
  const [isShow, setIsShow] = useState(false)
  const changeShow = function(){
    setIsShow(isShow => !isShow);
  }
  return (
    <Suspense
      fallback={<div>loading.....</div>}
    >
      <button onClick={changeShow}>点击加载组件</button>
      {
        isShow && <div>
          <ModuleA />
          <ModuleB />
          <ModuleC />
        </div>
      }
    </Suspense>
  )
}
export default SuspenseDemo;