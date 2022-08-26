import { combineReducers } from 'redux';

import { auth, cart } from 'global/redux/reducers';

const appReducer = combineReducers({
  auth,
  cart,
});

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
