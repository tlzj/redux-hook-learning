import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import App from './App1.js';
// import App from './App2.js';
// import App from './App3.js';
import App from './App4.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
