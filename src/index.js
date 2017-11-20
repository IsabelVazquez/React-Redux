import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import allReducers from './reducers/root';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers, applyMiddleware(thunk));
// console window.store.getState() - to be removed
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
