'use strict'
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import '../css/style.css';
import App from './components/App.jsx';
import reducer from './reducers/index';


ReactDOM.render(
	<Provider store={store}>
   	  <App />
    </Provider>,
    document.getElementById('root')
  );
