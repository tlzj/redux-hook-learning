import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer.js';
import Index from './index.js';
const initialState = {
  count: 0
}
const store = createStore(reducer, initialState)
console.log(store, '--++--')
class App extends React.Component {
  render(){
    return (
      <Provider
        store={store}
      >
        <Index />
      </Provider>
    )
  }
}
export default App;