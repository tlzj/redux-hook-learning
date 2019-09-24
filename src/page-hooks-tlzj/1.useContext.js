import React, { useState, useContext } from 'react';
import tlContext, { TlProvider, TlConsumer } from './tlContext.js';

const ParentCom = () => {
  return (
    <div>
      <TlConsumer>
        { value => (
          <Sub value={value}/>
        )}
      </TlConsumer>
    </div>
  )
}

const Sub = props => {
  const tlInfo = useContext(tlContext);
  console.log('tlInfo', tlInfo)
  const { value } = props;
  function editObj(){
    value.func({ name: 'ls', age: 20 })
  }
  return (
    <div>
      <p>name: {value.value.name}, age: {value.value.age}</p>
      <button onClick={() => editObj()}>修改</button>
    </div>
  )
}

const App = props => {
  const [zs, setZs] = useState({
    name: 'zs', age: 18
  })
  return (
    <div>
      <h1>context使用</h1>
      <TlProvider
        value={{
          value: zs,
          func: setZs
        }}
      >
        <ParentCom />
      </TlProvider>
    </div>
  )
}
export default App;

// 在hooks中两种获取context的方法
// 1.使用useContext获取
// 2.使用consumer消费拿到数据