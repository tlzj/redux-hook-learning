import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App-hooks-tlzj.js';
// import App from './amap-react/index.js';
// import App from './page-hooks-tlzj/2.useReducer.js';
// import App from './amap-react/index.other.js';
import App from './page-hooks-tlzj/learning.js';
import * as serviceWorker from './serviceWorker';
import './App.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
