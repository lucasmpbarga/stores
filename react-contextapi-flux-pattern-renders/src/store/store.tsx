// @ts-nocheck
"use client";
import { createContext, useContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "./cart-store/cart.reducer";

export type StoreType = {
  store: any;
  dispatch: any;
};

const combineReducers =
  (...reducers) =>
  (prevState, value, ...args) =>
    reducers.reduce(
      (newState, reducer) => reducer(newState, value, ...args),
      prevState
    );

const reducers = combineReducers(cartReducer);

const storeInitialState = {
  ...cartInitialState,
};

export const Context = createContext(null);

const Store = ({ children }) => {
  const [store, dispatch] = useReducer(reducers, storeInitialState);

  return (
    <Context.Provider value={{ store, dispatch }}>
      <Context.Consumer>{() => <>{children}</>}</Context.Consumer>
    </Context.Provider>
  );
};

export const useStore = () => useContext(Context) as StoreType;

export default Store;
