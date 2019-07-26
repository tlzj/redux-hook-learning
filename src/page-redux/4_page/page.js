import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Index from './index.js';
import About from './about.js';
import reducer from './redux/reducer.js';
const initialState = {
  indexState: {
    count: 100
  },
  aboutState: {
    count: -100
  }
}
const store = createStore(reducer, initialState)
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