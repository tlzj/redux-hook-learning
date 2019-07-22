import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './page-redux/3_page/reducer.js';
import Index from './page-redux/3_page/index.js';
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