import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux'

import * as actions from './actions'

import Form from './components/Form'

import formHandling from './reducers/index'

const loggerMiddleware = createLogger()

const store = createStore(
  formHandling,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Form />
    </Provider>,
    rootEl
  )
}

render();

store.subscribe(render);

store.dispatch({ type: actions.FORM_INIT });
