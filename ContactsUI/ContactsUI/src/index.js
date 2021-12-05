import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import middlewares from './middlewares';
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers, middlewares);


ReactDOM.render(
    <Provider store={store}>
        
    </Provider>
    ,document.getElementById('root'));