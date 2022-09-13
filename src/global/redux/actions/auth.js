import { Auth } from '../actionTypes';

const login = () => ({
  type: Auth.LOGIN,
});

const logout = () => ({
  type: Auth.LOGOUT,
});

export { login, logout };
