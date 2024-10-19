import { CartActionTypes } from "./cart.types";

type CartState = {
  cart: {
    items: any[];
    totalPrice: number;
  };
};

export const cartInitialState: CartState = {
  cart: {
    items: [],
    totalPrice: 0,
  },
};

type CartAction = {
  payload: any;
  type: string;
};

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  const actionTypes = {
    [CartActionTypes.ADD_ITEM]: {
      ...state,
      cart: {
        ...state.cart,
        items: [...state.cart.items, action.payload],
        totalPrice: state.cart.totalPrice + action.payload.price,
      },
    },
    [CartActionTypes.ADD_DONATE]: {
      ...state,
      cart: {
        ...state.cart,
        items: [...state.cart.items, action.payload],
        totalPrice: state.cart.totalPrice + action.payload.price,
      },
    },
  };

  return actionTypes[action.type] || state;
};
