import React, { Component } from 'react';
import asyncComponent from './asyncComponent.js';
const ModuleA = asyncComponent(() => import(/* webpackChunkName: 'tlzj' */'../4.page/component/ModuleA.js'))
const ModuleB = asyncComponent(() => import('../4.page/component/ModuleB.js'))
const ModuleC = asyncComponent(() => import('../4.page/component/ModuleC.js'))
class App extends Component {
  state = {
    isShow: false
  }
  render(){
    return (
      <div>
        <button onClick={() => this.setState({isShow: !this.state.isShow})}>点击加载组件</button>
        {
          this.state.isShow && <div>
            <ModuleA />
            <ModuleB />
            <ModuleC />
          </div>
        }
      </div>
    )
  }
}
export default App