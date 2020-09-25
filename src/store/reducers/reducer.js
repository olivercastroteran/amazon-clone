export const initialState = {
  basket: [],
};

// Selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((total, item) => item.price + total, 0).toFixed(2);
};

const reducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
