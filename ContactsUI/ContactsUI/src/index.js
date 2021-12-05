import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import middlewares from './middlewares';
import reducers from './reducers';

const store = createStore(reducers, middlewares);


ReactDOM.render(<h1>Hello</h1>,document.getElementById('root'));