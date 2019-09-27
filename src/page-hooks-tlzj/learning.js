// // HooK
// import React, { Component } from 'react';
// @tlzj
// class Test extends Component {
//   state = {
//     obj: {
//       name: 'zs'
//     }
//   }
//   handle = () => {
//     let { obj } = this.state
//     obj.name = 'ls'
//     this.forceUpdate()
//     console.log(this.state)
//   }
//   render(){
//     return <div>
//       test
//       <div onClick={this.handle}>-----------------------{this.state.obj.name}--------------</div>
//     </div>
//   }
// }
// export default Test



// import React, { useState, useEffect } from 'react';
// import { Button } from 'antd';
// function Test(){
//   const [count, changeCount] = useState(0)
//   // console.log(count)
//   const [mount, changeMount] = useState(10)
//   useEffect(() => {
//     let testNumber = 1
//     function handleClick(e){
//       e.stopPropagation()
//       testNumber = testNumber + 1
//       console.log('window点击', testNumber)
//     }
//     document.title = `You clicked ${count} times`
//     window.addEventListener('click', handleClick)
//     return () => {
//       window.removeEventListener('click', handleClick)
//     }
//   })
//   return (
//     <div>
//       <Button onClick={() => changeCount(count + 1)}>点击count</Button>
//       <div>-----------{count}-------------</div>
//       <Button onClick={() => changeMount(mount - 1)}>点击mount</Button>
//       <div>-----------{mount}-------------</div>
//     </div>
//   )
// }
// export default tlzj(Test);

// function tlzj(Component){
//   class WrapperComponent extends React.Component {
//     componentDidMount(){
//       console.log('记录日志接口')
//     }
//     render(){
//       return <Component />
//     }
//   }
//   return WrapperComponent
// }


// 自定义hook
// import React, { Component, useState, useEffect } from 'react';
// class Test extends Component {
//   render(){
//     return <div>
//       <h1>离线和在线</h1>
//       <Component1 status={1}/>
//       <div>---------------</div>
//       <Component2 status={1}/>
//     </div>
//   }
// }

// export default Test;

// function handle(props){
//   const [isOnline, setIsOnline] = useState(null);
//   useEffect(() => {
//     if(props.status === 1){
//       setIsOnline(true)
//     }
//   })
//   return isOnline
// }

// function Component1(props) {
//   const isOnline = handle(props)
//   console.log(isOnline, 'isOnlineisOnline')
//   return <div>
//     <div>Component1</div>
//     <div>{isOnline ? '在线' : '离线'}</div>
//   </div>
// }

// function Component2(props) {
//   const isOnline = handle(props)
//   return <div>
//     <div style={{
//       color: isOnline ? 'green' : '#ccc'
//     }}>Component2</div>
//   </div>
// }


// 高阶组件实现
// import React, { Component, useState } from 'react';

// function tlzj(Comp) {
//   class Wrapper extends React.Component {
//     constructor(props){
//       super(props)
//       this.state = {
//         isOnline: props.status === 1 ? true : false
//       }
//     }
//     render(){
//       const { isOnline } = this.state
//       console.log(isOnline)

//       const { forwardRef, status, ...props } = this.props
//       return <Comp {...props} isOnline={isOnline} ref={forwardRef}/>
//     }
//   }
//   return React.forwardRef((props, ref) => <Wrapper {...props} forwardRef={ref}/>)
// }

// function Component1(props) {
//   return <div>
//     <div>Component1</div>
//     <div>{props.isOnline ? '在线' : '离线'}</div>
//   </div>
// }

// function Component2(props) {
//   return <div>
//     <div style={{
//       color: props.isOnline ? 'green' : '#ccc'
//     }}>Component2</div>
//   </div>
// }

// function M(props){
//   return <div>MMMMMM</div>
// }

// const T1 = tl(Component1)
// const T2 = tl(Component2)
// const MM = tlzj(M)

// @tlzj
// class Test extends Component {
//   render(){
//     return <div>
//       <h1>离线和在线</h1>
//       <T1 status={1}/>
//       <div>---------------</div>
//       <T2 status={1}/>
//       <MM />
//     </div>
//   }
// }

// function tl(Component){
//   class WrapperComponent extends React.Component {
//     constructor(props){
//       super(props)
//       this.state = {
//         isOnline: props.status === 1 ? true : false
//       }
//     }
//     componentDidMount(){
//       console.log('记录日志接口')
//     }
//     render(){
//       const { isOnline } = this.state
//       console.log(isOnline)

//       const { forwardRef, status, ...props } = this.props
//       return <Component {...props} isOnline={isOnline} ref={forwardRef}/>
//     }
//   }
//   return React.forwardRef((props, ref) => <WrapperComponent {...props} forwardRef={ref}/>)
// }

// export default Test;

// webpack react react-router mobx es6 antd 
// flutter

// react v16.8以上
// 新增的hook有useState useEffect useReducer useContext useCallback useMemo useRef useImperativeHandle useLayoutEffect 
// https://blog.csdn.net/sinat_17775997/article/details/89366698
// import React, {useState, useEffect} from "react";
// const EffectComponent = () => {
//     const [count, setCount] = useState(1);
//     useEffect(() => {
//         console.log("定义事件接口")
//         return () => {
//             console.log("注销事件接口")
//         }
//     }, [])
//     return (
//         <>  
//             {console.log("渲染")}
//             <h1>{count}</h1>
//             <button onClick={() => {setCount(count + 1)}}> + </button>
//         </>
//     );
// }
// export default EffectComponent;


// import React, {useState, useEffect} from "react";
 
// const EffectComponent = () => {
//     const [width, setWidth] = useState(window.innerWidth);
//     const [count, setCount] = useState(1);
//     const resizeHandle = () => {
//         setWidth(window.innerWidth);
//         console.log(window.innerWidth);
//     }
//     useEffect(() => {
//         window.addEventListener("resize", resizeHandle);
//         return () => {
//             // window.removeEventListener("resize", resizeHandle)
//         }
//     })
//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={() => {setCount(count + 1)}}>+</button>
//         </>
//     );
// }

// export default EffectComponent;

// hook中useContext()使用
// import React, { useContext, createContext } from 'react';
// const stateContext = createContext('skyblue')
// const Comp1 = (props) => {
//   return (
//     <stateContext.Provider
//       value={'red'} 
//     >
//       <Comp2 />
//     </stateContext.Provider>
//   )
// }
// const Comp3 = (props) => {
//   const value = useContext(stateContext);
//   return <>
//     <h1 style={{color: value}}>组件3</h1>
//     <div>{value}</div>
//   </>
// }

// function Comp2(){
//   return <Comp3 />
// }

// export default Comp1;

// hook中useCallback的使用
// import React, { useCallback, useState  } from 'react';

// const CallbackComponent = () => {
//   let [count, setCount] = useState(1);
//   let [num, setNum] = useState(1);

//   const memoized = useCallback( () => {
//       return num;
//   },[count])
//   console.log("记忆：",memoized());
//   console.log("原始：",num);
//   return (
//       <>
//         <button onClick={() => {setCount(count + 1)}}> count+ </button>
//         <button onClick={() => {setNum(num + 1)}}> num+ </button>
//       </>
//   )
// }
// export default CallbackComponent;


// 发送请求案例https://www.robinwieruch.de/react-hooks-fetch-data/
// 1.
// import React, { useState, useEffect } from 'react';
// function Test(){
//   const [data, setData] = useState({ hits: []});
//   const [query, setQuery] = useState('redux');
//   const [search, setSearch] = useState('');
//   useEffect(() => {
//     console.log('----------render-----------')
//     const fetchData = async () => {
//       const result = await fetch(
//         `http://hn.algolia.com/api/v1/search?query=redux=${query}`,
//       ).then(res => res.json())
//       setData(result);
//     };
//     fetchData();
//   }, [search]);
//   return <>
//     <h1>hooks</h1>
//     <input
//         type="text"
//         value={query}
//         onChange={event => setQuery(event.target.value)}
//       />
//       <button type="button" onClick={() => setSearch(query)}>
//         Search
//       </button>
//     <ul>
//       {data.hits.map(item => (
//         <li key={item.objectID}>
//           <a href={item.url}>{item.title}</a>
//         </li>
//       ))}
//     </ul>
//   </>
// }
// export default Test;

//2.
// import React, { useState, useEffect } from 'react';
// function Test(){
//   const [data, setData] = useState({ hits: []});
//   const [query, setQuery] = useState('redux');
//   const [url, setUrl] = useState(
//     'http://hn.algolia.com/api/v1/search?query=redux',
//   );
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       console.log('-----------请求开始---------------')
//       setIsLoading(true);
//       const result = await fetch(url).then(res => res.json())
//       setData(result);
//       setIsLoading(false);
//     };
//     fetchData();
//   }, [url]);
//   console.log('----------render-----------')
//   return <>
//     <h1>hooks</h1>
//     <input
//         type="text"
//         value={query}
//         onChange={event => setQuery(event.target.value)}
//       />
//       <button type="button" onClick={() => setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)}>
//         Search
//       </button>
//       {isLoading ? (
//         <div>Loading ...</div>
//       ) : (
//         <ul>
//           {data.hits.map(item => (
//             <li key={item.objectID}>
//               <a href={item.url}>{item.title}</a>
//             </li>
//           ))}
//         </ul>
//       )}
//   </>
// }
// export default Test;

// 3.
// import React, { useState, useEffect } from 'react';
// function Test(){
//   const [data, setData] = useState({ hits: []});
//   const [query, setQuery] = useState('redux');
//   const [url, setUrl] = useState(
//     'http://hn.algolia.com/api/v1/search?query=redux',
//   );
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       console.log('-----------请求开始---------------')
//       setIsError(false);
//       setIsLoading(true);
//       try {
//         const result = await fetch(url).then(res => res.json())
//         setData(result);
//       }catch(error){
//         setIsError(true);
//       }
//       setIsLoading(false);
//     };
//     fetchData();
//   }, [url]);
//   console.log('----------render-----------')
//   return <>
//     <h1>hooks</h1>
//     <input
//         type="text"
//         value={query}
//         onChange={event => setQuery(event.target.value)}
//       />
//       <button type="button" onClick={() => setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)}>
//         Search
//       </button>
//       {isError && <div>Something went wrong ...</div>}
//       {isLoading ? (
//         <div>Loading ...</div>
//       ) : (
//         <ul>
//           {data.hits.map(item => (
//             <li key={item.objectID}>
//               <a href={item.url}>{item.title}</a>
//             </li>
//           ))}
//         </ul>
//       )}
//   </>
// }
// export default Test;

// 4.Custom Data Fetching Hook  自定义hook使用
// import React, { useState, useEffect } from 'react';
// const useHackerNewApi = (initialUrl, initialData) => {
//   const [data, setData] = useState(initialData);
//   const [url, setUrl] = useState(initialUrl);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsError(false);
//       setIsLoading(false);
//       try {
//         const result = await fetch(url).then(res => res.json());
//         setData(result);
//       }catch(error){
//         setIsError(true);
//       }
//       setIsLoading(false);
//     }
//     fetchData();
//   }, [url])
//   return [{data, isLoading, isError }, setUrl];
// }

// function Test(){
//   const [ query, setQuery ] = useState('redux');
//   const [{ data, isLoading, isError }, doFetch] = useHackerNewApi(
//     'http://hn.algolia.com/api/v1/search?query=redux',
//     { hits: [] },
//   );
//   return (
//     <React.Fragment>
//       <form onSubmit={event => {
//         doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
//         event.preventDefault();
//       }}>
//         <input
//           type="text"
//           value={query}
//           onChange={event => setQuery(event.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       {isError && <div>Something went wrong ...</div>}
//       {isLoading ? (
//         <div>Loading ...</div>
//       ) : (
//         <ul>
//           {data.hits.map(item => (
//             <li key={item.objectID}>
//               <a href={item.url}>{item.title}</a>
//             </li>
//           ))}
//         </ul>)}
//     </React.Fragment>
//   )
// }
// export default Test;


// hook测试，传参问题
// import React, { useState, useEffect } from 'react';
// const Test = () => {
//   const [data, changeData] = useState(1);
//   const tlzj = data => {
//     return data + 1
//   }
//   const handleClick = () => {
//     changeData(data+1)
//     changeData(data+1)
//   }
//   const handleClick2 = () => {
//     changeData(tlzj)
//     changeData(tlzj)
//   }
//   return (
//     <div>
//       <div>{data}</div>
//       <button onClick={handleClick}>tlzj测试</button>
//       <button onClick={handleClick2}>tlzj测试2</button>
//     </div>
//   )
// }
// export default Test;


///hook其他测试
// import React, { useState, useEffect } from 'react';
// import { Button } from 'antd';

// function Test(){
//   let [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log('---------useEffect----------');
//     return () => {
//       console.log('-------------unMount---------');
//     }
//   }, [count])
//   return <div>
//     <div>{count}</div>
//     <Button onClick={() => setCount(count => count + 1)}>count</Button>
//   </div>
// }
// export default Test;


// context 传值案例
// import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
// import { Button } from 'antd';
// const  contextC = createContext('skyblue');

// const { Provider, Consumer } = contextC;
// function Test(){
//   const [count, setCount] = useState(0);
//   return <div>
//     <div>{count}</div>
//     <Button onClick={() => setCount(count => count + 1)}>count</Button>
//     <Provider
//       value={{
//         color: 'skyblue'
//       }}
//     > 
//     <hr />
//       <Sub />
//       <div>------------------</div>
//       <Sub1 />
//     </Provider>
//   </div>
// }
// export default Test;

// function Sub(){
//   return (
//     <Consumer>
//       {value => <span style={{color: value.color}}>Sub组件 (正常的context)</span>}
//     </Consumer>
//   )
// }

// function Sub1(){
//   const [color, changeColor] = useState('blue')
//   const contextValue = useContext(contextC)
//   return (
//     <div style={{color: contextValue.color}}>
//       Sub1组件 (hooks的context)
//       <Provider value={{
//         color,
//         changeColor
//       }}>
//         <Sub2 />
//       </Provider>
//     </div>
//   )
// }

// function Sub2(){
//   const value = useContext(contextC);
//   return (
//     <div style={{color: value.color}}>
//       <div>Sub2组件 (hooks的context)</div>
//       <Button onClick={() => {
//         let color = value.color === 'blue' ? 'red' : 'blue';
//         value.changeColor(color);
//       }}>切换sub2组件的颜色</Button>
//     </div>
//   )
// }

// useMemo使用
// import React, { useState, useEffect, useMemo } from 'react';
// import { Button } from 'antd';
// function Foo(props){
//   return <h1>{props.count}</h1>
// }
// function Test(props){
//   const [count, setCount] = useState(0);
//   const double = useMemo(() => {
//     console.log('----useMemo执行')
//     return count * 2;
//   }, [count === 3]); // 在count为3和count为4时会进行渲染，false --> true --> false
//   const test = () => {
//     return count * 2;
//   }
//   return (
//     <div>
//       <Button type="primary"
//         onClick={() => {setCount(count + 1) }}
//       >
//         Click({count}) double: ({double}) test:({test()})
//       </Button>
//       <Foo count={count}/>
//     </div>
//   )
// }
// export default Test;

// React.memo 组件优化方面案例
// import React, { useState, useEffect, useMemo , memo } from 'react';
// import { Button } from 'antd';
// // tip: memo可以做到，如果count不改变，Foo组件不会渲染,而useMemo可以让double在count改变时才调用
// // useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
// const Foo = memo(function Foo(props){
//   console.log('-------Foo-------render---------')
//   return (
//     <div>{props.count}</div>
//   )
// })

// function Test(props){
//   const [count, setCount] = useState(0)
//   const [count1, setCount1] = useState(0)
//   let double = useMemo(() => {
//     console.log('--------useMemo调用------------')
//     return count * 2;
//   }, [count])
//   return (
//     <div>
//       <div>{count}</div>
//       <Button onClick={() => setCount(count + 1)}>点击改变count double: ({double})</Button>
//       <Foo count={count}/>
//       <div>---------------------</div>
//       <div>{count1}</div>
//       <Button onClick={() => setCount1(count1 + 1)}>点击改变count1</Button>
//     </div>
//   )
// }
// export default Test;

// useCallback 使用案例
// import React, { useState, useEffect, useCallback } from 'react';
// import { Button } from 'antd';
// function Test(){
//   const [count, setCount] = useState(0);
  
//   const [data, setData] = useState(0)
//   const filter = useCallback(() => {
//     console.log('------------render')
//   }, [data])
//   const clickfun = useCallback(() => {
//     console.log(count, '====')
//     setCount(count + 1);
//     filter()
//   }, [])
//   return (
//     <div>
//       <div>{count}</div>
//       <Button onClick={clickfun}>点击改变count</Button>
//     </div>
//   )
// } 
// export default Test;

// useRef 使用案例
// import React, { useState, useEffect, useRef } from 'react';
// function Test(){
//   const inputEl = useRef(null);
//   console.log(inputEl, '--1')
//   const onButtonClick = () => {
//     console.log(inputEl, '--2')
//     inputEl.current.focus();
//   }
//   return (
//     <div>
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Focus the input</button>
//     </div>
//   )
// }
// export default Test;

// import React, { useState, useEffect, useRef } from 'react';
// function Test (props) {
//   const [count, setCount] = useState(0);
//   let it // 每次setCount都会重置it
//   useEffect(() => {
//     it = setInterval(() => {
//       setCount(count => count + 1)
//     }, 1000)
//     console.log(it, 'it1')
//   } , [])
//   console.log(it, 'it')

//   useEffect(() => {
//     if (count >= 5) {
//       clearInterval(it)
//     }
//   })

//   return (
//     <div style={{padding:'100px'}}>
//       <h1>{count}</h1>
//     </div>
//   )
// }
// export default Test;

// import React, { useState, useEffect, useRef } from 'react';
// function Test (props) {
//   const [count, setCount] = useState(0);
//   const [timer, setTimer] = useState(null);
  
//   useEffect(() => {
//     setTimer(setInterval(() => {
//       setCount(count => count + 1)
//     }, 1000))
//   } , [])
//   useEffect(() => {
//     if (count >= 5) {
//       clearInterval(timer)
//     }
//   })

//   return (
//     <div style={{padding:'100px'}}>
//       <h1>{count}</h1>
//     </div>
//   )
// }
// export default Test;