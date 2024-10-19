import { CartActionTypes } from "./cart.types";

export type CartAction = {
  payload: { name: string; price: number };
  type: string;
};

export const addItem = (value: any): CartAction => ({
  type: CartActionTypes.ADD_ITEM,
  payload: value,
});

export const addDonate = (value: any): CartAction => ({
  type: CartActionTypes.ADD_DONATE,
  payload: value,
});
