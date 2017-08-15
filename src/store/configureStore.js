import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import promiseMiddleware from 'redux-promise-middleware';

export default function configureStore(initialState) {
  const store = applyMiddleware(
    promiseMiddleware()
  )(createStore)(rootReducer, initialState);

  return store;
};
