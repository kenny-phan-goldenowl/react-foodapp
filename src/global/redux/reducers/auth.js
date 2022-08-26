import { Auth } from '../actionTypes';

const initialState = {
  name    : '',
  password: '',
  email   : '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
  case Auth.LOGIN:
    return console.log('login');

  case Auth.LOGOUT:
    return console.log('logout');

  default:
    return state;
  }
};

export default auth;
