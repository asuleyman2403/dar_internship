import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import reducers from './reducers';

import "./index.css";

import App from "./app/App";

console.log(process.env);
const __DEV__ = process.env.NODE_ENV;
export let store = createStore(reducers, {});
console.log(window);
if( __DEV__ === "development") {
    store = createStore(
        reducers,
        compose( applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
    );
}
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById("root"));
