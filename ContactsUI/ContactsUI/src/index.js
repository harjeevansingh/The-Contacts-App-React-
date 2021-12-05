import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import middlewares from './middlewares';
import reducers from './reducers';
import { Provider } from 'react-redux';
import App from "./components/App";

const store = createStore(reducers, middlewares);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root'));