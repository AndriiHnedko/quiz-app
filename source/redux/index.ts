import {rootReducer} from './rootReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

// @ts-ignore
window.store = store;
export default store;
