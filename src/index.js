import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/root';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//allReducers - To Be Imported and inserted into createStore
const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
