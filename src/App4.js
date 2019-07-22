import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import Index from './page-redux/5_page/index.js';
import About from './page-redux/5_page/about.js';
import reducer from './page-redux/5_page/redux/reducer.js';
const initialState = {
  indexState: {
    count: 100
  },
  aboutState: {
    count: -100
  },
  data: []
}

const store = createStore(reducer, initialState, applyMiddleware(createLogger))
// subscribe 在state数据改变时触发
store.subscribe(() => {
  console.log('--------state数据改变-----------')
  console.log(store.getState())
})
class App extends Component {
  render(){
    return <Provider
      store={store}
    >
      <BrowserRouter>
        <div>
            <Link to="/">Index</Link>------------
            <Link to="/about">About</Link>
        </div>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    </Provider>
  }
}
export default App;

// createStore 函数的简单实现
// const createStore = reducer => {
//   let state;
//   let listeners = [];
//   const getState = () => state;
//   const dispatch = action => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   }
//   const subscribe = listener => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter(l => l !== listenr);
//     }
//   }
//   dispatch({});
//   return { getState, dispatch, subscribe };
// }