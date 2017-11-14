import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import allReducers from './reducers/root';
import { fetchImages } from './actions/imgur';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers, applyMiddleware(thunk));

store.dispatch(fetchImages("Gaming"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
