import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isOpen: false,
  },
  reducers: {
    add: (state, action) => {
        state.items.push(action.payload);
    },
    remove: (state, action) => {
        state.items.splice(action.payload, 1);
    },
    open: (state) => {
        state.isOpen = true;
    },
    close: (state) => {
        state.isOpen = false;
    }
    }
});

export const { add, remove, open, close } = cartSlice.actions;
export default cartSlice.reducer;