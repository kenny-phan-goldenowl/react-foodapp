import thunkMiddleware from 'redux-thunk';
import { legacy_createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import cartReducer from 'global/redux/reducers/cart';

const store = legacy_createStore(
  cartReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
