import './global.css'

import React from "react";
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux';
import App from './App'
import Reducers from './reducers/CombinedReducers'

import createHistory from 'history/createBrowserHistory'

import { fetchAllPeople } from './actions/AsyncActions'

const history = createHistory()
const middlewares = [thunkMiddleware, routerMiddleware(history)]
let store = createStore(Reducers, applyMiddleware(...middlewares))

window.store = store

// bootstrap state
store.dispatch(fetchAllPeople());

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
