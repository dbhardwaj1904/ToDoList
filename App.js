import React from 'react';
import {
  Provider
} from 'react-redux';
import logger from 'redux-logger';
import {
  createStore,
  applyMiddleware
} from 'redux';
import Todo from './Todo';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger));

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}