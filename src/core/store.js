import thunkMiddleware from 'redux-thunk';
import { legacy_createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducers';

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
