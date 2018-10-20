import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import "./assets/styles/normalize.css"
import "./assets/styles/common.css"

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);

registerServiceWorker();
