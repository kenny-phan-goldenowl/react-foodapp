import thunkMiddleware from 'redux-thunk';
import { legacy_createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from 'global/redux/reducers/cart';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = legacy_createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

const persistor = persistStore(store);

export { store, persistor };
