import { Cart } from '../actionTypes';

const addItem = (data) => ({
  type   : Cart.ADD_ITEM,
  payload: data,
});

const removeItem = (data) => ({
  type   : Cart.REMOVE_ITEM,
  payload: data,
});

const removeAllItem = (data) => ({
  type   : Cart.REMOVE_ALL_ITEM,
  payload: data,
});

export { addItem, removeItem, removeAllItem };
