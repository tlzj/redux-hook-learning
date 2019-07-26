import React, { Component } from 'react';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import Index from './index.js';
import reducer from './reducers.js';

// 创建一个初始化的state
let initState = {
  card: {
    name: 'Jack-initial',
    picture: 'a.jpg'
  },
  dialog: {
    status: false
  }
}
const store = createStore(reducer, initState)

class App extends Component {
  render(){
    return (
      <Provider
        store={store}
      >
        <BrowserRouter>
          <Route path='/' component={Index} />
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App;