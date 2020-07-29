import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './containers/app'; // componentsの方ではないことに注意

// このcssはcomponentsに適用できる．
import './index.css'

const STORE = configureStore();

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById('root') // 流しこむ対象の要素
);