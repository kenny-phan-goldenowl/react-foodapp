import { combineReducers } from 'redux';

import { auth, others } from 'global/redux/reducers';

const appReducer = combineReducers({
  auth,
  others,
});

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
