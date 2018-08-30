'use strict'
import React from 'react';;
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';

import '../css/style.css';
import App from './components/App.jsx';
import reducer from './reducers/addReducer';


ReactDOM.render(
	<Provider store={store}>
   	  <App />
    </Provider>,
    document.getElementById('root')
  );
