import { Cart } from '../actionTypes';

const initialState = {
  dishesId: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
  case Cart.ADD_ITEM: {
    return {
      ...state,
      dishesId: [...state.dishesId, action.payload],
    };
  }

  case Cart.REMOVE_ITEM: {
    const newList = [...state.dishesId];
    newList.splice(action.payload, 1);
    return {
      ...state,
      dishesId: newList,
    };
  }

  case Cart.REMOVE_ALL_ITEM: {
    const newList = [...state.dishesId];
    newList.splice(0, action.payload);
    return {
      ...state,
      dishesId: newList,
    };
  }

  default:
    return state;
  }
};

export default cart;
