import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  name: string;
  price: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalPrice += newItem.price; // Assuming newItem has a price property
    },
    addDonate: (state, action: PayloadAction<number>) => {
      state.totalPrice += action.payload;
    },
  },
});

export const { addItem, addDonate } = cartSlice.actions;

export const store = configureStore({
  reducer: cartSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
